import React, { useState } from 'react';
import { View, Text } from 'react-native';

import { SliderBox } from 'react-native-image-slider-box';
import { ScaledSheet } from 'react-native-size-matters';

import { colors, fonts } from '../Utils/theme';

const ImageSlider = ({ sliderImages, captions, autoPlaySlider = false }) => {

  const [current, setCurrent] = useState(0);
  const [images, setImges] = useState([
    require('../Assests/Images/businesscard-header-image.png'),
    require('../Assests/Images/poster-image.png'),
    require('../Assests/Images/booklet-image.png'),
  ]);
  return (
    <View>
      {captions && <Text style={styles.slidertitle}>{captions[current]}</Text>}
      <SliderBox
        currentImageEmitter={i => setCurrent(i)}
        images={sliderImages && sliderImages}
        position="relative"
        sliderBoxHeight={200}
        dotColor={colors.whiteColor}
        inactiveDotColor="transparent"
        paginationBoxVerticalPadding={20}
        autoplay={autoPlaySlider}
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
          width: 12,
          height: 12,
          borderRadius: 50,
          marginHorizontal: 0,
          padding: 0,
          marginHorizontal: -4,
          borderWidth: 2,
          borderColor: colors.whiteColor,
          backgroundColor: 'transparent',
        }}
        ImageComponentStyle={{
          borderRadius: 5,
          width: '92%',
          marginTop: 10,
        }}
        imageLoadingColor="transparent"
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  slidertitle: {
    fontFamily: fonts.avenir_next,
    fontSize: '22@s',
    fontStyle: 'normal',
    lineHeight: '25@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.whiteColor,
    position: 'absolute',
    zIndex: 99999,
    top: 70,
    left: 30,
    width: 260,
  },
});

export default ImageSlider;
