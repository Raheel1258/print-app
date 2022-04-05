import React from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import SingleProductScreen from '../Screens/SingleProductScreen';
import {colors} from '../Utils/theme';

const SingleProductContainer = () => {
  return (
    <View style={styles.container}>
      <SingleProductScreen/>
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default SingleProductContainer;