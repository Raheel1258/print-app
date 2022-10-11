import React, { useEffect, useState } from 'react';
import { View } from 'react-native';

import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import i18n from 'i18next';

import ProductsListingScreen from '../Screens/ProductsListingScreen';
import { getCategoriesProduct } from '../store/actions/productList';

import { colors } from '../Utils/theme';

const ProductsListingContainer = ({ route }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  

  const { categoryTitle, categoryImage, category } = route.params;

  const [animation, setAnimation] = useState(false);
  const [languageState, setLanguageState] = useState(i18n.language);

  const productList = useSelector(state => state?.productList?.categoryProductList);

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(()=>{
    setLanguageState(i18n.language)
  },[isFocused])

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