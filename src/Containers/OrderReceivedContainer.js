import React,{useEffect} from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { emptyCart } from '../store/actions/cartAction';

import OrderReceivedScreen from '../Screens/OrderReceivedScreen';
import { colors } from '../Utils/theme';

const OrderReceivedContainer = () => {
  const dispatch = useDispatch();

  useEffect (()=> {
    dispatch(emptyCart());
  })
  return (
    <View style={styles.container}>
        <OrderReceivedScreen/>
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