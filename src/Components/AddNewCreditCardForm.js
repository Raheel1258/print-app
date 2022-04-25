import React, {useState} from 'react';
import { ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';

import RightArrow from '../Assests/Svgs/LeftArrow';
import {AddressTextField, GreenButton} from '../Components';
import { colors } from '../Utils/theme';
import { Formik } from 'formik';
import { addCreditCardSchema } from '../Utils/validationSchema';

const AddNewCreditCardForm = () => {
  const [animation, setAnimation] = useState(false);
  const [creditCardState, setCreditCardState] = useState({
    cardNumber:'',
    cardName:'',
    expiryMonth:'',
    expiryYear:''
  })

  const handleCreditCard = (values) => {
    console.log("values from creditCard" , values);

  }
  const {t} = useTranslation();
  return (
    <ScrollView>
      <Formik initialValues={creditCardState} validationSchema={() =>addCreditCardSchema(t)} onSubmit={(values) => handleCreditCard(values)}>
            {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
              const { cardNumber, cardName, expiryMonth, expiryYear } = values;
              return <>
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
                  keyboardType="default"
                  placeholder={t('month_text')}
                  placeholderTextColor={colors.blackColor}
                  name="expiryMonth"
                  secureTextEntry={false}
                  onChangeText={handleChange('expiryMonth')}
                  onBlur={handleBlur('expiryMonth')}
                  childern={<RightArrow/>}
                />
                 <AddressTextField
                  value={expiryYear}
                  error={touched.expiryYear && errors.expiryYear}
                  title={t('expiry_year')}
                  keyboardType="default"
                  placeholder={t('year_text')}
                  placeholderTextColor={colors.blackColor}
                  name="expiryYear"
                  secureTextEntry={false}
                  onChangeText={handleChange('expiryYear')}
                  onBlur={handleBlur('expiryYear')}
                  childern={<RightArrow/>}
                />
                <GreenButton  backgroundColor={colors.blackColor} onPress={handleSubmit} animation={animation} title={t('add_card')}/>
              </>
            }}
          </Formik>
    </ScrollView>
  );
};


export default AddNewCreditCardForm;
