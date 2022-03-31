import { t } from 'i18next';
import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {
  BackArrowHeader,
  SigninTextField,
  LoginGreenButton,
} from '../Components';
import {colors} from '../Utils/theme';

const SignupScreen = ({handleChange , navigate, animation, handleSignupPress, goBack}) => {
  const {t} = useTranslation();
  return (
    <>
      <BackArrowHeader goBack={goBack} title={t('signup_text')} />
      <ScrollView>
        <View style={styles.container}>
          <SigninTextField
            title={t('first_name')}
            name="firstName"
            keyboardType="default"
            secureTextEntry={false}
            handleChange={handleChange}
          />
          <SigninTextField
            title={t('last_name')}
            name="lastName"
            keyboardType="default"
            secureTextEntry={false}
            handleChange={handleChange}
          />
          <SigninTextField
            title={t('mobile_text')}
            name="phone"
            keyboardType="phone-pad"
            secureTextEntry={false}
            handleChange={handleChange}
          />
          <SigninTextField
            title={t('email_text')}
            name="email"
            keyboardType="email-address"
            secureTextEntry={false}
            handleChange={handleChange}
          />
          <SigninTextField title={t('new_password')} name="password" secureTextEntry={true} handleChange={handleChange}/>
          <Text style={styles.signupDescription}>
           {t('by_signingup')}{' '}
            <Text style={styles.privacyText}>{t('terms_services')}</Text> {t('and_text')}{' '}
            <Text style={styles.privacyText}>{t('privacy_policy')}</Text>
          </Text>
          <View style={styles.buttonWrapper}>
            <LoginGreenButton title={t('create_account')} animation={animation} onPress={handleSignupPress}/>
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
