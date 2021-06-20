import React, { useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { addUpdateRequests } from '../../../../../actions/pendingRequests';
import { Badge, Container, Error } from '../../../../../components';
import { useDatabase } from '../../../../../hooks';
import { getAllPendingRequests } from '../../../../../middleware';
import { color } from '../../../../../utils';
import PendingRequestCard from './pendingRequestCard';

const filters = [
  {
    text: 'By Categoty',
  },
  {
    text: 'By Date',
  },
];

const PendingUpdateRequests = () => {
  const updateRequests = useSelector((state) => state.updateRequests);
  const dispatch = useDispatch();

  const { loading, callDatabase } = useDatabase(getAllPendingRequests);

  const requests = Object.keys(updateRequests?.requests)
    .map((key) => updateRequests?.requests[key]);

  useEffect(() => {
    console.log('Changed', updateRequests);
  }, [updateRequests]);

  useEffect(() => {
    callDatabase((data) => {
      console.log('Data from firebase', data);
      dispatch(addUpdateRequests(data));
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container loading={loading}>
      <View style={styles.filterContainer}>
        <FlatList
          horizontal
          data={filters}
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <Badge
              {...item}
              style={styles.badge}
              textColor={color.primary}
              color={color.white}
            />
          )}
        />
      </View>
      {requests.length !== 0 ? (
        <FlatList
          data={requests}
          keyExtractor={(i, index) => index.toString()}
          renderItem={({ item }) => <PendingRequestCard {...item.data} id={item.id} />}
        />
      ) : <Error heading="Hey!" subHeading="You haven't any verified update requests." />}
    </Container>
  );
};

export default PendingUpdateRequests;

const styles = StyleSheet.create({
  list: {
    marginHorizontal: 15,
  },
  filterContainer: {
    paddingBottom: 12,
  },
  badge: {
    marginRight: 8,
    borderWidth: 1,
    borderColor: color.primary,
  },
});
