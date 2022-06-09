import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import GreenCheckIcon from '../Assests/Svgs/GreenCheckIcon';
import {colors,fonts} from '../Utils/theme';

const PromoCodeInput = ({textValue, validPromoCode, promocodeDiscount, handleChange}) => {
    const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.textInputTitle}>{t('add_promo_code')}</Text>
      <View style={styles.textInputContainer}>
      <TextInput 
      style={styles.textInput} 
      value={textValue} 
      keyboardType="default" 
      autoCapitalize="none"
      onChangeText={handleChange} 
      />
      <View>{(promocodeDiscount != "0" && textValue !== '' && validPromoCode ==true ) && <GreenCheckIcon/> }</View>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
    container: {
    marginTop: '10@s',
    marginHorizontal:'12@s'
  },
  textInputTitle: {
    fontFamily:fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '21@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginBottom:'-5@s',
  },
  textInput: {
    fontFamily:fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '14@s',
    color: colors.blackColor,
    letterSpacing: '0.2@s',
    paddingLeft: '0@s',
    paddingBottom:'7@s',
    textTransform:'uppercase',
    width:'90%'
  },
  textInputContainer:{
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      borderBottomWidth: 1,
      borderBottomColor: colors.inputBorderColor,
  }
});

export default PromoCodeInput;
