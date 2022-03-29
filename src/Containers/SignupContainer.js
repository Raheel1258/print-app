import { types } from '@babel/core';
import React from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import SignupScreen from '../Screens/SignupScreen';
import {colors} from '../Utils/theme';

const SignupContainer = () => {
  return (
    <View style={styles.container}>
      <SignupScreen />
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default SignupContainer;