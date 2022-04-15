import React from 'react';
import {View, Text, ScrollView, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {
  BackArrowHeader,
  CategoriesTitleHeader,
  InputTextField,
  GreenButton,
  MyAddresses,
} from '../Components';
import {colors, fonts} from '../Utils/theme';

const AccountDetailScreen = ({goBack, navigate}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <BackArrowHeader
        goBack={goBack}
        title={t('my_details')}
        borderBottomWidth={0}
      />
      <CategoriesTitleHeader title={t('personal_detail')} />
      <ScrollView>
        <View style={styles.paddingContainer}>
          <InputTextField
            title={t('first_name')}
            placeholder={t('peter_text')}
            keyboardType="default"
            secureTextEntry={false}
          />
          <InputTextField title={t('last_name')} placeholder={t('park_text')} />
          <InputTextField
            title={t('mobile_number')}
            placeholder={t('number_text')}
            keyboardType="phone-pad"
            secureTextEntry={false}
          />
          <InputTextField title={t('e_mail')} placeholder={t('email_text')} />
          <TouchableOpacity
            onPress={() => navigate('changePassword')}
            style={styles.passwordWrapper}>
            <Text style={styles.changePassword}>Change Password</Text>
          </TouchableOpacity>
          <View style={styles.buttonWrapper}>
            <GreenButton
              backgroundColor={colors.blackColor}
              color={colors.whiteColor}
              title={t('update_text')}
            />
          </View>
        </View>
        <View style={styles.categoriesWrapper}>
          <CategoriesTitleHeader
            title={t('my_address')}
            description={t('new_address')}
          />
        </View>
        <MyAddresses address title="Peter Park" description="Primary" />
        <View style={styles.borderBottom} />
        <MyAddresses address title="peter park" />
        <View style={styles.categoriesWrapper}>
          <CategoriesTitleHeader
            title={t('my_payment')}
            description={t('new_card')}
          />
          <MyAddresses title="Peter Park" description="Primary" />
        </View>
        <View style={styles.screenBorderBottom}/>
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  paddingContainer: {
    marginHorizontal: '15@s',
    marginTop: '20@s',
  },
  buttonWrapper: {
    marginTop: '15@s',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
    marginHorizontal: '20@s',
    marginTop: '20@s',
  },
  categoriesWrapper: {
    marginTop: '20@s',
  },
  changePassword: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.3@s',
    color: colors.greenColor,
  },
  passwordWrapper: {
    paddingVertical: '5@s',
    width: '45%',
  },
  screenBorderBottom:{
    borderBottomColor:colors.offWhiteColor,
    borderBottomWidth:'25@s',
    marginTop:'10@s',
    marginBottom:'55@s'
  }
});

export default AccountDetailScreen;
