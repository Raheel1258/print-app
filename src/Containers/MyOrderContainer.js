import React from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import MyOrderScreen from '../Screens/MyOrderScreen';
import { colors } from '../Utils/theme';

const MyOrderContainer = () => {
  return (
    <View style={styles.container}>
        <MyOrderScreen/>
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default MyOrderContainer;