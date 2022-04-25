import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { updatePersonalDetailSchema } from '../Utils/validationSchema';

import {
  BackArrowHeader,
  CategoriesTitleHeader,
  InputTextField,
  GreenButton,
  MyAddresses,
  BottomSheetComponent,
  AddNewAddressForm,
  AddNewCreditCardForm
} from '../Components';
import { colors, fonts } from '../Utils/theme';

const AccountDetailScreen = ({ goBack, navigate, animation, addAddressRBSheet, addCardetCardRBSheet, personalDetail, handleUpdatedPersonalDetail }) => {
  const { t } = useTranslation();
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
          <Formik initialValues={personalDetail} validationSchema={() => updatePersonalDetailSchema(t)} onSubmit={(values) => handleUpdatedPersonalDetail(values)}>
            {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
              const { firstName, lastName, mobile, email } = values;
              return <>
                <InputTextField
                  value={firstName}
                  error={touched.firstName && errors.firstName}
                  title={t('first_name')}
                  placeholder={firstName}
                  keyboardType="default"
                  name="firstName"
                  secureTextEntry={false}
                  onChangeText={handleChange('firstName')}
                  onBlur={handleBlur('firstName')}
                />

                <InputTextField
                  value={lastName}
                  error={touched.lastName && errors.lastName}
                  title={t('last_name')}
                  placeholder={lastName}
                  keyboardType="default"
                  name="lastName"
                  secureTextEntry={false}
                  onChangeText={handleChange('lastName')}
                  onBlur={handleBlur('lastName')}
                />

                <InputTextField
                  value={mobile}
                  error={touched.mobile && errors.mobile}
                  title={t('mobile_number')}
                  placeholder={mobile}
                  keyboardType="phone-pad"
                  name="mobile"
                  secureTextEntry={false}
                  onChangeText={handleChange('mobile')}
                  onBlur={handleBlur('mobile')}
                />

                <InputTextField
                  value={email}
                  error={touched.email && errors.email}
                  title={t('e_mail')}
                  placeholder={email}
                  keyboardType="email-address"
                  name="email"
                  secureTextEntry={false}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />

                <TouchableOpacity
                  onPress={() => navigate('changePassword')}
                  style={styles.passwordWrapper}>
                  <Text style={styles.changePassword}>Change password</Text>
                </TouchableOpacity>

                <View style={styles.buttonWrapper}>
                  <GreenButton
                    backgroundColor={colors.blackColor}
                    color={colors.whiteColor}
                    title={t('update_text')}
                    animation={animation}
                    onPress={handleSubmit}
                  />
                </View>
              </>
            }}
          </Formik>
        </View>

        <View style={styles.categoriesWrapper}>
          <CategoriesTitleHeader
            title={t('my_address')}
            description={t('new_address')}
            onPress={() => addAddressRBSheet.current.open()}
          />
        </View>
        <MyAddresses address title="Peter Park" description="Primary" />
        <View style={styles.borderBottom} />
        <MyAddresses address title="peter park" />
        <View style={styles.categoriesWrapper}>
          <CategoriesTitleHeader
            title={t('my_payment')}
            description={t('new_card')}
            onPress={() => addCardetCardRBSheet.current.open()}
          />
          <MyAddresses title="Peter Park" description="Primary" />
        </View>
        <View style={styles.screenBorderBottom} />
      </ScrollView>
      <BottomSheetComponent
        childern={<AddNewAddressForm addAddressRBSheet={addAddressRBSheet}/>}
        title={t('add_new_address')}
        note={false}
        refRBSheet={addAddressRBSheet}
      />
      <BottomSheetComponent
        childern={<AddNewCreditCardForm />}
        title={t('add_new_cardet_card')}
        note={false}
        refRBSheet={addCardetCardRBSheet}
      />
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
  screenBorderBottom: {
    borderBottomColor: colors.offWhiteColor,
    borderBottomWidth: '25@s',
    marginTop: '10@s',
    marginBottom: '55@s'
  }
});

export default AccountDetailScreen;
