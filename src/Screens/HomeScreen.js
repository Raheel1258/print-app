import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import cardImage from '../Assests/Images/business-card.png';
import bookletImage from '../Assests/Images/booklet-image.png';
import posterImage from '../Assests/Images/poster-image.png';
import leafletImage from '../Assests/Images/flyers&leaflet-image.png';
import stickerImage from '../Assests/Images/stickers&label-image.png';
import envelopImage from '../Assests/Images/envelope-image.png';
import letterheadImage from '../Assests/Images/letterhead-image.png';

import { ImageSlider, AllCategoriesCard } from '../Components';
import { colors } from '../Utils/theme';

const DATA = [
  {
    id: '1',
    image: cardImage,
    title: 'Business Card',
    days: '2-5 business days',
    price: '100 cards from $68'
  },
  {
    id: '2',
    image: bookletImage,
    title: 'Booklet',
    days: '4-7 business days',
    price: '10 booklets from $184'
  },
  {
    id: '3',
    image: posterImage,
    title: 'Poster',
    days: '3-4 business days',
    price: '5 posters from $48'
  },
  {
    id: '4',
    image: leafletImage,
    title: 'Flyers & Leaflet',
    days: '3-4 business days',
    price: '100 flyers from $58'
  },
  {
    id: '5',
    image: stickerImage,
    title: 'Stickers & Label',
    days: '3-5 business days',
    price: '100 stickers from $178'
  },
  {
    id: '6',
    image: envelopImage,
    title: 'Envelope',
    days: '4-6 business days',
    price: '100 envelops from $128'
  },
  {
    id: '7',
    image: letterheadImage,
    title: 'Letterhead',
    days: '4-6 business days ',
    price: '100 units from $120'
  },
];

const HomeScreen = ({ categories , homeSliderImages}) => {
  const { t } = useTranslation();
  const renderItem = ({ item }) => (
    <AllCategoriesCard title={item.title} days={item.days} image={item.image} price={item.price} />
  );
  return (
    <>
      {
        categories?.length !== undefined ?
          <>
            <ImageSlider homeSliderImages={homeSliderImages}/>
            <View style={styles.container}>
              <Text style={styles.printText}>{t('lets_print')}</Text>
              <FlatList
                numColumns={2}
                data={categories}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatlistContainer}
              />
            </View>
          </> :
          <View style={styles.toastContainer}>
            <ActivityIndicator size="small" color="#000" animating={true} />
          </View>
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
    // fontFamily:Avenir Next,
    fontSize: '18@s',
    fontStyle: 'normal',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '20@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginVertical: '6@s'
  },
  flatlistContainer: {
    paddingBottom: '70@s',
  },
  toastContainer:{
    flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
  }
});

export default HomeScreen;
