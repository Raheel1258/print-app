import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { View } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import { getCategories, getHomeSliderImages } from "../store/actions/categories";
import { useSelector } from 'react-redux';

import HomeScreen from '../Screens/HomeScreen';
import { colors } from '../Utils/theme';

const HomeContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState(false);
  const categoriesData = useSelector(state => state?.categories?.categories);
  const homeSliderImagesData = useSelector(state => state?.categories?.homeSliderImages);

  const homeSliderImagesCaptions = homeSliderImagesData?.map(item => (item.caption));


  const newData = categoriesData?.sort((a, b) => {
    return a.index - b.index;
  });


  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  useEffect(() => {
    dispatch(getCategories(setAnimation));
    dispatch(getHomeSliderImages());
  }, [])


  return (
    <View style={styles.container}>
      <HomeScreen categories={newData} homeSliderImages={homeSliderImagesData} homeSliderImagesCaptions={homeSliderImagesCaptions} animation={animation} navigate={navigate} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
});

export default HomeContainer;