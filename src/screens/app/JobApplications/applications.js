import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TopTab } from '../../../components';
import NavigationService from '../../../NavigationService';
import { color, containerPadding, PropTypes, screens } from '../../../utils';
import { bookingData } from '../../../assets/data';
import ApplicationStatusCard from './applicationStatusCard';

const Stack = createStackNavigator();

const ApplicationList = ({ applications }) => (
  <FlatList
    data={applications}
    keyExtractor={(_, index) => `ApplicationStatusCard-${index.toString()}`}
    renderItem={({ item }) => (
      <ApplicationStatusCard
        {...item}
        onPress={() => NavigationService.navigate(screens.bookingDetail.path)}
      />
    )}
    showsVerticalScrollIndicator={false}
    style={{ paddingHorizontal: containerPadding }}
  />
);

ApplicationList.propTypes = {
  applications: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
};

const Tabs = () => {
  const tabs = [
    {
      name: 'Pending',
      screen: () => <ApplicationList applications={bookingData} />,
    },
    {
      name: 'Completed',
      screen: () => <ApplicationList applications={bookingData.slice(1, 6)} />,
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
