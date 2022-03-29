import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {
  BackArrowHeader,
  SigninTextField,
  LoginGreenButton,
} from '../Components';
import {colors} from '../Utils/theme';

const SignupScreen = () => {
  return (
    <>
      <BackArrowHeader title="Sign up" />
      <ScrollView>
        <View style={styles.container}>
          <SigninTextField
            title="First Name"
            keyboardType="default"
            secureTextEntry={false}
          />
          <SigninTextField
            title="Last Name"
            keyboardType="default"
            secureTextEntry={false}
          />
          <SigninTextField
            title="Mobile  (for order confirmation)"
            keyboardType="phone-pad"
            secureTextEntry={false}
          />
          <SigninTextField
            title="Email"
            keyboardType="email-address"
            secureTextEntry={false}
          />
          <SigninTextField title="New Password" secureTextEntry={true} />
          <Text style={styles.signupDescription}>
            By signing up, you agree to our{' '}
            <Text style={styles.privacyText}>Terms of Services</Text> and{' '}
            <Text style={styles.privacyText}>Privacy Policy</Text>
          </Text>
          <View style={styles.buttonWrapper}>
            <LoginGreenButton title="Create Account" />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    // flex: 1,
    backgroundColor: colors.whiteColor,
    padding: '12@s',
  },
  buttonWrapper: {
    marginTop: '50@s',
  },
  signupDescription: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '20@s',
    letterSpacing: '0.3@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginTop: '3@s',
  },
  privacyText: {
    color: colors.greenColor,
  },
});

export default SignupScreen;
