import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { changePasswordSchema } from '../Utils/validationSchema'

import { BackArrowHeader, InputTextField, GreenButton, VerificationModal } from '../Components';
import { colors, fonts } from '../Utils/theme';

const ChangePasswordScreen = ({ goBack, isModalVisible, toggleModal, changePasswordState, handleChangePassword, animation, animationChangePassword }) => {
  const { t } = useTranslation();
  return (
    <>
      <BackArrowHeader goBack={goBack} title={t('my_details')} />
      <View style={styles.container}>
        <Text style={styles.changePassword}>{t('change_password')}</Text>
        <ScrollView>
          <View style={styles.inputFieldsContainer}>
            <Formik initialValues={changePasswordState} validationSchema={() => changePasswordSchema(t)} onSubmit={(values) => handleChangePassword(values)}>
              {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
                const { currentPassword, newPassword, confirmPassword } = values;
                return <>
                  <InputTextField
                    value={currentPassword}
                    error={touched.currentPassword && errors.currentPassword}
                    title={t('current_password')}
                    keyboardType="default"
                    name="currentPassword"
                    secureTextEntry={true}
                    onChangeText={handleChange('currentPassword')}
                    onBlur={handleBlur('currentPassword')}
                  />

                  <InputTextField
                    value={newPassword}
                    error={touched.newPassword && errors.newPassword}
                    title={t('new_password')}
                    keyboardType="default"
                    name="newPassword"
                    secureTextEntry={true}
                    onChangeText={handleChange('newPassword')}
                    onBlur={handleBlur('newPassword')}
                  />

                  <InputTextField
                    value={confirmPassword}
                    error={touched.confirmPassword && errors.confirmPassword}
                    title={t('confirm_new_password')}
                    keyboardType="default"
                    name="confirmPassword"
                    secureTextEntry={true}
                    onChangeText={handleChange('confirmPassword')}
                    onBlur={handleBlur('confirmPassword')}
                  />

                  <View style={styles.buttonWrapper}>
                    <GreenButton onPress={handleSubmit} backgroundColor={colors.blackColor} animation={animationChangePassword} title={t('change_password')} />
                    <VerificationModal
                      title={t('password_changed')}
                      description={t('successfully_changed_password')}
                      isModalVisible={isModalVisible}
                      toggleModal={toggleModal}
                    />
                  </View>
                </>
              }}
            </Formik>
          </View>
        </ScrollView>
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhiteColor,
  },
  changePassword: {
    fontFamily: fonts.avenir_bold,
    fontSize: '14@s',
    fontStyle: 'normal',
    lineHeight: '14@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginVertical: '17@s',
    marginLeft: '20@s',
  },
  inputFieldsContainer: {
    backgroundColor: colors.whiteColor,
    padding: '20@s',
  },
  buttonWrapper: {
    marginTop: '15@s'
  }
});

export default ChangePasswordScreen;
