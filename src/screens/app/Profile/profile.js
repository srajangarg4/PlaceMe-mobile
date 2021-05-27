import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Avatar, Container, Text } from '../../../components';
import {
  color,
  navigationType,
  PropTypes,
  screens,
  viewStyleType,
} from '../../../utils';
import { removeAuth as logout } from '../../../actions';
import NavigationService from '../../../NavigationService';

const Profile = ({ photoUri, navigation }) => {
  console.log(navigation);
  const dispatch = useDispatch();
  return (
    <Container style={styles.container}>
      <View>
        <ProfileDetails
          name="Tobugo"
          phoneNumber="+91 99999000"
          email="tobugo@gmail.com"
          imgSrc={{ uri: photoUri }}
          onPress={() => NavigationService.navigate(screens.accountDetails.path)}
        />
        <Option
          name="Academic Details"
          icon="university"
          onPress={() => NavigationService.navigate(screens.academicDetails.path)}
        />
        <Option
          name="Personal Details"
          icon="user-shield"
          onPress={() => NavigationService.navigate(screens.personalDetails.path)}
        />
        <Option
          name="Update Requests"
          icon="history"
          onPress={() => NavigationService.navigate(screens.pendingRequests.path)}
        />

        <Option
          name="Change Password"
          icon="lock"
          onPress={() => NavigationService.navigate(screens.changePassword.path)}
        />

        <Option
          name="Logout"
          icon="sign-out-alt"
          onPress={() => {
            dispatch(logout());
          }}
        />
      </View>
    </Container>
  );
};

const uri = 'https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg';

const ProfileDetails = ({
  containerStyle,
  email,
  phoneNumber,
  name,
  onPress,
}) => (
  <View>
    <View style={[styles.profileContainer, containerStyle]}>
      <Avatar imgSrc={{ uri }} size={80} />
      <View style={{ marginLeft: 15, justifyContent: 'space-between' }}>
        <Text fontSize={22} fontType="semiBold" color={color.primary}>
          {name}
        </Text>
        <Text type="hs" color={color.primary}>
          {email}
        </Text>
        <Text type="hs" color={color.primary}>
          {phoneNumber}
        </Text>
      </View>
      <View style={styles.avatarContainer}>
        <Icon
          name="pencil-alt"
          size={15}
          color={color.secondary}
          onPress={onPress}
        />
      </View>
    </View>
  </View>
);

ProfileDetails.defaultProps = {
  containerStyle: {},
  email: '',
  phoneNumber: '',
  name: '',
  onPress: undefined,
};
ProfileDetails.propTypes = {
  containerStyle: viewStyleType,
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
  name: PropTypes.string,
  onPress: PropTypes.func,
};

const Option = ({ name, icon, onPress }) => (
  <TouchableOpacity
    style={[styles.option]}
    onPress={onPress}
    activeOpacity={1.0}
  >
    <View style={{ flexDirection: 'row' }}>
      <Icon name={icon} style={{ marginRight: 10 }} size={22} />
      <Text fontType="semiBold" color={color.primary}>
        {name}
      </Text>
    </View>
    <View>
      <Icon name="chevron-right" style={styles.moreIcon} />
    </View>
  </TouchableOpacity>
);

Option.defaultProps = {
  name: '',
  icon: '',
  onPress: undefined,
};
Option.propTypes = {
  name: PropTypes.string,
  icon: PropTypes.string,
  onPress: PropTypes.func,
};

Profile.defaultProps = {
  photoUri: undefined,
};

Profile.propTypes = {
  photoUri: PropTypes.string,
  navigation: navigationType.isRequired,
};

export default Profile;

const styles = StyleSheet.create({
  profileContainer: {
    flexDirection: 'row',
    borderColor: color.black,
    borderWidth: 0.5,
    padding: 15,
    borderRadius: 8,
    height: 125,
    alignItems: 'center',
  },
  avatar: {
    width: 85,
    height: 85,
    borderRadius: 44,
  },
  option: {
    flexDirection: 'row',
    borderWidth: StyleSheet.hairlineWidth,
    paddingVertical: 15,
    borderColor: color.lightBule,
    marginTop: 25,
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  moreIcon: {
    alignSelf: 'flex-end',
  },
  avatarContainer: {
    position: 'absolute',
    right: 12,
    top: 12,
    borderRadius: 15,
    borderWidth: 1,
    padding: 5,
    alignContent: 'center',
    justifyContent: 'center',
    borderColor: color.secondary,
  },
  container: {
    paddingTop: 20,
  },
});
