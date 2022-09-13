import React from 'react';
import {View, Text, FlatList, TouchableOpacity, ActivityIndicator,ScrollView, Image} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import i18n from 'i18next'

import HeaderImage from '../Assests/Images/businesscard-header-image.png';
import {ImageBackArrowHeader, ImageSlider, ImageSwiper} from '../Components';
import {colors,fonts} from '../Utils/theme';



const ProductsListingScreen = ({ goBack, productList, navigate, categoryTitle, categoryImage, animation, category }) => {
  const renderItem = ({ item }) => (
    <>
      <TouchableOpacity onPress={()=>navigate('singleProduct' , {item:item ,categoryTitle:categoryTitle ,productCategory:category})}>
      {/* <ImageSwiper sliderImages={item?.image} autoPlaySlider={false}/> */}
        <View style={styles.paddingContainer}>
      <Image style={styles.cardImage}   source={{uri: item?.image[0]}} />
        <Text style={styles.cardTitle}>{item?.category?.name}</Text>
        <Text style={styles.cardPrice}>{i18n.language == "en" ? item?.category?.pricePerHunderd : item?.category?.pricePerHunderd_chi}</Text>
        <View style={styles.descriptionContainer}>
          <View style={styles.dotContainer} />
          <Text style={styles.cardDescription}>{i18n.language == "en" ? item?.feature1 : item?.feature1_chi}</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.dotContainer} />
          <Text style={styles.cardDescription}>{i18n.language == "en" ? item?.feature2 : item?.feature2_chi}</Text>
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
          {animation ? 
          <View style={styles.loaderContainerProductList}>
          <ActivityIndicator size="small" color="#000" animating={true} />
        </View>:
          <FlatList
            data={productList && productList}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            contentContainerStyle={styles.flatlistContainer}
          />
          }
        {productList?.length == 0 && <View style={styles.noProduct}><Text>{"No Products are available"}</Text></View>}
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
    height:'400@s',
		justifyContent: 'center',
		alignItems: 'center',
  },
  noProduct:{
    fontFamily:fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '600',
    height:'130%',
		justifyContent: 'center',
    color:colors.blackColor,
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
