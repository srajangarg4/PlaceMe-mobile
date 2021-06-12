import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Accordion, Container, Property, Text } from '../../../components';
import { color } from '../../../utils';

const JobApplicationDetail = () => (
  <Container>
    <View style={styles.header}>
      <Text
        color={color.primary}
        type="h2"
        fontType="semiBold"
        style={styles.heading}
      >
        Software Developer Intern
      </Text>
      <Text
        type="h5"
        fontType="semiBold"
      >
        Nagarro Digital Pvt Ltd
      </Text>
    </View>
    <Property keyName="Applied on" value="12-March-2015" />
    <Property keyName="Status" value="Selected" />
    <Accordion title="Round Details" open>
      <Property keyName="Status" value="Selected" />
      <Property keyName="Status" value="Selected" />
      <Property keyName="Status" value="Selected" />
      <Property keyName="Status" value="Selected" />
      <Property keyName="Status" value="Selected" />
    </Accordion>
    <Accordion title="Comments (if any)">
      <Property keyName="Status" value="Selected" />
    </Accordion>
  </Container>
);

export default JobApplicationDetail;

const styles = StyleSheet.create({
  header: {
    marginBottom: 40,
  },
  heading: {
    marginBottom: 4,
  },
});
