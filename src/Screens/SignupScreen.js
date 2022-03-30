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

const SignupScreen = () => {
  const {t} = useTranslation();
  return (
    <>
      <BackArrowHeader title={t('signup_text')} />
      <ScrollView>
        <View style={styles.container}>
          <SigninTextField
            title={t('first_name')}
            keyboardType="default"
            secureTextEntry={false}
          />
          <SigninTextField
            title={t('last_name')}
            keyboardType="default"
            secureTextEntry={false}
          />
          <SigninTextField
            title={t('mobile_text')}
            keyboardType="phone-pad"
            secureTextEntry={false}
          />
          <SigninTextField
            title={t('email_text')}
            keyboardType="email-address"
            secureTextEntry={false}
          />
          <SigninTextField title={t('new_password')} secureTextEntry={true} />
          <Text style={styles.signupDescription}>
           {t('by_signingup')}{' '}
            <Text style={styles.privacyText}>{t('terms_services')}</Text> {t('and_text')}{' '}
            <Text style={styles.privacyText}>{t('privacy_policy')}</Text>
          </Text>
          <View style={styles.buttonWrapper}>
            <LoginGreenButton title={t('create_account')} />
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
