import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, ScrollView, StyleSheet, ToastAndroid, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
  Accordion,
  Badge,
  Button,
  Container,
  HorizontalLine,
  Property,
  Text,
} from '../../../components';
import { color, resolveDate, resolveSalary } from '../../../utils';
import Cover from './cover';

const Bond = ({ doesExist, period, amount }) => (
  <Accordion title="Bond">
    {doesExist
      ? (

        <Property keyName="Amount" value={amount} />

      )
      : (
        <Text>
          No Bond
        </Text>
      )}

  </Accordion>
);

const JobDetails = () => {
  const { params: { id } } = useRoute();
  const job = useSelector((state) => state.job);
  const company = useSelector((state) => state.company);

  const jobDetail = job.jobs[id];
  const { company: companyId } = { ...jobDetail };
  const companyDetail = company.companies[companyId];

  const { logo: { uri } = {}, name: companyName } = { ...companyDetail };
  const {
    lastDateToApply, salary, title: jobTitle, description, maxBacklogs,
    forBatchs, forDepartments, bond, jobType, location, maxAcademicGap
  } = { ...jobDetail };
  console.log('Job details', bond);

  const [loading, setloading] = useState(false);
  return (
    <View style={styles.root}>
      <Container style={{ paddingHorizontal: 0 }}>
        <Cover style={styles.cover} logo={uri} />
        <View style={styles.group}>
          <Text
            type="h3"
            fontType="semiBold"
            color={color.primary}
            style={styles.heading}
          >
            {jobTitle}
          </Text>
          <Text type="hs">{companyName}</Text>
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
          <Property keyName="Salary" value={resolveSalary(salary)} />
          <Property keyName="For batches" value={forBatchs?.join(', ')} />
          <Property keyName="For department" value={forDepartments?.join(', ')} />
          <Property keyName="Allowed backlogs" value={`${maxBacklogs}`} />
          <Property keyName="Apply till" value={resolveDate(lastDateToApply).toDateString()} />
        </View>
        <View style={styles.group}>
          <Accordion title="Description">
            <Text type="hs" color={color.black} numberOfLines={4}>
              {description}
            </Text>
          </Accordion>
        </View>
        <View style={styles.group}>
          <Bond {...bond} />
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
