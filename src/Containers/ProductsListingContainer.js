import React, { useEffect, useState } from 'react';
import {View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';

import {getProductListByCategory, getCategoriesProduct} from '../store/actions/productList';

import ProductsListingScreen from '../Screens/ProductsListingScreen';
import {colors} from '../Utils/theme';


const ProductsListingContainer = ({route}) => { 
  const {categoryTitle, categoryImage, category} = route.params;
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
    dispatch(getProductListByCategory(category,setAnimation))
    //dispatch(getCategoriesProduct(category,setAnimation));
  },[])
  return (
    <View style={styles.container}>
      <ProductsListingScreen goBack={goBack} productList={productList} navigate={navigate} category={category} categoryTitle={categoryTitle} categoryImage={categoryImage} animation={animation}/>
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