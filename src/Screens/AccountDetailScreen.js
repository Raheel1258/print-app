import React, {useState} from 'react';
import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator } from 'react-native';
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
  AddNewCreditCardSheet
} from '../Components';
import { colors, fonts } from '../Utils/theme';

const AccountDetailScreen = ({ 
  goBack, 
  navigate, 
  animation, 
  addAddressRBSheet, 
  addCardetCardRBSheet, 
  personalDetail, 
  handleUpdatedPersonalDetail, 
  userAddresses, 
  animationUpdateUser, 
  handleUserAddressRemove,
  makePrimary,
  userCardsDetails,
 }) => {
  const { t } = useTranslation();
  const [updateAddress , setUpdatedAddress] = useState(undefined);
  return (
    <>
      {!animation ? <View style={styles.container}>
        <BackArrowHeader
          goBack={goBack}
          title={t('my_details')}
          borderBottomWidth={0}
        />
        <ScrollView>
          <CategoriesTitleHeader title={t('personal_detail')} />

          <View style={styles.paddingContainer}>
            <Formik initialValues={personalDetail} validationSchema={() => updatePersonalDetailSchema(t)} onSubmit={(values) => handleUpdatedPersonalDetail(values)}>
              {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
                const { firstName, lastName, phone, email } = values;
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
                    value={phone}
                    error={touched.phone && errors.phone}
                    title={t('mobile_number')}
                    placeholder={phone}
                    keyboardType="phone-pad"
                    name="phone"
                    secureTextEntry={false}
                    onChangeText={handleChange('phone')}
                    onBlur={handleBlur('phone')}
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
                    <Text style={styles.changePassword}>{t('change_password_text')}</Text>
                  </TouchableOpacity>

                  <View style={styles.buttonWrapper}>
                    <GreenButton
                      backgroundColor={colors.blackColor}
                      color={colors.whiteColor}
                      title={t('update_text')}
                      animation={animationUpdateUser}
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
              onPress={() => {addAddressRBSheet.current.open(), setUpdatedAddress(undefined)}}
            />
          </View>
          {userAddresses?.length > 0 ? userAddresses?.map((item, index) => {
            return <>
              <MyAddresses 
              setUpdatedAddress={setUpdatedAddress} 
              refRBSheet={addAddressRBSheet} 
              handleUserAddressRemove={handleUserAddressRemove} 
              address={item} 
              makePrimary={makePrimary} />
              {index != userAddresses.length - 1 && <View style={styles.borderBottom} />}
            </>
          }) : <Text style={styles.emptyBox}>{t('no_address_added')}</Text>}

          {/* <MyAddresses address title="peter park" /> */}
          <View style={styles.categoriesWrapper}>
            <CategoriesTitleHeader
              title={t('my_payment')}
              description={t('new_card')}
              onPress={() => addCardetCardRBSheet.current.open()}
            />
            {userCardsDetails?.length > 0 ? userCardsDetails?.map((item,index)=>{
              return <>
                <MyAddresses 
                    card={item}
                    title="Peter Park" 
                    description={index == 0 ? true : false} 
                    />
                {index != userCardsDetails.length - 1 && <View style={styles.borderBottom} />}
                </>
              }) : <Text style={styles.emptyBox}>No card added</Text>}
            
          </View>
          <View style={styles.screenBorderBottom} />
        </ScrollView>
        <BottomSheetComponent
          childern={<AddNewAddressForm addAddressRBSheet={addAddressRBSheet} updateAddress={updateAddress} setUpdatedAddress={setUpdatedAddress}/>}
          title={updateAddress == undefined ? t('add_new_address') : t('update_address')}
          note={false}
          refRBSheet={addAddressRBSheet}
        />
        <BottomSheetComponent
          childern={<AddNewCreditCardSheet />}
          title={t('add_new_cardet_card')}
          note={false}
          refRBSheet={addCardetCardRBSheet}
        />
      </View> : <View style={styles.loaderContainer}>
        <ActivityIndicator size="small" color="#000" animating={true} />
      </View>}
    </>

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
    marginHorizontal: '17@s',
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
    letterSpacing: '0.2@s',
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
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyBox: {
    textAlign: 'center',
    marginVertical: '40@s',
    paddingTop: '20@s',
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    color: colors.lightBlackColor,
  }
});

export default AccountDetailScreen;
