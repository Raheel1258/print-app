import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {ScaledSheet} from 'react-native-size-matters';

import {colors} from '../Utils/theme';

const ImageSlider = ({sliderImages, item}) => {
  //console.log("home" , homeSliderImages[0].images)
  const [images, setImges] = useState([
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
  ]);
  return (
    <View>
      <SliderBox
        images={sliderImages}
        sliderBoxHeight={200}
        dotColor={colors.whiteColor}
        inactiveDotColor="transparent"
        paginationBoxVerticalPadding={20}
        autoplay
        circleLoop
        resizeMethod={'resize'}
        resizeMode={'cover'}
        paginationBoxStyle={{
          position: 'absolute',
          bottom: 0,
          padding: 0,
          alignItems: 'center',
          alignSelf: 'center',
          justifyContent: 'center',
          paddingVertical: 10,
        }}
        dotStyle={{
          width: 15,
          height: 15,
          borderRadius: 50,
          marginHorizontal: 0,
          padding: 0,
          marginHorizontal: -4,
          borderWidth: 2,
          borderColor: colors.whiteColor,
          backgroundColor: 'transparent',
        }}
        ImageComponentStyle={{
          borderRadius: 15,
          width: '92%',
          marginTop: 10,
        }}
        imageLoadingColor="transparent"
      />
      {item &&
       <View style={styles.paddingContainer}>
       <Text style={styles.cardTitle}>Premium (Thick) Business Card</Text>
       <Text style={styles.cardPrice}>From HK$ 68 / 100pcs</Text>
       <View style={styles.descriptionContainer}>
         <View style={styles.dotContainer} />
         <Text style={styles.cardDescription}>Thick, smooth and premium</Text>
       </View>
       <View style={styles.descriptionContainer}>
         <View style={styles.dotContainer} />
         <Text style={styles.cardDescription}>Perfect for professionals</Text>
       </View>
     </View>
      }
     

      {/* <View style={styles.paddingContainer}>
        <Text style={styles.productTitle} numberOfLines={1}>
          Premium (Thick) Business Card
        </Text>
        <Text style={styles.productPrice} numberOfLines={1}>
          From HK$ 68 / 100 pc
        </Text>
        <Text style={styles.productDescription}>
          Thick, smooth and premium. The Premium Business Card is a popular
          choice for professionals.
        </Text>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryType}>Paper type:</Text>
          <Text style={styles.categoryDescription} numberOfLines={1}>
            Woodfree Card (350g)
          </Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryType}>Lead time:</Text>
          <Text style={styles.categoryDescription} numberOfLines={1}>
            2-3 business days
          </Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryType}>Colour:</Text>
          <Text style={styles.categoryDescription} numberOfLines={1}>
            CYMK
          </Text>
        </View>
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryType}>Sizes:</Text>
          <Text style={styles.categoryDescription} numberOfLines={1}>
            3 sizes
          </Text>
        </View>
      </View> */}
    </View>
  );
};

const styles = ScaledSheet.create({
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

  productTitle: {
    // fontFamily:Avenir LT Std,
    fontSize: '18@s',
    fontStyle: 'normal',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '18@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  productPrice: {
    // fontFamily:Avenir LT Std,
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '12@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.greenColor,
    marginTop: '9@s',
  },
  productDescription: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginVertical: '6@s',
  },
  categoryType: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
    width: '85@s',
  },
  categoryDescription: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4@s',
  },
});

export default ImageSlider;
