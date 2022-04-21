import React from 'react';
import {ScrollView} from 'react-native';
import {useTranslation} from 'react-i18next';

import RightArrow from '../Assests/Svgs/LeftArrow';
import {AddressTextField,GreenButton} from '../Components';
import {colors} from '../Utils/theme';

const AddNewAddressForm = () => {
  const {t} = useTranslation();
  return (
    <ScrollView>
     <AddressTextField  keyboardType="default" title={t('full_name')} placeholder={t('peter_leung')}/>
     <AddressTextField  keyboardType="default" title={t('company_name')} />
     <AddressTextField  keyboardType="default" title={t('address_line_1')} placeholder={t('park_text')}/>
     <AddressTextField  keyboardType="email-address" title={t('address_line_2')} placeholder={t('peter_mail')}/>
     <AddressTextField  keyboardType="default" title={t('area_text')} placeholder={t('kowloon_text')} childern={<RightArrow/>}/>
     <AddressTextField  keyboardType="default" title={t('district_text')} placeholder={t('kwun_tong')} childern={<RightArrow/>}/>
     <AddressTextField  keyboardType="default" title={t('city_country')} placeholder={t('hong_kong')} childern={<RightArrow/>}/>
     <AddressTextField  keyboardType="phone-pad" title={t('contact_no')} placeholder={t('phone_pad')}/>
     <GreenButton backgroundColor={colors.blackColor} title={t('add_address')}/>
    </ScrollView>
  );
};

export default AddNewAddressForm;
