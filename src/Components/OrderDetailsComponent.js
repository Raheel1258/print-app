import React from 'react';
import {Text, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {colors, fonts} from '../Utils/theme';

const OrderDetailsComponent = ({orderDate, deliveryMethod, deliveryAddress, paymentMethod, date, method, address, payment }) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{orderDate}</Text>
        <Text style={styles.description}>{date}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{deliveryMethod}</Text>
        <Text style={styles.description}>{method}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{deliveryAddress}</Text>
        <Text numberOfLines={3} style={styles.description}>{address}</Text>
      </View>
      <View style={styles.contentContainer}>
        <Text style={styles.title}>{paymentMethod}</Text>
        <Text style={styles.description}>{payment}</Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginHorizontal:'20@s',
    marginTop:'12@s'
  },
  contentContainer: {
    flexDirection: 'row',
    marginBottom:'10@s'
  },
  title: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
      letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    width:'112@s',
  },
  description: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
      letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    width:'200@s',
  },
});

export default OrderDetailsComponent;
