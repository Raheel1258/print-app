import React, { useState } from 'react';
import { View, Text, FlatList, ActivityIndicator, ScrollView } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';

import { AllCategoriesCard, ImageSwiper } from '../Components';

import { colors, fonts } from '../Utils/theme';

const HomeScreen = ({ categories, homeSliderImages, animation }) => {
  const { t } = useTranslation();

  const renderItem = ({ item }) => (
    <AllCategoriesCard
      title={i18n.language == "en" ? item.title : item.title_chi}
      deliveryTime={i18n.language == "en" ? item.deliveryTime : item.deliveryTime_chi}
      image={item.image}
      priceDescription={i18n.language == "en" ? item.priceDescription : item.priceDescription_chi}
      category={item.category}
    />
  );
  return (
    <>
      {
        animation ?
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="small" color="#000" animating={true} />
          </View> :
          <ScrollView>
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
          </ScrollView>
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
    lineHeight: '25@s',
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
