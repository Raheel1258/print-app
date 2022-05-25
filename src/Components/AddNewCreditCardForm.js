import React, {useState} from 'react';
import { ScrollView,View} from 'react-native';
import {useTranslation} from 'react-i18next';
import RightArrow from '../Assests/Svgs/LeftArrow';
import {AddressTextField, GreenButton} from '../Components';
import { colors } from '../Utils/theme';
import { Formik } from 'formik';
import { addCreditCardSchema } from '../Utils/validationSchema';

const AddNewCreditCardForm = ({creditCardState, handleCreditCard, animation}) => {
  const {t} = useTranslation();
  return (
    <ScrollView>
      <Formik initialValues={creditCardState} validationSchema={() =>addCreditCardSchema(t)} onSubmit={(values) => handleCreditCard(values)}>
            {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
              const { cardNumber, cardName, expiryMonth, expiryYear, cvc } = values;
              return <>
              <View style={{marginHorizontal:15, paddingTop:20  }} >
                <AddressTextField
                  value={cardNumber}
                  error={touched.cardNumber && errors.cardNumber}
                  title={t('card_number')}
                  keyboardType="phone-pad"
                  name="cardNumber"
                  secureTextEntry={false}
                  onChangeText={handleChange('cardNumber')}
                  onBlur={handleBlur('cardNumber')}
                />
                 <AddressTextField
                  value={cardName}
                  error={touched.cardName && errors.cardName}
                  title={t('name_on_card')}
                  keyboardType="default"
                  name="cardName"
                  secureTextEntry={false}
                  onChangeText={handleChange('cardName')}
                  onBlur={handleBlur('cardName')}
                />
                 <AddressTextField
                  value={expiryMonth}
                  error={touched.expiryMonth && errors.expiryMonth}
                  title={t('expiry_month')}
                  keyboardType="phone-pad"
                  placeholder={t('month_text')}
                  placeholderTextColor={colors.blackColor}
                  name="expiryMonth"
                  secureTextEntry={false}
                  onChangeText={handleChange('expiryMonth')}
                  onBlur={handleBlur('expiryMonth')}
                  // childern={<RightArrow/>}
                />
                 <AddressTextField
                  value={expiryYear}
                  error={touched.expiryYear && errors.expiryYear}
                  title={t('expiry_year')}
                  keyboardType="phone-pad"
                  placeholder={t('year_text')}
                  placeholderTextColor={colors.blackColor}
                  name="expiryYear"
                  secureTextEntry={false}
                  onChangeText={handleChange('expiryYear')}
                  onBlur={handleBlur('expiryYear')}
                  // childern={<RightArrow/>}
                />
                <AddressTextField
                  value={cvc}
                  error={touched.cvc && errors.cvc}
                  title={t('Cvc')}
                  keyboardType="phone-pad"
                  // placeholder={t('cvc_number')}
                  placeholderTextColor={colors.blackColor}
                  name="cvc"
                  secureTextEntry={false}
                  onChangeText={handleChange('cvc')}
                  onBlur={handleBlur('cvc')}
                  // childern={<RightArrow/>}
                />
                <GreenButton  backgroundColor={colors.blackColor} onPress={handleSubmit} animation={animation} title={t('add_card')}/>
                </View>
              </>
            }}
          </Formik>
    </ScrollView>
  );
};


export default AddNewCreditCardForm;
