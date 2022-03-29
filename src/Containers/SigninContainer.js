import { types } from '@babel/core';
import React from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import SigninScreen from '../Screens/SigninScreen';
import {colors} from '../Utils/theme';

const SigninContainer = () => {
  return (
    <View style={styles.container}>
      <SigninScreen />
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default SigninContainer;