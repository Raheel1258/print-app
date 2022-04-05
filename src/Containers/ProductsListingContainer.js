import React from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import ProductsListingScreen from '../Screens/ProductsListingScreen';
import {colors} from '../Utils/theme';


const ProductsListingContainer = () => {
const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  return (
    <View style={styles.container}>
      <ProductsListingScreen goBack={goBack} navigate={navigate}/>
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