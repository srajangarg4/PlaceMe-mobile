import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Property, Text } from '../../../../../components';
import NavigationService from '../../../../../NavigationService';
import { color, PropTypes, screens } from '../../../../../utils';

const navigateToDetails = () => NavigationService.navigate(screens.updateRequestDetail.path);

const CompletedUpdateRequestCard = ({ title, updatedOn, approvedOn, category, status }) => (
  <Card style={styles.card} onPress={navigateToDetails}>
    <Text
      type="h4"
      color={color.primary}
      fontType="semiBold"
      style={styles.title}
    >
      {title}
    </Text>
    <Property keyName="Requested On" value={updatedOn} />
    <Property keyName="Approved On" value={approvedOn} />
    <Property keyName="Category" value={category} />
    <Property
      keyName="Status"
      value={status}
      valueStyle={styles.status}
      valueColor={color.white}
      valueBackgroundColor={getColorByStatus(status)}
    />
  </Card>
);

const getColorByStatus = (status) => {
  const stat = status.toLowerCase();
  switch (stat) {
    case 'rejected':
      return color.error;
    case 'accepted':
      return color.success;
    default:
      return color.green;
  }
};

CompletedUpdateRequestCard.propTypes = {
  title: PropTypes.string.isRequired,
  updatedOn: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  approvedOn: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};

export default CompletedUpdateRequestCard;

const styles = StyleSheet.create({
  card: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.lightBule,
    marginBottom: 20,
  },
  title: {
    marginBottom: 7,
  },
  status: {
    paddingHorizontal: 6,
    borderRadius: 5,
    paddingVertical: 3,
  },
});
