import React from 'react';
import { StyleSheet, View } from 'react-native';
import {
  Card, Text,
} from '../../../components';
import {
  color,
} from '../../../utils';

const JobCard = () => (
  <Card>
    <View style={styles.container}>
      <View style={styles.bottomDetails}>
        <Text
          style={[styles.title]}
          color={color.primary}
          type="h2"
          fontType="semiBold"
        >
          Title
        </Text>
        <Text style={styles.subtitle}>Subtitle</Text>
      </View>
    </View>
  </Card>
);

JobCard.defaultProps = {
};
JobCard.propTypes = {
};

export default JobCard;

const styles = StyleSheet.create({
  container: {
    borderRadius: 6,
    overflow: 'hidden',
  },
  headerImage: {
    height: 150,
    width: '100%',
  },
  bottomDetails: {
    backgroundColor: color.white,
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderColor: color.lightBule,
  },
  starContainer: {
    flexDirection: 'row',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  sportsContainer: {
    flexDirection: 'row',
  },
  title: {},
  subtitle: {},
  line: {
    height: 25,
    width: 1,
    backgroundColor: color.textGray,
    alignSelf: 'center',
    marginHorizontal: 5,
  },
  sportsIcons: {
    marginHorizontal: 3,
  },
  starIcon: {
    marginRight: 3,
  },
});
