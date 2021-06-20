import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import FAIcon from 'react-native-vector-icons/FontAwesome5';
import ADIcon from 'react-native-vector-icons/AntDesign';
import MIcon from 'react-native-vector-icons/MaterialIcons';
import { color, fonts, screens } from '../../utils';
import NavigationService from '../../NavigationService';
import { CompletedRequestDetails, UpdateRequestDetails } from './Profile/updateRequests';
import {
  AcademicDetails,
  ChangePassword,
  EditProfile,
  PersonalDetails,
  Profile,
  UpdateRequests,
} from './Profile';
import { JobConfirmation, JobDetails } from './Job';
import { Applications, JobApplicationDetail } from './JobApplications';

import { HomeNavigator } from './Home';
import Documents from './Profile/documents';

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
        fontSize: 16,
      },
      headerLeft: (props) => (
        <FAIcon
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
    <Stack.Screen name={screens.accountDetails.path} component={EditProfile} />
    <Stack.Screen
      name={screens.changePassword.path}
      component={ChangePassword}
    />
    <Stack.Screen
      name={screens.pendingRequests.path}
      component={UpdateRequests}
    />
    <Stack.Screen
      name={screens.updateRequestDetail.path}
      component={UpdateRequestDetails}
    />
    <Stack.Screen
      name={screens.completedRequestDetail.path}
      component={CompletedRequestDetails}
    />
    <Stack.Screen
      options={{
        headerTitle: screens.documents.title }}
      name={screens.documents.path}
      component={Documents}
    />
    {/** ------------------------------------------------------------ */}
    <Stack.Screen
      name={screens.jobDetail.path}
      component={JobDetails}
      options={{
        headerShown: false,
      }}
    />
    <Stack.Screen
      name={screens.jobApplyForm.path}
      component={JobConfirmation}
    />

    <Stack.Screen
      name={screens.jobApplicationDetail.path}
      component={JobApplicationDetail}
    />
    {/** ------------------------------------------------------------ */}
  </Stack.Navigator>
);

// const CustomTabBarIcon = ({ focused, size, iconName }) => (
//   <Icon
//     size={size}
//     name={iconName}
//     color={focused ? color.secondary : color.primary}
//   />
// );

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
      component={HomeNavigator}
      name={screens.home.path}
      options={{
        tabBarIcon: (props) => <ADIcon {...props} name="home" />,
      }}
    />
    <Tab.Screen
      component={Applications}
      name={screens.jobApplication.path}
      options={{
        tabBarIcon: (props) => (
          <MIcon label="Booking" {...props} name="work-outline" />
        ),
      }}
    />
    <Tab.Screen
      component={Profile}
      name={screens.profile.path}
      options={{
        tabBarIcon: (props) => (
          <FAIcon label="Profile" {...props} name="user" />
        ),
      }}
    />
  </Tab.Navigator>
);
