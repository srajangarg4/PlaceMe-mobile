import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';
import { Avatar, Container, Text } from '../../../components';
import {
  color,
  PropTypes,
  screens,
  viewStyleType,
} from '../../../utils';
import NavigationService from '../../../NavigationService';
import { logout } from '../../../middleware/auth';

const Profile = ({ photoUri }) => {
  const user = useSelector((state) => state.user);
  const { email, mobile, name } = { ...user };
  const { firstName, lastName } = { ...name };
  return (
    <Container style={styles.container}>
      <View>
        <ProfileDetails
          name={`${firstName} ${lastName}`}
          phoneNumber={mobile}
          email={email}
          imgSrc={{ uri: photoUri }}
          onPress={() => NavigationService.navigate(screens.accountDetails.path)}
        />
        <Option
          name="Personal Details"
          icon="user-shield"
          onPress={() => NavigationService.navigate(screens.personalDetails.path)}
        />
        <Option
          name="Academic Details"
          icon="university"
          onPress={() => NavigationService.navigate(screens.academicDetails.path)}
        />
        <Option
          name="Documents"
          icon="folder-open"
          onPress={() => NavigationService.navigate(screens.documents.path)}
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
            logout();
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
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <Icon color={color.secondary} name={icon} style={{ marginRight: 10 }} size={18} solid />
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
