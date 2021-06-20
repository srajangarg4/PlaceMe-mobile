import React from 'react';
import { useRoute } from '@react-navigation/native';

import { Linking, StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import {
  Accordion,
  Container,
  Heading,
  Property,
  Text,
} from '../../../../../components';
import { color, flattenObject, resolveDate } from '../../../../../utils';

const CompletedRequestDetails = () => {
  const completedRequests = useSelector((state) => state.completedRequests);

  const { requests } = { ...completedRequests };
  const { params } = useRoute();
  const { id } = { ...params };

  const request = requests[id];
  console.log('Request', request);
  const {
    data: {
      title, type, requestedOn, comment, updatesRequired, isAccepted, verifiedBy, verifiedOn } = {},
  } = { ...request };
  const updatedData = flattenObject(updatesRequired);
  const status = isAccepted ? 'ACCEPTED' : 'REJECTED';
  return (
    <Container>
      <Heading heading={title} />
      <View style={styles.propertyContainer}>
        <Property
          keyName="Created On"
          value={resolveDate(requestedOn).toDateString()}
          style={styles.property}
        />
        <Property keyName="Status" value={status} />
        <Property keyName="Type" value={type} />
        <Property keyName="Verified On" value={resolveDate(verifiedOn).toDateString()} />
      </View>
      <Accordion title="Request Message">
        <Text>{comment ?? 'You have not provieded any message.'}</Text>
      </Accordion>

      <Accordion title="Updated Data">
        {Object.keys(updatedData).map((key) => (
          <Property keyName={key} value={updatedData[key]} />
        ))}
      </Accordion>
      <Accordion title="Response from verifier">
        <Text centerAlign>Yet to be updated</Text>
      </Accordion>
      <Accordion title="Verifier Details">
        {/* <Property
          keyName="Name"
          value="Aditi Rao"
        />
        <Property
          keyName="Position"
          value="Mentor"
        />
        <Property
          keyName="Mobile Number"
          value="9609998878"
          valueColor={color.primary}
          onPressValue={() => Linking.openURL('tel:+9602998878')}
        /> */}
        <Property
          keyName="Email"
          value={verifiedBy}
          valueColor={color.primary}
          onPressValue={() => Linking.openURL('mailto:hb.rit345@gmail.com')}
        />
      </Accordion>
    </Container>
  );
};
export default CompletedRequestDetails;

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
