import React from 'react';
import { StyleSheet } from 'react-native';
import { TopTab } from '../../../../components';
import { color } from '../../../../utils';
import CompletedUpdateRequests from './completedRequest/completedUpdateRequests';
import PendingUpdateRequests from './pendingRequest/pendingUpdateRequests';

const tabs = [
  {
    name: 'Pending', screen: PendingUpdateRequests,
  },
  {
    name: 'Completed', screen: CompletedUpdateRequests,
  },
];

const UpdateRequests = () => (
  <TopTab
    tabs={tabs}
    scrollerColor={color.secondary}
    tabContainerStyle={styles.tabs}
  />
);

const styles = StyleSheet.create({
  tabs: {
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    marginHorizontal: 15,
    marginBottom: 15,
    borderColor: color.lightGray,
  },
});

export default UpdateRequests;
