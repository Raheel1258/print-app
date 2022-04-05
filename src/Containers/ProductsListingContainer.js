import React from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import ProductsListingScreen from '../Screens/ProductsListingScreen';
import {colors} from '../Utils/theme';

const ProductsListingContainer = () => {
  return (
    <View style={styles.container}>
      <ProductsListingScreen/>
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default ProductsListingContainer;