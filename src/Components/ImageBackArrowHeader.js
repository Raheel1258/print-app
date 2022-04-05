import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import HeaderImage from '../Assests/Images/businesscard-header-image.png';
import BackArrow from '../Assests/Svgs/BackArrow';
import {colors} from '../Utils/theme';

const ImageBackArrowHeader = () => {
  return (
    <View style={styles.container}>
    <ImageBackground
      resizeMode="cover"
      style={styles.headerImage}
      source={HeaderImage}>
      <TouchableOpacity style={styles.headerArrow}>
        <BackArrow />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>Business card</Text>
    </ImageBackground>
    </View>
  );
};

const styles = ScaledSheet.create({
  container:{
    borderBottomWidth:9,
    borderBottomColor:colors.offWhiteColor,
  },
  headerImage: {
    width: '100%',
    height: '200@s',
    marginTop: '5@s',
  },
  headerArrow: {
    padding: '7@s',
    width: '30@s',
    marginLeft:'13@s',
    marginTop:'25@s'
  },
  headerTitle: {
    // fontFamily:Avenir Next,
    fontSize: '18@s',
    fontStyle: 'normal',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '18@s',
    letterSpacing: '0.4@s',
    marginLeft:'15@s',
    marginTop:'35@s',
    color: colors.blackColor,
  },
});

export default ImageBackArrowHeader;
