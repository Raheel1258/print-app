import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import OrderReceivedScreen from '../Screens/OrderReceivedScreen';
import {colors} from '../Utils/theme';
import {fonts} from '../Utils/theme';

const CartNotifyComponent = ({title, order, description, childern, emptyScreen, description1, description2}) => {
  return (
    <View style={emptyScreen ? styles.emptyContainer : styles.container}>
      <Text style={emptyScreen ? styles.emptyText : styles.thankyouText }>{title}</Text>
      {childern}
      <Text style={styles.orderRefrence}>{order}</Text>
      <Text style={styles.description}>{description}</Text>
      {!emptyScreen && <Text style={styles.thankyouDescription}>{description1}</Text>}
      {!emptyScreen && <Text style={styles.thankyouDescription}>{description2}</Text>}
    </View>
    
  );
};

const styles = ScaledSheet.create({
  emptyContainer: {
    flex: 1,
    paddingHorizontal: '10@s',
    alignItems:'center',
    justifyContent:'center'
  },
  container:{
    flex: 1,
    paddingHorizontal: '10@s',
    alignItems:'center',
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
    marginTop:'40@s'

  },
  emptyText:{
    fontFamily: fonts.avenir_next,
    fontSize: '18@s',
    fontStyle: 'normal',
    lineHeight: '20@s',
    letterSpacing: '0.2@s',
    textAlign: 'center',
    color: colors.blackColor,
    textAlign: 'center',
    marginBottom: '60@s',

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
    width:'240@s',
  },
  thankyouDescription:{
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'center',
    color: colors.lightBlackColor,
    width:'260@s',
    marginTop:'20@s'
  }
});

export default CartNotifyComponent;
