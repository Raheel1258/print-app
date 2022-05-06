import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';
import {Formik} from 'formik';
import {resetPasswordSchema} from '../Utils/validationSchema';

import {
  BackArrowHeader,
  InputTextField,
  GreenButton,
  VerificationModal,
  navigate
} from '../Components';
import {colors, fonts} from '../Utils/theme';

const ResetPasswordScreen = ({goBack, toggleModal, isModalVisible, modalButton, resetPassword, animation, handleResetPassword}) => {
  const {t} = useTranslation();
  return (
    <>
      <BackArrowHeader goBack={goBack} title={t('reset_password')} />
      <View style={styles.container}>
      <Formik initialValues={resetPassword} validationSchema={()=>resetPasswordSchema(t)} onSubmit={(values) => handleResetPassword(values)}>
            {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
              const { newPassword, confirmPassword } = values;
              return <>
                <InputTextField
                  value={newPassword}
                  error={touched.newPassword && errors.newPassword}
                  title={t('new_password')}
                  keyboardType="default"
                  secureTextEntry={true}
                  name="newPassword"
                  onChangeText={handleChange('newPassword')}
                  onBlur={handleBlur('newPassword')}
                />

                <InputTextField
                  value={confirmPassword}
                  error={touched.confirmPassword && errors.confirmPassword}
                  title={t('confirm_new_password')}
                  keyboardType="default"
                  secureTextEntry={true}
                  name="confirmPassword"
                  onChangeText={handleChange('confirmPassword')}
                  onBlur={handleBlur('confirmPassword')}
                />

                <View style={styles.buttonWrapper}>
                  <GreenButton onPress={handleSubmit} animation={animation} title={t('confirm_text')} />
                </View>

                <VerificationModal
                  title={t('password_updated')}
                  description={t('successfully_description')}
                  modalButton={t('signin_text')}
                  isModalVisible={isModalVisible}
                  toggleModal={toggleModal}
                  backDrop={() => {}}
                />   
              </>
            }}
          </Formik>
      </View>
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
    // fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '17@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginBottom: '40@s',
    marginTop: '10@s',
  },
});

export default ResetPasswordScreen;
