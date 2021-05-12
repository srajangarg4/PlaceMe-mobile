import React from 'react';
import { StyleSheet } from 'react-native';
import {
  Button, Container, Heading,
} from '../../components';
import NavigationService from '../../NavigationService';
import { messages, screens } from '../../utils';

const OnBoarding = () => (
  <Container style={styles.container}>
    <Heading heading={messages.onBoarding.welcomeGreeting} />
    {/* <Text type="h1" centerAlign>{messages.onBoarding.welcomeGreeting}</Text> */}
    <Button
      text={messages.onBoarding.getstarted}
      onPress={() => {
        NavigationService.navigate(screens.signup.path);
      }}
      style={styles.button}
    />
    <Button
      text={messages.onBoarding.alreadyRegistered}
      onPress={() => {
        NavigationService.navigate(screens.signin.path);
      }}
      style={styles.button}
    />
  </Container>
);

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
  },
  button: {
    marginBottom: 10,
  },
});

export default OnBoarding;
