import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Property, Text } from '../../../../../components';
import { color, PropTypes, resolveDate, screens } from '../../../../../utils';

const PendingRequestCard = ({ title, requestedOn, type, id }) => {
  const { navigate } = useNavigation();
  return (
    <Card style={styles.card} onPress={() => navigate(screens.updateRequestDetail.path, { id })}>
      <Text type="h4" color={color.primary} fontType="semiBold">{title}</Text>
      <Property keyName="Requested On" value={resolveDate(requestedOn).toDateString()} />
      <Property keyName="Category" value={type} />
    </Card>
  );
};

PendingRequestCard.propTypes = {
  title: PropTypes.string.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  requestedOn: PropTypes.any.isRequired,
  type: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
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
