import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TopTab } from '../../../components';
import { color, screens } from '../../../utils';
import CompletedJobApplications from './completedApplications';
import PendingJobApplications from './pendingApplications';

const Stack = createStackNavigator();

const Tabs = () => {
  const tabs = [
    {
      name: 'Pending',
      screen: () => <PendingJobApplications />,
    },
    {
      name: 'Completed',
      screen: () => <CompletedJobApplications />,
    },
  ];
  return (
    <TopTab
      tabs={tabs}
      tabContainerStyle={styles.tabContainerStyle}
      scrollerColor={color.secondary}
    />
  );
};

const Applications = () => (
  <Stack.Navigator>
    <Stack.Screen
      name={screens.jobApplication.path}
      component={Tabs}
      options={{
        headerTitleAlign: 'center',
        cardStyle: {
          backgroundColor: color.background,
        },
      }}
    />
  </Stack.Navigator>
);

const styles = StyleSheet.create({
  tabContainerStyle: {
    paddingHorizontal: 20,
    borderRadius: 12,
    borderWidth: 1,
    marginHorizontal: 15,
    marginBottom: 15,
    borderColor: color.lightGray,
  },
});
export default Applications;
