import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';
import { useDispatch } from 'react-redux';
import {addAddress} from '../store/actions/userPersonalDetailAction'
import { Formik } from 'formik';
import { addAddressSchema } from '../Utils/validationSchema';

import RightArrow from '../Assests/Svgs/LeftArrow';
import {AddressTextField,GreenButton} from '../Components';
import {colors} from '../Utils/theme';

const AddNewAddressForm = ({addAddressRBSheet}) => {
  const dispatch = useDispatch();
  const [animation, setAnimation] = useState(false);
  const [addressState, setAddressState] = useState({
    fullName:'',
    companyName:"",
    addressLine1:'',
    addressLine2:'',
    area:'',
    district:'',
    cityCountry:'',
    contactNumber:'',
  })

  const handleAddNewAddress = (values) => {
    console.log("done address" , values);
    dispatch(addAddress(setAnimation, values, addAddressRBSheet))
    //!animation && addAddressRBSheet.current.close();

  }
  const {t} = useTranslation();
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
                  childern={<RightArrow/>}
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
                  childern={<RightArrow/>}
                />

                <AddressTextField 
                  value={cityCountry}
                  error={touched.cityCountry && errors.cityCountry}
                  title={t('city_country')}
                  keyboardType="default"
                  placeholder={t('hong_kong')}
                  name="cityCountry"
                  secureTextEntry={false}
                  onChangeText={handleChange('cityCountry')}
                  onBlur={handleBlur('cityCountry')}
                  childern={<RightArrow/>}
                />

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
                <GreenButton  backgroundColor={colors.blackColor} onPress={handleSubmit} animation={animation} title={t('add_address')}/>  
              </>
            }}
          </Formik>
    </ScrollView>
  );
};

export default AddNewAddressForm;
