import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors,fonts} from '../Utils/theme';

const AllCategoriesCard = ({title,deliveryTime,image,priceDescription, category}) => {
  const navigation = useNavigation();

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  return (
    <TouchableOpacity onPress={()=> navigate('productsListing' , {categoryTitle:title, categoryImage:image, category:category})}>
    <View style={styles.headerContainer}>
      <Image style={styles.cardImage} source={{uri: image}} />
      <Text numberOfLines={1} style={styles.cardName}>{category == "STICKERS_LABEL" ? title+'s & Label':title}</Text>
      <View style={styles.descriptionContainer}>
        <View style={styles.dotContainer} />
        <Text numberOfLines={1} style={styles.descriptionText}>{deliveryTime}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.dotContainer} />
        <Text numberOfLines={1} style={styles.descriptionText}>{priceDescription}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  headerContainer: {
    marginTop: '15@s',
    marginRight:'15@s',
  },
  cardName: {
    fontFamily:fonts.avenir_bold,
    fontSize: '14@s',
    fontStyle: 'normal',
    // fontWeight: '800',
    lineHeight: '16@s',
    letterSpacing: '0.6@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginTop: '12@s',
    marginBottom:'6@s',
  },
  cardImage: {
    width: '150@s',
    height: '127@s',
    borderRadius: '8@s',
  },
  descriptionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:'2@s'
  },
  dotContainer: {
    width: '5@s',
    height: '5@s',
    borderRadius: '50@s',
    backgroundColor: colors.lightBlackColor,
    marginRight: '7@s',
  },
  descriptionText: {
    fontFamily:fonts.avenir_light,
    fontSize: '10.5@s',
    fontStyle: 'normal',
    lineHeight: '14@s',
    letterSpacing: '0.6@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    width:'135@s'
  },
});

export default AllCategoriesCard;
