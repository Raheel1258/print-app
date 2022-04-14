import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image,TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors,fonts} from '../Utils/theme';

const AllCategoriesCard = ({title,days,image,price}) => {
  const navigation = useNavigation();

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  return (
    <TouchableOpacity onPress={()=> navigate('productsListing' , {title:title, image:image})}>
    <View style={styles.headerContainer}>
      <Image style={styles.cardImage} source={image} />
      <Text style={styles.cardName}>{title}</Text>
      <View style={styles.descriptionContainer}>
        <View style={styles.dotContainer} />
        <Text style={styles.descriptionText}>{days}</Text>
      </View>
      <View style={styles.descriptionContainer}>
        <View style={styles.dotContainer} />
        <Text style={styles.descriptionText}>{price}</Text>
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
    marginTop: '10@s',
    marginBottom:'5@s',
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
    width: '7@s',
    height: '7@s',
    borderRadius: '50@s',
    backgroundColor: colors.lightBlackColor,
    marginRight: '7@s',
  },
  descriptionText: {
    fontFamily:fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    lineHeight: '14@s',
    letterSpacing: '0.6@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
  },
});

export default AllCategoriesCard;
