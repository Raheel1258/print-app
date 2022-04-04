import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { forgotPasswordValidationSchema } from '../Utils/validationSchema';

import { BackArrowHeader, SigninTextField, LoginGreenButton, VerificationModal } from '../Components';
import { colors } from '../Utils/theme';

const ForgotPasswordScreen = ({ toggleModal, isModalVisible, animation, handleForgotPassword, forgotPasswordData, navigate, goBack }) => {
  const { t } = useTranslation();
  return (
    <>
      <BackArrowHeader goBack={goBack} title={t('forgot_password')} />
      <ScrollView>
        <View style={styles.container}>
          <Formik initialValues={forgotPasswordData} validationSchema={forgotPasswordValidationSchema} onSubmit={(values) => handleForgotPassword(values)}>
            {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
              const { email } = values;
              return <>
                <Text style={styles.emailDescription}>{t('email_description')}</Text>
                <SigninTextField
                  value={email}
                  error={touched.email && errors.email}
                  title={t('email_text')}
                  keyboardType="email-address"
                  name="email"
                  secureTextEntry={false}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <View style={styles.buttonWrapper}>
                  <LoginGreenButton title={t('send_text')} animation={animation} onPress={handleSubmit} />
                </View>
                <VerificationModal
                  isModalVisible={isModalVisible}
                  toggleModal={toggleModal} />
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
    // fontFamily:Avenir LT Std,
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '17@s',
    letterSpacing: '0.3@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginBottom: '40@s',
    marginTop: '10@s'
  }
});

export default ForgotPasswordScreen;
