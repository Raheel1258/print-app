import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { signupValidationSchema } from '../Utils/validationSchema';
import { Formik } from 'formik'

import {
  BackArrowHeader,
  InputTextField,
  GreenButton,
} from '../Components';
import { colors,fonts } from '../Utils/theme';

const SignupScreen = ({ navigate, animation, handleSignup, goBack, signupState }) => {
  const { t } = useTranslation();
  return (
    <>
      <BackArrowHeader goBack={goBack} title={t('signup_text')} />
      <ScrollView>
        <View style={styles.container}>
          <Formik initialValues={signupState} validationSchema={()=>signupValidationSchema(t)} onSubmit={(values) => handleSignup(values)}>
            {({values, handleChange, handleBlur, handleSubmit, errors, touched}) => {
              const { first_name, last_name, phone, email, password } = values;
              return <>
                <InputTextField
                  value={first_name}
                  error={touched.first_name && errors.first_name}
                  title={t('first_name')}
                  name="first_name"
                  keyboardType="default"
                  secureTextEntry={false}
                  onChangeText={handleChange('first_name')}
                  onBlur={handleBlur('first_name')}
                />
                <InputTextField
                  value={last_name}
                  error={touched.last_name && errors.last_name}
                  title={t('last_name')}
                  name="last_name"
                  keyboardType="default"
                  secureTextEntry={false}
                  onChangeText={handleChange('last_name')}
                  onBlur={handleBlur('last_name')}
                />
                <InputTextField
                  value={phone}
                  error={touched.phone && errors.phone}
                  title={t('mobile_text')}
                  name="phone"
                  keyboardType="phone-pad"
                  secureTextEntry={false}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                />
                <InputTextField
                  value={email}
                  error={touched.email && errors.email}
                  title={t('signin_email_text')}
                  name="email"
                  keyboardType="email-address"
                  secureTextEntry={false}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <InputTextField
                  value={password}
                  error={touched.password && errors.password}
                  title={t('new_password')}
                  name="password"
                  secureTextEntry={true}
                  onChangeText={handleChange('password')} 
                  onBlur={handleBlur('password')}
                />
                  
                <Text style={styles.signupDescription}>{t('by_signingup')}{' '}
                  <Text style={styles.privacyText}>{t('terms_services')}</Text> {t('and_text')}{' '}
                  <Text style={styles.privacyText}>{t('privacy_policy')}</Text>
                </Text>
                <View style={styles.buttonWrapper}>
                  <GreenButton title={t('create_account')} animation={animation} onPress={handleSubmit} />
                </View>
              </>
            }}
          </Formik>

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
    fontFamily:fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
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
