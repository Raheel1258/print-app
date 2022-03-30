import { types } from '@babel/core';
import React from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import HomeScreen from '../Screens/HomeScreen';
import { colors } from '../Utils/theme';

const HomeContainer = () => {

  return (
    <View style={styles.container}>
      <HomeScreen />
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default HomeContainer;