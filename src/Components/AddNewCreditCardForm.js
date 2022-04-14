import React from 'react';
import { ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';

import RightArrow from '../Assests/Svgs/LeftArrow';
import {AddressTextField} from '../Components';
import { colors } from '../Utils/theme';

const AddNewCreditCardForm = () => {
  const {t} = useTranslation();
  return (
    <ScrollView>
     <AddressTextField  keyboardType="default" title={t('card_number')} />
     <AddressTextField  keyboardType="default" title={t('name_on_card')} />
     <AddressTextField  keyboardType="default" title={t('expiry_month')} placeholder={t('month_text')} placeholderTextColor={colors.blackColor} childern={<RightArrow/>}/>
     <AddressTextField  keyboardType="default" title={t('expiry_year')} placeholder={t('year_text')} placeholderTextColor={colors.blackColor} childern={<RightArrow/>}/>
    </ScrollView>
  );
};


export default AddNewCreditCardForm;
