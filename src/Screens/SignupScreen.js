import React from 'react';
import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableOpacity,
  Linking,
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
              const { firstName, lastName, phone, email, password } = values;
              return <>
                <InputTextField
                  value={firstName}
                  error={touched.firstName && errors.firstName}
                  title={t('first_name')}
                  name="firstName"
                  keyboardType="default"
                  secureTextEntry={false}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                />
                <InputTextField
                  value={lastName}
                  error={touched.lastName && errors.lastName}
                  title={t('last_name')}
                  name="lastName"
                  keyboardType="default"
                  secureTextEntry={false}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
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
                 <TouchableOpacity onPress={()=> Linking.openURL('https://printprint.com.hk/terms-of-use/')}><Text style={styles.privacyText}>{t('terms_services')}</Text></TouchableOpacity> 
                  <Text>{' '}{t('and_text')}{' '}</Text>
                 <TouchableOpacity onPress={()=> Linking.openURL('https://printprint.com.hk/privacy-policies/')}><Text style={styles.privacyText}>{t('privacy_policy')}</Text></TouchableOpacity>
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
    // fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '20@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginTop: '13@s',
  },
  privacyText: {
    color: colors.greenColor,
    marginBottom: Platform.OS == 'ios' ? '0@s' : '-4@s'
  },
});

export default SignupScreen;
