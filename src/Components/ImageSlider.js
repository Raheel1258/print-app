import React, {useState} from 'react';
import {View} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';

import {colors} from '../Utils/theme';

const ImageSlider = ({homeSliderImages}) => {
  console.log("home" , homeSliderImages[0].images)
  const [images, setImges] = useState([
    'https://source.unsplash.com/1024x768/?nature',
    'https://source.unsplash.com/1024x768/?water',
    'https://source.unsplash.com/1024x768/?girl',
    'https://source.unsplash.com/1024x768/?tree',
  ]);
  return (
    <View>
      <SliderBox
        images={images}
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
    </View>
  );
};

export default ImageSlider;
