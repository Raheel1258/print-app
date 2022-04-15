import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';
import {Formik} from 'formik';
import {forgotPasswordValidationSchema} from '../Utils/validationSchema';

import {
  BackArrowHeader,
  InputTextField,
  GreenButton,
  VerificationModal,
  navigate
} from '../Components';
import {colors, fonts} from '../Utils/theme';

const ResetPasswordScreen = ({goBack, toggleModal, isModalVisible, modalButton}) => {
  const {t} = useTranslation();
  return (
    <>
      <BackArrowHeader goBack={goBack} title={t('reset_password')} />
      <View style={styles.container}>
        <ScrollView>
          <InputTextField
            title={t('new_password')}
            keyboardType="default"
            secureTextEntry={false}
          />
          <InputTextField
            title={t('confirm_new_password')}
            keyboardType="default"
            secureTextEntry={false}
          />
          <View style={styles.buttonWrapper}>
            <GreenButton onPress={toggleModal} title={t('confirm_text')} />
          </View>
          <VerificationModal
            title={t('password_updated')}
            description={t('successfully_description')}
            modalButton={t('signin_text')}
            isModalVisible={isModalVisible}
            toggleModal={toggleModal}
          />
        </ScrollView>
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
    letterSpacing: '0.3@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginBottom: '40@s',
    marginTop: '10@s',
  },
});

export default ResetPasswordScreen;
