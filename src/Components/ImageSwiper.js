import React from 'react';
import { View, Text, ImageBackground } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import Swiper from 'react-native-swiper';
import i18n from 'i18next';

import { colors, fonts } from '../Utils/theme';
import { chi_eng } from '../Utils/mockData';

const ImageSwiper = ({ sliderImages, autoPlaySlider = true }) => {
  return (
    <View style={styles.container}>
      <Swiper
        autoplay={autoPlaySlider}
        autoplayTimeout={5.2}
        dotStyle={styles.unActiveDotStyling}
        activeDotStyle={styles.activeDotStyling}
        showsButtons={false}>
        {sliderImages &&
          sliderImages.map((item, index) => {
            return (
              <View key={index}>
                {item?.image ? (
                  <ImageBackground
                    imageStyle={styles.image}
                    source={{ uri: item?.image }}
                    transition={false}>
                    {item?.caption == chi_eng[item.caption] ?
                      <>
                        {i18n.language == "en" ? <><Text style={styles.text}>
                          {(item?.caption && item?.caption.substring(0, 21))}
                        </Text>
                          <Text style={styles.text1}>{item?.caption && item?.caption.substring(21)}</Text></>
                          :
                          <><Text style={styles.text}>
                            {(item?.caption_chi && item?.caption_chi.substring(0, 4))}
                          </Text>
                            <Text style={styles.text1}>{item?.caption_chi && item?.caption_chi.substring(4)}</Text></>
                        }
                      </>
                      :
                      <Text style={styles.text}>
                        {i18n.language == "en" ? (item?.caption && item?.caption) : (item?.caption_chi && item?.caption_chi)}
                      </Text>}
                  </ImageBackground>
                ) : (
                  <ImageBackground
                    imageStyle={styles.image}
                    source={{ uri: item }}></ImageBackground>
                )}
              </View>
            );
          })}
      </Swiper>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    height: 210,
    justifyContent: 'center',
    marginTop: '10@s',
  },
  unActiveDotStyling: {
    borderColor: colors.whiteColor,
    borderWidth: 1.5,
    width: '8.5@s',
    height: '8.5@s',
    borderRadius: '4@s',
    marginLeft: '3@s',
    marginRight: '3@s',
    marginBottom: '-18@s',
    backgroundColor: 'transparent',
  },
  activeDotStyling: {
    backgroundColor: colors.whiteColor,
    width: '8.5@s',
    height: '8.5@s',
    borderRadius: '4@s',
    marginLeft: '3@s',
    marginRight: '3@s',
    marginBottom: '-18@s',
  },
  image: {
    height: 210,
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
    marginTop: '40@s',
    padding: '25@s',
    marginBottom: '-25@s',
  },
  text1: {
    fontFamily: fonts.avenir_next,
    fontSize: '22@s',
    fontStyle: 'normal',
    lineHeight: '27@s',
    letterSpacing: '0.2@s',
    color: colors.whiteColor,
    marginLeft: '24@s',
  },
});

export default ImageSwiper;
