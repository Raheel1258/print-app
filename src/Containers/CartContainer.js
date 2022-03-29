import { types } from '@babel/core';
import React from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import CartScreen from '../Screens/CartScreen';
import { colors } from '../Utils/theme';

const CartContainer = () => {
  return (
    <View style={styles.container}>
      <CartScreen />
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default CartContainer;