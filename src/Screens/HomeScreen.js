import React, { useState } from 'react';
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
import { colors, fonts } from '../Utils/theme';

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



const HomeScreen = ({ categories, homeSliderImages, homeSliderImagesCaptions }) => {

  const [text, setText] = useState([
    'Order your next print in just a few taps',
    'Order your next print in just a few taps',
    'Order your next print in just a few taps',
  ]);
  // console.log("images" ,homeSliderImages[0]?.images );
  // const sliderImages = homeSliderImages[0]?.images; 
  const { t } = useTranslation();
  const renderItem = ({ item }) => (
    <AllCategoriesCard title={item.title} deliveryTime={item.deliveryTime} image={item.image} priceDescription={item.priceDescription} category={item.category} />
  );
  return (
    <>
      {
        categories?.length !== undefined ?
          <>
            <ImageSlider sliderImages={homeSliderImages} captions={homeSliderImagesCaptions} />
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
          <View style={styles.loaderContainer}>
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
    fontFamily: fonts.avenir_next,
    fontSize: '18@s',
    fontStyle: 'normal',
    // fontWeight: '800',
    lineHeight: '20@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginTop: '7@s',
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
