import React from 'react';
import { StyleSheet, Linking, View } from 'react-native';
import { Accordion, Container, Heading, Property, Text } from '../../../../components';
import { color } from '../../../../utils';

const UpdateRequestDetails = () => (
  <Container>
    <Heading heading="Mobile Update Request" />
    <View style={styles.propertyContainer}>
      <Property keyName="Created On" value="12-May-2022" style={styles.property} />
      <Property keyName="Status" value="Pending" />
      <Property keyName="Category" value="Personal Detail" />
      <Property keyName="Verified On" value="21-May-2022" />
    </View>
    <Accordion title="Request Message">
      <Text>I have recently updated to a new mobile number</Text>
    </Accordion>
    <Accordion title="Previous Data">
      <Property keyName="Mobile Number" value="9193434344" />
    </Accordion>
    <Accordion title="Updated Data">
      <Text centerAlign>Yet to be updated</Text>
    </Accordion>
    <Accordion title="Response from verifier">
      <Text centerAlign>Yet to be updated</Text>
    </Accordion>
    <Accordion title="Verifier Details">
      <Property
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
      />
      <Property
        keyName="Email"
        value="hb.rit345@gmail.com"
        valueColor={color.primary}
        onPressValue={() => Linking.openURL('mailto:hb.rit345@gmail.com')}
      />
    </Accordion>
  </Container>
);

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
