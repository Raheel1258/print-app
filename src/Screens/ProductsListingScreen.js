import React from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {ImageBackArrowHeader, ImageSlider} from '../Components';
import {colors,fonts} from '../Utils/theme';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const ProductsListingScreen = ({goBack,navigate}) => {
  const renderItem = ({item}) => (
    <>
      <ImageSlider title={item.title} />
      <TouchableOpacity onPress={()=>navigate('singleProduct')} style={styles.paddingContainer}>
        <Text onPress={()=>navigate('singleProduct')} style={styles.cardTitle}>Premium (Thick) Business Card</Text>
        <Text style={styles.cardPrice}>From HK$ 68 / 100pcs</Text>
        <View style={styles.descriptionContainer}>
          <View style={styles.dotContainer} />
          <Text style={styles.cardDescription}>Thick, smooth and premium</Text>
        </View>
        <View style={styles.descriptionContainer}>
          <View style={styles.dotContainer} />
          <Text style={styles.cardDescription}>Perfect for professionals</Text>
        </View>
      </TouchableOpacity>
    </>
  );
  return (
    <View style={styles.container}>
      <ImageBackArrowHeader  goBack={goBack}/>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
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
    letterSpacing: '0.4@s',
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
    fontFamily:fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
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
});

export default ProductsListingScreen;
