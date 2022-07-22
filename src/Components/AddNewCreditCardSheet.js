import React, {useState} from 'react';
import { ScrollView,View} from 'react-native';
import {useTranslation} from 'react-i18next';
import RightArrow from '../Assests/Svgs/LeftArrow';
import {AddressTextField, GreenButton} from '../Components';
import { colors } from '../Utils/theme';
import { Formik } from 'formik';
import { addCreditCardSchema , updateCreditCardSchema} from '../Utils/validationSchema';
import {addCards, updateCardStripe} from "../store/actions/userPersonalDetailAction"
import { useDispatch } from 'react-redux';

const AddNewCreditCardSheet = ({addCardetCardRBSheet,updateCard }) => {
    const dispatch = useDispatch();
    const [cardAddAnimation, setCardAddAnimation] = useState(false);
    const [creditCardState, setCreditCardState] = useState({
        cardNumber: '',
        cardName: updateCard?.name ?? '',
        expiryMonth: updateCard?.exp_month ?? '',
        expiryYear: updateCard?.exp_year ?? '',
        cvc:'',
    })
    const handleCreditCard = (values) => {
      if(updateCard == undefined){
        dispatch(addCards(values, setCardAddAnimation, addCardetCardRBSheet))
      }else {
        dispatch(
          updateCardStripe(
            updateCard?.id,
            {name:values.cardName, exp_month:values.expiryMonth , exp_year:values.expiryYear},
              setCardAddAnimation, addCardetCardRBSheet))
      }
       
     }
  const {t} = useTranslation();
  return (
    <ScrollView>
      <Formik initialValues={creditCardState} validationSchema={updateCard == undefined ? () =>addCreditCardSchema(t): updateCreditCardSchema(t)} onSubmit={(values) => handleCreditCard(values)}>
            {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
              const { cardNumber, cardName, expiryMonth, expiryYear, cvc } = values;
              return <>
              <View >
                {!updateCard && <AddressTextField
                  value={cardNumber}
                  error={touched.cardNumber && errors.cardNumber}
                  title={t('card_number')}
                  keyboardType="phone-pad"
                  name="cardNumber"
                  secureTextEntry={false}
                  onChangeText={handleChange('cardNumber')}
                  onBlur={handleBlur('cardNumber')}
                />}
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
                  value={expiryMonth.toString()}
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
                  value={expiryYear.toString()}
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
                {!updateCard &&<AddressTextField
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
                />}
                <GreenButton  backgroundColor={colors.blackColor} onPress={handleSubmit} animation={cardAddAnimation} title={updateCard ?'Update Card':('add_card')}/>
                </View>
              </>
            }}
          </Formik>
    </ScrollView>
  );
};


export default AddNewCreditCardSheet;