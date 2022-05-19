import React from 'react';
import {View, Text, FlatList, TouchableOpacity, ActivityIndicator,ScrollView, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import HeaderImage from '../Assests/Images/businesscard-header-image.png';
import {ImageBackArrowHeader, ImageSlider, ImageSwiper} from '../Components';
import {colors,fonts} from '../Utils/theme';



const ProductsListingScreen = ({ goBack, productList, navigate, categoryTitle, categoryImage, animation, category }) => {
  const renderItem = ({ item }) => (
    <>
      <TouchableOpacity onPress={()=>navigate('singleProduct' , {item:item ,categoryTitle:categoryTitle ,category:category})}>
      {/* <ImageSwiper sliderImages={item?.image} autoPlaySlider={false}/> */}
        <View style={styles.paddingContainer}>
      <Image style={styles.cardImage}   source={{uri: item?.image[0]}} />
        <Text style={styles.cardTitle}>{item?.category?.name}</Text>
        <Text style={styles.cardPrice}>From HK$ {item?.category?.pricePerHunderd} / 100pcs</Text>
        <View style={styles.descriptionContainer}>
          <View style={styles.dotContainer} />
          <Text style={styles.cardDescription}>{item?.feature1}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.dotContainer} />
          <Text style={styles.cardDescription}>{item?.feature2}</Text>
        </View>
        </View>
      </TouchableOpacity>
    </>
  );

  return (
    <>
        <View style={styles.container}>
          <ScrollView nestedScrollEnabled={true}>
          <ImageBackArrowHeader  title={categoryTitle} image={categoryImage} goBack={goBack} />
          {!animation ? 
          <FlatList
            data={productList && productList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.flatlistContainer}
          />
          : <View style={styles.loaderContainerProductList}>
          <ActivityIndicator size="small" color="#000" animating={true} />
        </View>}
          </ScrollView>
        </View> 
      
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
    fontFamily:fonts.avenir_bold,
    fontSize: '14@s',
    fontStyle: 'normal',
    // fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '14@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  cardPrice: {
    fontFamily:fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '12@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
    marginVertical: '9@s',
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '7@s',
    marginBottom: '5@s',
  },
  dotContainer: {
    backgroundColor: colors.greyColor,
    width: '5@s',
    height: '5@s',
    borderRadius: '20@s',
    marginRight: '7@s',
  },
  cardDescription: {
    fontFamily:fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '12@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
  },
  paddingContainer: {
    paddingHorizontal: '17@s',
    marginTop: '20@s',
  },
  loaderContainerProductList:{
    height:'200%',
		justifyContent: 'center',
		alignItems: 'center',
  },
  cardImage:{
    width:'100%',
    height:210,
    borderRadius:'5@s',
    marginBottom:'15@s'
  }
});

export default ProductsListingScreen;
