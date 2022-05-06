import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import OrderReceivedScreen from '../Screens/OrderReceivedScreen';
import {colors} from '../Utils/theme';
import {fonts} from '../Utils/theme';

const CartNotifyComponent = ({title, order, description, childern}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.thankyouText}>{title}</Text>
      {childern}
      <Text style={styles.orderRefrence}>{order}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
    
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent:'center',
    paddingHorizontal: '10@s',
  },
  thankyouText: {
    fontFamily: fonts.avenir_next,
    fontSize: '18@s',
    fontStyle: 'normal',
    lineHeight: '20@s',
    letterSpacing: '0.2@s',
    textAlign: 'center',
    color: colors.blackColor,
    textAlign: 'center',
    marginBottom: '30@s',
  },
  orderRefrence: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    textAlign: 'center',
    color: colors.blackColor,
    marginVertical: '20@s',
  },
  description: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'center',
    color: colors.lightBlackColor,
    width:'250@s'
  },
});

export default CartNotifyComponent;
