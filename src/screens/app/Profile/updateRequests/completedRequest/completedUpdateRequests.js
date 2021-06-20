import React, { useEffect } from 'react';

import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { useDispatch, useSelector } from 'react-redux';
import { addCompletedRequests } from '../../../../../actions';
import { Badge, Container, Error } from '../../../../../components';
import { useDatabase } from '../../../../../hooks';
import { getAllCompletedRequests } from '../../../../../middleware';
import { color } from '../../../../../utils';
import CompletedUpdateRequestCard from './completedUpdateRequestCard';

const filters = [
  {
    text: 'By Categoty',
  },
  {
    text: 'By Date',
  },
];

const CompletedUpdateRequests = () => {
  const completedRequests = useSelector((state) => state.completedRequests);
  const dispatch = useDispatch();

  const { loading, callDatabase } = useDatabase(getAllCompletedRequests);
  const requests = Object.keys(completedRequests?.requests)
    .map((key) => completedRequests?.requests[key]);

  useEffect(() => {
    callDatabase((data) => {
      dispatch(addCompletedRequests(data));
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
          renderItem={({ item }) => (<CompletedUpdateRequestCard {...item.data} id={item.id} />)}
        />
      ) : <Error heading="Hey! You haven't any verified update requests." />}
    </Container>
  );
};

export default CompletedUpdateRequests;

const styles = StyleSheet.create({

  filterContainer: {
    paddingBottom: 12,
  },
  badge: {
    marginRight: 8,
    borderWidth: 1,
    borderColor: color.primary,
  },
});
