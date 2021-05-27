import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Badge, Container } from '../../../../components';
import { color } from '../../../../utils';
import { PendingRequestCard } from './components';

const data = [
  {
    title: 'Date of birth update',
    updatedOn: '19/09/1000',
    approvedOn: '21/09/1000',
    category: 'Personal Details',
    dataUpdated: {
      name: 'Papa',
    },
    status: 'Approved',
  },
  {
    title: 'Mobile number update',
    updatedOn: '20/09/1000',
    approvedOn: '24/09/1000',
    category: 'Personal Details',
    dataUpdated: {
      name: 'Papa',
    },
    status: 'Rejected',
  },
];

const filters = [
  {
    text: 'By Categoty',
  },
  {
    text: 'By Date',
  },
];

const PendingUpdateRequests = () => (
  <Container>
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
    <FlatList
      data={data}
      keyExtractor={(i, index) => index.toString()}
      renderItem={({ item }) => <PendingRequestCard {...item} />}
    />
  </Container>
);

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
