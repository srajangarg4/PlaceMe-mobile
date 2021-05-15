import React from 'react';
import { useDispatch } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Container, Icon, Text } from '../../../components';
import {
  color, navigationType, PropTypes, screens, viewStyleType,
} from '../../../utils';
import { removeAuth as logout } from '../../../actions';
import NavigationService from '../../../NavigationService';

const Profile = ({ photoUri, navigation }) => {
  console.log(navigation);
  const dispatch = useDispatch();
  return (
    <Container>
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
          icon="addressBook"
          onPress={() => navigation.navigate(screens.academicDetails.path)}
        />
        <Option
          name="Personal Details"
          icon="sportsPreference"
          onPress={() => NavigationService.navigate(screens.personalDetails.path)}
        />
        <Option
          name="Change Password"
          icon="lock"
          onPress={() => NavigationService.navigate(screens.changePassword.path)}
        />
        <Option
          name="Logout"
          icon="logout"
          onPress={() => {
            dispatch(logout());
          }}
        />
      </View>
    </Container>
  );
};

const ProfileDetails = ({
  containerStyle,
  email,
  phoneNumber,
  name,
  onPress,
}) => (
  <View>
    <View style={[styles.profileContainer, containerStyle]}>
      <View style={{ marginLeft: 15, justifyContent: 'space-between' }}>
        <Text fontSize={22} fontType="semiBold" color={color.primary}>{name}</Text>
        <Text type="hs" color={color.primary}>{email}</Text>
        <Text type="hs" color={color.primary}>{phoneNumber}</Text>
      </View>
      <View style={styles.avatarContainer}>
        <Icon name="edit" size={25} rounded onPress={onPress} />
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
  <TouchableOpacity style={[styles.option]} onPress={onPress} activeOpacity={1.0}>
    <View style={{ flexDirection: 'row' }}>
      <Icon name={icon} style={{ marginRight: 10 }} size={22} />
      <Text fontType="semiBold" color={color.primary}>{name}</Text>
    </View>
    <Icon name="downArrow" style={styles.moreIcon} />
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
    transform: [{ rotate: '-90deg' }],
    alignSelf: 'flex-end',
  },
  avatarContainer: {
    position: 'absolute',
    right: 12,
    top: 12,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: color.secondary,
  },
});
