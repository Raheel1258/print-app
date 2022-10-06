import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

import ProductsListingScreen from '../Screens/ProductsListingScreen';
import { getCategoriesProduct } from '../store/actions/productList';

import { colors } from '../Utils/theme';

const ProductsListingContainer = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const { categoryTitle, categoryImage, category } = route.params;

  const [animation, setAnimation] = useState(false);

  const productList = useSelector(state => state?.productList?.categoryProductList);

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(getCategoriesProduct(category, setAnimation));
  }, [])

  return (
    <View style={styles.container}>
      <ProductsListingScreen goBack={goBack} productList={productList} navigate={navigate} category={category} categoryTitle={categoryTitle} categoryImage={categoryImage} animation={animation} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
});

export default ProductsListingContainer;