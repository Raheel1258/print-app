import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import Swiper from 'react-native-swiper';
import { colors, fonts } from '../Utils/theme';

const ImageSwiper = () => {
  return (
    <View style={styles.container}>
      <Swiper
        // autoplay
        dotStyle={styles.unActiveDotStyling}
        activeDotStyle={styles.activeDotStyling}
        showsButtons={false}>
        <ImageBackground
        imageStyle={styles.image}
          source={require('../Assests/Images/businesscard-header-image.png')}>
          <Text style={styles.text}>Order your next print in just a few taps 1</Text>
        </ImageBackground>
        <ImageBackground
         imageStyle={styles.image}
          source={require('../Assests/Images/poster-image.png')}>
          <Text style={styles.text}>Order your next print in just a few taps 2</Text>
        </ImageBackground>
        <ImageBackground
         imageStyle={styles.image}
          source={require('../Assests/Images/booklet-image.png')}>
          <Text style={styles.text}>Order your next print in just a few taps 3</Text>
        </ImageBackground>
      </Swiper>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    height:210,
    justifyContent: 'center',
    marginTop: '10@s',
  },
  unActiveDotStyling: {
    borderColor:colors.whiteColor,
    borderWidth: 1.5,
    width: '8.5@s',
    height: '8.5@s',
    borderRadius: '4@s',
    marginLeft: '3@s',
    marginRight: '3@s',
    marginBottom: '-17@s',
    backgroundColor: 'transparent',
  },
  activeDotStyling: {
    backgroundColor: colors.whiteColor,
    width: '8.5@s',
    height: '8.5@s',
    borderRadius: '4@s',
    marginLeft: '3@s',
    marginRight: '3@s',
    marginBottom: '-17@s',
  },
  image: {
    height:210,
    marginHorizontal: '15@s',
    borderRadius: '6@s',
  },
  text: {
    fontFamily: fonts.avenir_next,
    fontSize: '22@s',
    fontStyle: 'normal',
    lineHeight: '27@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.whiteColor,
    marginTop: '35@s',
    padding:'25@s',
    width:'250@s',
  },
});

export default ImageSwiper;
