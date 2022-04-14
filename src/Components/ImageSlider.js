import React, {useState} from 'react';
import {View, Text, Image} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {ScaledSheet} from 'react-native-size-matters';

import {colors, fonts} from '../Utils/theme';

const ImageSlider = ({sliderImages, text}) => {
  
  //console.log("home" , homeSliderImages[0].images)
  const [current, setCurrent] = useState(0);
  // const [text, setText] = useState([
  //   'Order your next print in just a few taps1',
  //   'Order your next print in just a few taps2',
  //   'Order your next print in just a few taps3',
  // ]);
  const [images, setImges] = useState([
    // 'https://source.unsplash.com/1024x768/?nature',
    // 'https://source.unsplash.com/1024x768/?water',
    // 'https://source.unsplash.com/1024x768/?girl',
    require('../Assests/Images/businesscard-header-image.png'),
    require('../Assests/Images/poster-image.png'),
    require('../Assests/Images/booklet-image.png'),
  ]);
  return (
    <View>
      {text && <Text style={styles.slidertitle}>{text[current]}</Text>}
      <SliderBox
        currentImageEmitter={i => setCurrent(i)}
        images={sliderImages}
        position="relative"
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

const styles = ScaledSheet.create({
  slidertitle: {
    fontFamily: fonts.avenir_bold,
    fontSize: '22@s',
    fontStyle: 'normal',
    lineHeight: '25@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.whiteColor,
    position: 'absolute',
    zIndex: 99999,
    top: 70,
    left: 30,
    width: 200,
  },
});

export default ImageSlider;
