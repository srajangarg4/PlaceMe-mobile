import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Property, Text } from '../../../../../components';
import { color, PropTypes, resolveDate, screens } from '../../../../../utils';

const getColorByStatus = (type) => {
  switch (type) {
    case 'rejected':
      return color.error;
    case 'accepted':
      return color.green;
    default:
      return color.green;
  }
};

const CompletedUpdateRequestCard = ({
  title, requestedOn, verifiedOn, type, isAccepted, id, updatesRequired, verifiedBy,
}) => {
  const { navigate } = useNavigation();
  const status = isAccepted ? 'accepted' : 'rejected';

  return (
    <Card style={styles.card} onPress={() => navigate(screens.completedRequestDetail.path, { id })}>
      <Text
        type="h4"
        color={color.primary}
        fontType="semiBold"
        style={styles.title}
      >
        {title}
      </Text>
      <Property keyName="Requested On" value={resolveDate(requestedOn).toDateString()} />
      <Property keyName="Approved On" value={resolveDate(verifiedOn).toDateString()} />
      <Property keyName="Category" value={type} />
      <Property
        keyName="Status"
        value={status}
        valueStyle={styles.status}
        valueColor={color.white}
        valueBackgroundColor={getColorByStatus(status)}
      />
    </Card>
  );
};

CompletedUpdateRequestCard.propTypes = {
  title: PropTypes.string.isRequired,
  requestedOn: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  verifiedOn: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  isAccepted: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  updatesRequired: PropTypes.any.isRequired,
  verifiedBy: PropTypes.instanceOf(Date).isRequired,
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
