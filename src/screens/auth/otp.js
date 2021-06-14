import React, { useState, useEffect } from 'react';
import {
  StyleSheet, Alert, Keyboard, View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { login } from '../../actions';
import {
  OTPComponent,
  Button,
  Container,
  Text,
  Heading,
} from '../../components';
import { heightPercentageToDP, color, messages } from '../../utils';

const getOtpText = (otp, timeLeft) => {
  if (otp?.length === 6 || timeLeft === 0) {
    return messages.otp.buttonLabel;
  }
  return `Resend in ${timeLeft} second.`;
};

const OTP = () => {
  const requiredOTP = '123456';
  const [currentOTP, setCurrentOTP] = useState('');
  const [showLoading, setShowLoading] = useState(false);
  const [timeLeft, setTimeLeft] = useState(0);
  const resendCode = () => {
    if (timeLeft === 0 && currentOTP.length !== 6) {
      setTimeLeft(59);
    }
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (timeLeft > 0) {
        setTimeLeft((time) => time - 1);
      } else {
        clearTimeout(timer);
      }
    }, 970);
  }, [timeLeft]);

  const dispatch = useDispatch();

  const verifyOTP = () => {
    if (currentOTP === requiredOTP) {
      setTimeLeft(1);
      setShowLoading(true);
      setTimeout(() => {
        dispatch(
          login({
            token: '12345',
            isAuthCompleted: true,
          }),
        );
        setShowLoading(false);
      }, 2000);
    } else {
      Alert.alert(messages.otp.alertHeading, messages.otp.alertBody);
    }
  };

  const handleInput = (otp) => {
    setCurrentOTP(otp);
    if (otp && otp.length === requiredOTP.length) {
      Keyboard.dismiss();
    }
  };

  return (
    <>
      <Container>
        <Heading heading={messages.otp.heading} />
        <View style={styles.container}>
          <Text centerAlign style={{ marginBottom: 20 }} fontType="semiBold">
            {messages.otp.enterOtp}
          </Text>
          <OTPComponent
            OTP={currentOTP}
            onOTPChange={handleInput}
            OTPLength={requiredOTP.length}
            keyboardType="number-pad"
            autoFocus
          />
          <Text
            underline
            centerAlign
            color={
              currentOTP.length !== 6 && timeLeft === 0
                ? color.primary
                : color.textGray
            }
            fontType="semiBold"
            style={styles.helperText}
            onPress={resendCode}
          >
            {messages.otp.codeNotRecived}
          </Text>
          <Button
            text={getOtpText(currentOTP, timeLeft)}
            disabled={currentOTP.length !== 6}
            onPress={verifyOTP}
            loading={showLoading}
            textType="h5"
          />
        </View>
      </Container>
    </>
  );
};

const defaultMargin = heightPercentageToDP('3');
const styles = StyleSheet.create({
  helperText: {
    marginBottom: 30,
  },
  button: {
    marginTop: defaultMargin,
  },
  container: {
    marginTop: 30,
  },
});

export default OTP;
