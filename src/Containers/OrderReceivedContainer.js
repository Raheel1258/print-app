import React,{useEffect} from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../store/actions/cartAction';
import { StackActions, useNavigation, useIsFocused } from '@react-navigation/native';

import OrderReceivedScreen from '../Screens/OrderReceivedScreen';
import { colors } from '../Utils/theme';

const OrderReceivedContainer = ({route}) => {
  const dispatch = useDispatch();
  const {welcome, orderId} = route.params;
  useEffect (()=> {
    dispatch(emptyCart());
  },[])
  return (
    <View style={styles.container}>
        <OrderReceivedScreen welcome={welcome} orderId={orderId}/>
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default OrderReceivedContainer;