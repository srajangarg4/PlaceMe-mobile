import React from 'react';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import { Badge, Card, HorizontalLine, Text } from '../../../components';
import { color, PropTypes } from '../../../utils';

// const getTypeColor = (type) => {
//   switch (type) {
//     case 'Confirmed': {
//       return color.green;
//     }
//     case 'Partially': {
//       return color.secondary;
//     }
//     case 'Cancelled': {
//       return color.error;
//     }
//     default: {
//       return color.primary;
//     }
//   }
// };

const DetailTab = ({ name, value, alignment }) => (
  <View>
    <Text type="h5" color={color.primary} style={styles.name}>
      {name}
    </Text>
    <Text type="hs" style={[styles.value, { textAlign: alignment }]}>
      {value}
    </Text>
  </View>
);

DetailTab.defaultProps = {
  name: '',
  value: '',
  alignment: 'left',
};

DetailTab.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
  alignment: PropTypes.string,
};

const ApplicationStatusCard = () => (
  <Card style={styles.bookingCard}>
    <View>
      <Text color={color.primary} fontType="semiBold" type="h4">
        Associate Staff Consultant
      </Text>
      <Text type="hs">Nagarro Digital Pvt. Ltd.</Text>
    </View>
    <View style={styles.row}>
      <DetailTab name="Applied on" value="12/02/2021" />
      <DetailTab name="Rounds" value="3/5" alignment="right" />
    </View>
    <HorizontalLine height={1} style={styles.line} />
    <View style={styles.row}>
      <Badge text="Key" color={color.green} />
      <Icon name="chevron-right" size={15} />
    </View>
  </Card>
);

export default ApplicationStatusCard;

const styles = StyleSheet.create({
  bookingCard: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: color.lightBule,
    marginBottom: 20,
  },
  cardDetail: {
    flexDirection: 'row',
    marginVertical: 8,
  },
  playersContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  row: {
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  value: {
    textAlign: 'right',
  },
  name: {
    marginBottom: 3,
  },
});
