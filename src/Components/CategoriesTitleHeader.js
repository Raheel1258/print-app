import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';

import { colors, fonts } from '../Utils/theme';

const CategoriesTitleHeader = ({ title, description, onPress, Children, justifyContent = 'space-between',color=colors.blackColor, fontFamily=fonts.avenir_bold, flagPress=false }) => {
  return (
    <View style={{...styles.headerContainer, justifyContent:justifyContent}}>
      <View style={styles.infoIconContainer}>
     
        {
          flagPress ?
          <TouchableOpacity onPress={onPress}>
          <Text  style={{...styles.headerText, color:color, fontFamily:fontFamily}}>{title}</Text>
          </TouchableOpacity>: 
           <Text  style={{...styles.headerText, color:color, fontFamily:fontFamily}}>{title}</Text>
        }
        {Children}
      </View>
      <TouchableOpacity onPress={onPress} style={styles.touchableText}><Text style={styles.headerRightText}>{description}</Text></TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  headerContainer: {
    backgroundColor: colors.offWhiteColor,
    width: '100%',
    height: '60@s',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: '15@s',
  },
  headerText: {
    fontFamily: fonts.avenir_bold,
    fontSize: '14@s',
    fontStyle: 'normal',
    lineHeight: '20@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginRight: '10@s',
  },
  headerRightText: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '17@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
    marginTop: '8@s',
  },
  touchableText: {
    paddingVertical: '7@s',
  },
  infoIconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '5@s',
  }
});

export default CategoriesTitleHeader;
