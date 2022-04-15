import React from 'react';
import {View, Text, ScrollView} from 'react-native';
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

const AccountDetailScreen = ({goBack,address}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <BackArrowHeader
        goBack={goBack}
        title={t('my_details')}
        borderBottomWidth={0}
      />
      <CategoriesTitleHeader title={t('personal_detail')} />
      <ScrollView style={styles.scrollContainer}>
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
          <InputTextField
            title={t('new_password')}
            placeholder={t('new_password_text')}
                  secureTextEntry={true}
          />
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
  scrollContainer: {
    marginBottom: '70@s',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
    marginHorizontal: '20@s',
    marginTop: '20@s',
  },
  categoriesWrapper:{
    marginTop:'20@s'
  }
});

export default AccountDetailScreen;
