import React, { Children } from 'react';
import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import BackArrow from '../Assests/Svgs/BackArrow';
import {colors,fonts} from '../Utils/theme';

const ImageBackArrowHeader = ({goBack,title,description,Children, image, borderBottomWidth=9}) => {
  const newImage = image ? {uri:image}:Children
  return (
    <View style={{...styles.container,borderBottomWidth:borderBottomWidth}}>
    <ImageBackground
     transition={false}
      resizeMode="cover"
      style={styles.headerImage}
      source={image ? {uri: image}: Children}>
      <TouchableOpacity onPress={goBack} style={styles.headerArrow}>
        <BackArrow />
      </TouchableOpacity>
      <Text style={styles.headerTitle}>{title}</Text>
      <Text style={styles.headerDescription}>{description}</Text>
    </ImageBackground>
    </View>
  );
};

const styles = ScaledSheet.create({
  container:{
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
    marginLeft:'11@s',
    marginTop:'25@s',
  },
  headerTitle: {
fontFamily:fonts.avenir_next,
    fontSize: '18@s',
    fontStyle: 'normal',
    // fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '18@s',
      letterSpacing: '0.2@s',
    marginLeft:'15@s',
    marginTop:'35@s',
    color: colors.blackColor,
  },
  headerDescription:{
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '500',
    marginLeft:'15@s',
    fontStyle: 'normal',
    lineHeight: '17@s',
      letterSpacing: '0.2@s',
    marginTop:'3@s',
    color: colors.blackColor,
  }
});

export default ImageBackArrowHeader;
