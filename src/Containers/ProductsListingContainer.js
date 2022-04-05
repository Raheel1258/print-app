import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import {getProductList} from '../store/actions/productList';

import ProductsListingScreen from '../Screens/ProductsListingScreen';
import {colors} from '../Utils/theme';

const ProductsListingContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState(false);
  const productList = useSelector(state => state.productList.productList);

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(()=>{
    dispatch(getProductList("124",setAnimation))

  },[])
  return (
    <View style={styles.container}>
      <ProductsListingScreen goBack={goBack} productList={productList} navigate={navigate}/>
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