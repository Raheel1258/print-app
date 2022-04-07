import React from 'react';
import {View, Text, FlatList, TouchableOpacity, ActivityIndicator} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import { ImageBackArrowHeader, ImageSlider } from '../Components';
import { colors } from '../Utils/theme';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?girl',
    ]
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
    images: [
      'https://source.unsplash.com/1024x768/?nature',
    ]
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
    ]
  },
];

const ProductsListingScreen = ({ goBack, productList, navigate, title, image, animation }) => {
  const renderItem = ({ item }) => (
    <>
      <ImageSlider sliderImages={item?.images} title={item.title} />
      <TouchableOpacity onPress={()=>navigate('singleProduct' , {item:item , title:title})} style={styles.paddingContainer}>
        <Text style={styles.cardTitle}>{item?.heading}</Text>
        <Text style={styles.cardPrice}>From HK$ {item?.price} / 100pcs</Text>
        <View style={styles.descriptionContainer}>
          <View style={styles.dotContainer} />
          <Text style={styles.cardDescription}>{item?.feature1}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.dotContainer} />
          <Text style={styles.cardDescription}>{item?.feature2}</Text>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <>
      {productList?.length !== undefined ?
        <View style={styles.container}>
          <ImageBackArrowHeader title={title} image={image} goBack={goBack} />
          <FlatList
            data={productList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.flatlistContainer}
          />
        </View> : <View style={styles.loaderContainer}>
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
  },
  flatlistContainer: {
    paddingBottom: '80@s',
  },
  cardTitle: {
    // fontFamily:Avenir LT Std,
    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '14@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  cardPrice: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '12@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.greenColor,
    marginVertical: '9@s',
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '8@s',
    marginBottom: '5@s',
  },
  dotContainer: {
    backgroundColor: colors.greyColor,
    width: '7@s',
    height: '7@s',
    borderRadius: '20@s',
    marginRight: '7@s',
  },
  cardDescription: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '12@s',
    letterSpacing: '0.3@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
  },
  paddingContainer: {
    paddingHorizontal: '17@s',
    marginTop: '16@s',
  },
  loaderContainer:{
    flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
  }
});

export default ProductsListingScreen;
