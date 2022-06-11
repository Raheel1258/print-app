import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import {colors, fonts} from '../Utils/theme';

const OrderSummaryComponent = ({subTotal, promocodeDiscount, total, deliveryMethod, deliveryCost}) => {
  console.log("total" , total);
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.pricesText}>{t('sub_total')}</Text>
        <Text style={styles.pricesText}>(HK$ {(subTotal)})</Text>
      </View>
      {deliveryMethod == "Delivery" && <View style={styles.contentContainer}>
        <Text style={styles.pricesText}>{t('delivery_order_text')}</Text>
        <Text style={styles.pricesText}>(HK$ {(deliveryCost) })</Text>
      </View>}
     {promocodeDiscount != "0" && <View style={styles.contentContainer}>
        <Text style={styles.pricesText}>{t('discount_text')}</Text>
        <Text style={styles.pricesText}>(HK$ {(promocodeDiscount)})</Text>
      </View>}
      <View style={styles.contentContainer}>
        <Text style={styles.totalText}>{t('total_pay')}</Text>
        <Text style={styles.totalText}>HK$ {(total).toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginHorizontal: '17@s',
    marginVertical: '10@s',
  },
  contentContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:'12@s'
  },
  pricesText: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    color: colors.lightBlackColor,
  },
  totalText:{
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    color: colors.blackColor, 
  }
});

export default OrderSummaryComponent;
