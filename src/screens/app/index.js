import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {
  color, fonts, PropTypes, screens,
} from '../../utils';
import NavigationService from '../../NavigationService';
import {
  AcademicDetails, AccountDetails, ChangePassword, PersonalDetails, Profile, UpdateRequests,
} from './Profile';
import { Dashboard } from './dashboard';
import { JobConfirmation, JobDetails } from './Job';
import JobApplications from './JobApplications/jobApplications';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

export const AppStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerTitle: null,
      headerStyle: {
        backgroundColor: color.background,
        elevation: 0,
      },
      cardStyle: {
        backgroundColor: color.background,
      },
      headerTitleAlign: 'center',
      headerTitleStyle: {
        color: color.primary,
        fontFamily: fonts.semiBold,
      },
      headerLeft: (props) => (
        <Icon
          name="arrow-left"
          size={20}
          style={{ marginHorizontal: 15 }}
          color={color.secondary}
          onPress={() => NavigationService.goBack()}
          {...props}
        />
      ),
    }}
  >
    <Stack.Screen
      name={screens.bottomTabNavigation.path}
      options={{ headerShown: false }}
      component={AppBottomNavigation}
    />
    {/** ------------------------------------------------------------ */}
    <Stack.Screen
      name={screens.personalDetails.path}
      component={PersonalDetails}
    />
    <Stack.Screen
      name={screens.academicDetails.path}
      component={AcademicDetails}
    />
    <Stack.Screen
      name={screens.accountDetails.path}
      component={AccountDetails}
    />
    <Stack.Screen
      name={screens.changePassword.path}
      component={ChangePassword}
    />
    <Stack.Screen
      name={screens.profile.path}
      component={Profile}
    />
    <Stack.Screen
      name={screens.pendingRequests.path}
      component={UpdateRequests}
    />
    {/** ------------------------------------------------------------ */}
    <Stack.Screen
      name={screens.jobDetail.path}
      component={JobDetails}
    />
    <Stack.Screen
      name={screens.jobApplyForm.path}
      component={JobConfirmation}
    />
    {/** ------------------------------------------------------------ */}
    <Stack.Screen
      name={screens.jobApplication.path}
      component={JobApplications}
    />
  </Stack.Navigator>
);

const CustomTabBarIcon = ({
  focused, size, iconName,
}) => (
  <Icon size={size} name={iconName} color={focused ? color.secondary : color.primary} />
);

export const AppBottomNavigation = () => (
  <Tab.Navigator
    tabBarOptions={{
      activeTintColor: color.secondary,
      inactiveTintColor: color.primary,
      showIcon: true,
      keyboardHidesTabBar: true,
      style: { height: 65, padding: 0 },
      tabStyle: {
        padding: 6,
        justifyContent: 'center',
        alignItems: 'center',
      },
    }}
    sceneContainerStyle={{ backgroundColor: color.background }}
  >
    <Tab.Screen
      component={Dashboard}
      name={screens.home.path}
      options={{
        tabBarIcon: (props) => <CustomTabBarIcon label="Home" {...props} iconName="home" />,
      }}
    />
    <Tab.Screen
      component={JobApplications}
      name={screens.jobApplication.path}
      options={{
        tabBarIcon: (props) => <CustomTabBarIcon label="Booking" {...props} iconName="graduation-cap" />,
      }}
    />
    <Tab.Screen
      component={Profile}
      name={screens.profile.path}
      options={{
        tabBarIcon: (props) => <CustomTabBarIcon label="Profile" {...props} iconName="user" />,
      }}
    />
  </Tab.Navigator>
);

CustomTabBarIcon.defaultProps = {
  focused: false,
  size: undefined,
};
CustomTabBarIcon.propTypes = {
  focused: PropTypes.bool,
  size: PropTypes.number,
  iconName: PropTypes.string.isRequired,
};
