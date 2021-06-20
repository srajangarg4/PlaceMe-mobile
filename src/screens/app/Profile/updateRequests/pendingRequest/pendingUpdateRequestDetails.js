import { useRoute } from '@react-navigation/native';
import React from 'react';
import { Linking, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
  Accordion,
  Container,
  Heading,
  Property,
  Text,
} from '../../../../../components';
import { flattenObject, resolveDate } from '../../../../../utils';

const CurrentData = ({ type, keys }) => {
  const personalDetail = useSelector((state) => state.personalDetail);
  const academicDetail = useSelector((state) => state.academicDetail);
  const personalData = flattenObject(personalDetail);
  const academicData = flattenObject(academicDetail);
  switch (type) {
    case 'ACADEMICS': {
      return (
        <Accordion title="Current Data">
          {keys?.map((key) => (
            <Property keyName={key} value={academicData[key]} />
          ))}
        </Accordion>
      );
    }
    case 'PERSONAL': {
      return (
        <Accordion title="Current Data">
          {keys?.map((key) => (
            <Property keyName={key} value={personalData[key]} />
          ))}
        </Accordion>
      );
    }
    default: {
      return (
        <View />
      );
    }
  }
};

const UpdatedData = ({ type, data }) => {
  switch (type) {
    case 'PERSONAL':
    case 'ACADEMICS': {
      return (
        <Accordion title="Updated Data">
          {Object.keys(data).map((key) => (
            <Property keyName={key} value={data[key]} />
          ))}
        </Accordion>
      );
    }
    case 'DOCUMENT': {
      const { title, doc } = data;
      return (
        <Accordion title="Updated Data">
          <Property keyName={title} value="Open file" onPressValue={() => Linking.openURL(doc)} />
        </Accordion>
      );
    }
    default:
    {
      return <View />;
    }
  }
};

const UpdateRequestDetails = () => {
  const updateRequests = useSelector((state) => state.updateRequests);

  const { requests } = { ...updateRequests };
  const { params } = useRoute();
  const { id } = { ...params };
  const request = requests[id];
  const {
    data: { title, type, requestedOn, comment, updatesRequired },
  } = { ...request };
  const updates = flattenObject(updatesRequired);

  return (
    <Container>
      <Heading heading={title} />
      <View style={styles.propertyContainer}>
        <Property
          keyName="Created On"
          value={resolveDate(requestedOn).toDateString()}
          style={styles.property}
        />
        <Property keyName="Status" value="Pending" />
        <Property keyName="Type" value={type} />

      </View>
      <Accordion title="Request Message">
        <Text>{comment ?? 'You have not provieded any message.'}</Text>
      </Accordion>
      <CurrentData type={type} keys={Object.keys(updates)} />
      <UpdatedData type={type} data={updates} />
    </Container>
  );
};
export default UpdateRequestDetails;

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  propertyContainer: {
    marginBottom: 20,
  },
  property: {
    marginVertical: 7,
  },
});
