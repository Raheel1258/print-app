import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {
  BackArrowHeader,
  SigninTextField,
  LoginGreenButton,
} from '../Components';
import {colors} from '../Utils/theme';


const SigninScreen = ({handleChange, navigate, handleLoginPress , animation}) => {
  const {t} = useTranslation();
  return (
    <>
      <BackArrowHeader title={t('signin_text')} />
      <ScrollView>
        <View style={styles.container}>
          <SigninTextField
            title={t('email_text')}
            keyboardType="email-address"
            secureTextEntry={false}
            name="email" 
            handleChange={handleChange}
          />
          <SigninTextField title={t('password_text')} secureTextEntry={true} name="password" handleChange={handleChange} />
          <TouchableOpacity style={styles.forgotWrapper} onPress={() => navigate("forgotPassword")}>
            <Text style={styles.forgotPassword}>{t('forgot_password')}</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.forgotWrapper} onPress={() => navigate("signup")}>
            <Text style={styles.forgotPassword}>{t('Create your account')}</Text>
          </TouchableOpacity>
          <View style={styles.buttonWrapper}>
            <LoginGreenButton onPress={handleLoginPress} animation={animation} title={t('login_text')} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: '12@s',
  },
  forgotPassword: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '15@s',
    letterSpacing: '0.3@s',
    textAlign: 'left',
    color: colors.greenColor,
  },
  forgotWrapper: {
    paddingVertical: '7@s',
    marginTop: -7,
  },
  buttonWrapper: {
    marginTop: '40@s',
  },
});

export default SigninScreen;
