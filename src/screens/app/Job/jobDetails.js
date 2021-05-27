import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, ToastAndroid, View } from 'react-native';
import {
  Accordion,
  Badge,
  Button,
  Container,
  HorizontalLine,
  Property,
  Text,
} from '../../../components';
import { color } from '../../../utils';
import Cover from './cover';

const description = 'Lorem ipsum dolor sit amet, r. Phasellus dapibus laoreet massa ut tincidunt. Pellentesque bibendum, leo quis pulvinar cursus, justo ligula venenatis odio, eget luctus elit dolor id nunc. Duis ut tellus egestas, luctus libero sit amet, aliquam turpis. Duis ac odio eget urna imperdiet laoreet vel vel quam. Nam et nunc commodo, elementum justo vel, rutrum nibh. Sed et odio sit amet erat dignissim suscipit. Praesent vitae diam volutpat dui pharetra varius non sit amet magna. Fusce nisl magna, ultrices vel iaculis sit amet, ornare laoreet risus.';

const JobDetails = () => {
  const [loading, setloading] = useState(false);
  return (
    <View style={styles.root}>
      <Container style={{ paddingHorizontal: 0 }}>
        <Cover style={styles.cover} />
        <View style={styles.group}>
          <Text
            type="h3"
            fontType="semiBold"
            color={color.primary}
            style={styles.heading}
          >
            Software Developer intern
          </Text>
          <Text type="hs">Nagarro Digital Pvt. Ltd</Text>
        </View>
        <View style={styles.group}>
          <HorizontalLine height={1.5} />
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <Badge text="Java" style={styles.badge} />
            <Badge text="C++" style={styles.badge} />
            <Badge text="DotNet" style={styles.badge} />
            <Badge text="JavaScript" style={styles.badge} />
            <Badge text="Python" style={styles.badge} />
            <Badge text="React" style={styles.badge} />
          </ScrollView>
          <HorizontalLine height={1.5} />
        </View>
        <View style={styles.group}>
          <Property keyName="Salary" value="6 LPA" />
          <Property keyName="For batches" value="2021" />
          <Property keyName="For department" value="CSE, ECE" />
          <Property keyName="Allowed backlogs" value="2" />
          <Property keyName="Apply till" value="12/02/2000" />
        </View>
        <View style={styles.group}>
          <Accordion title="Description">
            <Text type="hs" color={color.black} numberOfLines={4}>
              {description}
            </Text>
          </Accordion>
        </View>
        <View style={styles.group}>
          <Accordion title="Bond">
            <Text type="hs" color={color.black} numberOfLines={4}>
              {description}
            </Text>
          </Accordion>
        </View>
        <View style={styles.group}>
          <Accordion title="Rounds">
            <Text type="hs" color={color.black} numberOfLines={4}>
              {description}
            </Text>
          </Accordion>
        </View>
      </Container>
      <View style={styles.button}>
        <Button
          text="Apply now"
          style={{
            marginVertical: 15,
          }}
          loading={loading}
          onPress={() => {
            Alert.alert('Confirmation', 'Do you agree with the company policy?', [
              { text: 'No' },
              {
                text: 'Yes',
                onPress: async () => {
                  setloading(true);
                  await setTimeout(() => {
                    setloading(false);
                    ToastAndroid.show('Sucessfully applied', 3000);
                  }, 1000);
                } },
            ]);
          }}
        />
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  cover: {
    marginBottom: 40,
  },
  badge: {
    marginVertical: 5,
    marginRight: 3,
    height: 25,
  },
  group: {
    marginBottom: 15,
    paddingHorizontal: 15,
  },
  heading: {
    marginBottom: 5,
  },
  button: {
    backgroundColor: color.background,
    width: '100%',
    zIndex: 2,
    alignItems: 'center',
    paddingHorizontal: 15,
  },
  container: {},
});

export default JobDetails;
