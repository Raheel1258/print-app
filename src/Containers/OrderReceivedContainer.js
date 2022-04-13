import React from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import OrderReceivedScreen from '../Screens/OrderReceivedScreen';
import { colors } from '../Utils/theme';

const OrderReceivedContainer = () => {
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