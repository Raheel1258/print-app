import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';

import { BackArrowHeader, InputTextField, GreenButton } from '../Components';

import { forgotPasswordValidationSchema } from '../Utils/validationSchema';
import { colors, fonts } from '../Utils/theme';

const ForgotPasswordScreen = ({ toggleModal, isModalVisible, animation, handleForgotPassword, forgotPasswordData, navigate, goBack }) => {
  const { t } = useTranslation();
  return (
    <>
      <BackArrowHeader goBack={goBack} title={t('forgot_text')} />
      <ScrollView>
        <View style={styles.container}>
          <Formik initialValues={forgotPasswordData} validationSchema={() => forgotPasswordValidationSchema(t)} onSubmit={(values) => handleForgotPassword(values)}>
            {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
              const { email } = values;
              return <>
                <Text style={styles.emailDescription}>{t('email_description')}</Text>
                <InputTextField
                  value={email}
                  error={touched.email && errors.email}
                  title={t('signin_email_text')}
                  keyboardType="email-address"
                  name="email"
                  secureTextEntry={false}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <View style={styles.buttonWrapper}>
                  <GreenButton onPress={handleSubmit} animation={animation} title={t('send_verification_code')} />
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
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: '12@s',
  },
  buttonWrapper: {
    marginTop: '20@s',
  },
  emailDescription: {
    fontFamily: fonts.avenir_regular,
    fontSize: '13@s',
    fontStyle: 'normal',
    fontStyle: 'normal',
    lineHeight: '17@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginBottom: '40@s',
    marginTop: '10@s'
  }
});

export default ForgotPasswordScreen;
