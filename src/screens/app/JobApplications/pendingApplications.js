import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Container, Filters } from '../../../components';
import ApplicationStatusCard from './applicationStatusCard';

const options = [
  { text: 'By Date' },
  { text: 'By Salary' },
  { text: 'By Last date' },
  { text: 'By Bond value' },
];

const PendingJobApplications = () => (
  <View>
    <Container>
      <Filters style={styles.filters} options={options} />
      <ApplicationStatusCard pending />
      <ApplicationStatusCard pending />
      <ApplicationStatusCard pending />
    </Container>
  </View>
);

export default PendingJobApplications;

const styles = StyleSheet.create({
  filters: {
    marginBottom: 15,
  },
});
