import { types } from '@babel/core';
import React from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import {colors} from '../Utils/theme';

const ForgotPasswordContainer = () => {
  return (
    <View style={styles.container}>
      <ForgotPasswordScreen />
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default ForgotPasswordContainer;