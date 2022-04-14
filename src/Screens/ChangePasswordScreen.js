import React from 'react';
import {View, Text, TouchableOpacity, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {BackArrowHeader, InputTextField, GreenButton, VerificationModal} from '../Components';
import {colors, fonts} from '../Utils/theme';

const ChangePasswordScreen = ({goBack,isModalVisible,toggleModal}) => {
  const {t} = useTranslation();
  return (
    <>
      <BackArrowHeader goBack={goBack} title={t('my_details')} />
      <View style={styles.container}>
        <Text style={styles.changePassword}>{t('change_password')}</Text>
        <ScrollView>
          <View style={styles.inputFieldsContainer}>
            <InputTextField title={t('current_password')} secureTextEntry={true} />
            <InputTextField title={t('new_password')} secureTextEntry={true} />
            <InputTextField title={t('confirm_new_password')} secureTextEntry={true} />
            <View style={styles.buttonWrapper}>
            <GreenButton onPress={toggleModal} backgroundColor={colors.blackColor} title={t('change_password')}/>
            <VerificationModal
            title={t('password_changed')}
            description={t('successfully_changed_password')}
            isModalVisible={isModalVisible}
            toggleModal={toggleModal}
          />
            </View>
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
    letterSpacing: '0.5@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginVertical: '17@s',
    marginLeft: '20@s',
  },
  inputFieldsContainer: {
    backgroundColor: colors.whiteColor,
    padding: '20@s',
  },
  buttonWrapper:{
    marginTop:'15@s'
  }
});

export default ChangePasswordScreen;
