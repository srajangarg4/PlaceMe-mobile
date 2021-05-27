import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Property, Text } from '../../../../../components';
import NavigationService from '../../../../../NavigationService';
import { color, PropTypes, screens } from '../../../../../utils';

const navigateToDetails = () => NavigationService.navigate(screens.updateRequestDetail.path);

const PendingRequestCard = ({ title, updatedOn, category }) => (
  <Card style={styles.card} onPress={navigateToDetails}>
    <Text type="h4" color={color.primary} fontType="semiBold">{title}</Text>
    <Property keyName="Requested On" value={updatedOn} />
    <Property keyName="Category" value={category} />
  </Card>
);

PendingRequestCard.propTypes = {
  title: PropTypes.string.isRequired,
  updatedOn: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default PendingRequestCard;

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
  status: {
    backgroundColor: color.error,
    paddingHorizontal: 6,
    borderRadius: 5,
  },
});
