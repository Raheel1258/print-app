import React, { useState } from 'react';
import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
import { addAddress, updateUserAddress} from '../store/actions/userPersonalDetailAction'
import { Formik } from 'formik';
import { addAddressSchema } from '../Utils/validationSchema';
import { ScaledSheet } from 'react-native-size-matters';

import RightArrow from '../Assests/Svgs/LeftArrow';
import { AddressTextField, GreenButton } from '../Components';
import { colors, fonts } from '../Utils/theme';
import CountryPicker from 'react-native-country-picker-modal'
import { readDir } from 'jetifier/src/utils';
import { State } from 'react-native-gesture-handler';

const AddNewAddressForm = ({ addAddressRBSheet, updateAddress }) => {
  const dispatch = useDispatch();
  const [animation, setAnimation] = useState(false);
  const [isCountryPickerVisible, setIsCountryPickerVisible] = useState(false);
  const [country, setCountry] = useState("");
  const [addressState, setAddressState] = useState({
    fullName: updateAddress?.fullName ?? '',
    companyName: updateAddress?.companyName ?? "",
    addressLine1: updateAddress?.addressLine1 ?? "",
    addressLine2: updateAddress?.addressLine2 ?? "",
    area: updateAddress?.area ?? "",
    district: updateAddress?.district ?? "",
    cityCountry: updateAddress?.cityCountry ?? "",
    contactNumber: updateAddress?.contactNumber ?? "",
  })

  const handleAddNewAddress = (values) => {
    if(updateAddress == undefined)
    {
      dispatch(addAddress(setAnimation, { ...values, cityCountry: country?.name ?? 'Hong kong'}, addAddressRBSheet))
    }
    else {
      setAddressState({ ...values, cityCountry: country?.name })
      dispatch(updateUserAddress(setAnimation , updateAddress?._id , { ...values, cityCountry: country?.name ?? updateAddress?.cityCountry}, addAddressRBSheet))
      
    }
    //!animation && addAddressRBSheet.current.close();
  }

  const { t } = useTranslation();
  return (
    <ScrollView>
      <Formik initialValues={addressState} validationSchema={() => addAddressSchema(t)} onSubmit={(values) => handleAddNewAddress(values)}>
        {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
          const { fullName, companyName, addressLine1, addressLine2, area, district, cityCountry, contactNumber } = values;
          return <>
            <AddressTextField
              value={fullName}
              error={touched.fullName && errors.fullName}
              title={t('full_name')}
              keyboardType="default"
              placeholder={t('peter_leung')}
              name="fullName"
              secureTextEntry={false}
              onChangeText={handleChange('fullName')}
              onBlur={handleBlur('fullName')}
            />

            <AddressTextField
              value={companyName}
              error={touched.companyName && errors.companyName}
              title={t('company_name')}
              keyboardType="default"
              name="companyName"
              secureTextEntry={false}
              onChangeText={handleChange('companyName')}
              onBlur={handleBlur('companyName')}
            />

            <AddressTextField
              value={addressLine1}
              error={touched.addressLine1 && errors.addressLine1}
              title={t('address_line_1')}
              keyboardType="default"
              placeholder={t('park_text')}
              name="addressLine1"
              secureTextEntry={false}
              onChangeText={handleChange('addressLine1')}
              onBlur={handleBlur('addressLine1')}
            />

            <AddressTextField
              value={addressLine2}
              error={touched.addressLine2 && errors.addressLine2}
              title={t('address_line_2')}
              keyboardType="default"
              placeholder={t('peter_mail')}
              name="addressLine2"
              secureTextEntry={false}
              onChangeText={handleChange('addressLine2')}
              onBlur={handleBlur('addressLine2')}
            />

            <AddressTextField
              value={area}
              error={touched.area && errors.area}
              title={t('area_text')}
              keyboardType="default"
              placeholder={t('kowloon_text')}
              name="area"
              secureTextEntry={false}
              onChangeText={handleChange('area')}
              onBlur={handleBlur('area')}
            // childern={<RightArrow />}
            />

            <AddressTextField
              value={district}
              error={touched.district && errors.district}
              title={t('district_text')}
              keyboardType="default"
              placeholder={t('kwun_tong')}
              name="district"
              secureTextEntry={false}
              onChangeText={handleChange('district')}
              onBlur={handleBlur('district')}
            // childern={<RightArrow />}
            />

              <View>
                <Text style={styles.titleText}>{t('city_country')}</Text>
                <TouchableOpacity onPress={()=>setIsCountryPickerVisible(true)} style={styles.countryPicker}>
                  <CountryPicker
                    visible={isCountryPickerVisible}
                    placeholder={ country?.name ?? updateAddress?.cityCountry ?? <Text style={styles.countryPlaceholder}>Hong kong</Text>}
                    placeholderStyling={{color:'red',backgroundColor:'green'}}
                    // placeholderStyle={{backgroundColor:'red'}}
                    isCountryPickerVisible
                    onSelect={setCountry}
                    onClose={()=>setIsCountryPickerVisible(false)}
                    withAlphaFilter
                    withFilter
                                      />
              <RightArrow style={styles.iconWrapper} />
                </TouchableOpacity>
              <View style={styles.borderBottom} />
              </View>


            {/* <AddressTextField
              value={cityCountry}
              error={touched.cityCountry && errors.cityCountry}
              title={t('city_country')}
              keyboardType="default"
              placeholder={t('hong_kong')}
              name="cityCountry"
              secureTextEntry={false}
              //  onPress={() => setIsCountryPickerVisible(!isCountryPickerVisible)}
              // onChangeText={handleChange('cityCountry')}
              onBlur={handleBlur('cityCountry')}
              childern={<RightArrow />}
            /> */}

            <AddressTextField
              value={contactNumber}
              error={touched.contactNumber && errors.contactNumber}
              title={t('contact_no')}
              keyboardType="phone-pad"
              placeholder={t('phone_pad')}
              name="contactNumber"
              secureTextEntry={false}
              onChangeText={handleChange('contactNumber')}
              onBlur={handleBlur('contactNumber')}
            />
            <GreenButton backgroundColor={colors.blackColor} onPress={handleSubmit} animation={animation}  title={updateAddress == undefined ? t('add_address'): t('update_address')} />
          </>
        }}
      </Formik>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  titleText: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  iconWrapper: {
    transform: [{ rotate: '180deg' }],
    marginBottom:'10@s'
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
    marginHorizontal: '2@s',
    marginTop: '4@s',
    marginBottom: '14@s',
  },
  countryPicker: {
    marginTop: '4@s',
    fontSize: '1@s',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between'
  },
  countryPlaceholder:{
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
  }
})

export default AddNewAddressForm;
