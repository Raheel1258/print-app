import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import { colors } from '../Utils/theme';

const CartScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Cart Screen</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default CartScreen;
