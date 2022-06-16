import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import { AllCategoriesCard, ImageSwiper } from '../Components';
import { colors, fonts } from '../Utils/theme';



const HomeScreen = ({ categories, homeSliderImages, animation }) => {

  const { t } = useTranslation();
  const renderItem = ({ item }) => (
    <AllCategoriesCard title={item.title} deliveryTime={item.deliveryTime} image={item.image} priceDescription={item.priceDescription} category={item.category} />
  );
  return (
    <>
      {
        animation ?
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="small" color="#000" animating={true} />
          </View> :
          <>
            <ImageSwiper sliderImages={homeSliderImages} />
            <View style={styles.container}>
              {categories && <Text style={styles.printText}>{t('lets_print')}</Text>}
              <FlatList
                numColumns={2}
                data={categories && categories}
                renderItem={renderItem}
                keyExtractor={item => item._id}
                contentContainerStyle={styles.flatlistContainer}
              />
            </View>
          </>

      }
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: '15@s',
  },
  printText: {
    fontFamily: fonts.avenir_next,
    fontSize: '18@s',
    fontStyle: 'normal',
    // fontWeight: '800',
    lineHeight: '20@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginTop: '7@s',
    marginBottom: '10@s',
  },
  flatlistContainer: {
    paddingBottom: '70@s',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default HomeScreen;
