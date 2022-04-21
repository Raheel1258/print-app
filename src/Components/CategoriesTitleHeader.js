import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors,fonts} from '../Utils/theme';

const CategoriesTitleHeader = ({title,description,onPress}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
     <TouchableOpacity onPress={onPress} style={styles.touchableText}><Text style={styles.headerRightText}>{description}</Text></TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  headerContainer: {
    backgroundColor: colors.offWhiteColor,
    width:'100%',
    height:'60@s',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
paddingHorizontal:'17@s',
  },
  headerText: {
    fontFamily:fonts.avenir_bold,
    fontSize: '14@s',
    fontStyle: 'normal',
    // fontWeight: '800',
    lineHeight: '15@s',
    letterSpacing: '0.6@s',
    textAlign: 'left',
    color:colors.blackColor,
    marginTop:'8@s',
  },
  headerRightText:{
    fontFamily:fonts.avenir_regular,
      fontSize: '12@s',
      fontStyle: 'normal',
      // fontWeight: '400',
      lineHeight: '15@s',
      letterSpacing: '0.6@s',
      textAlign: 'left',
      color:colors.greenColor,
      marginTop:'8@s',
  },
  touchableText:{
    paddingVertical:'7@s',
  }
});

export default CategoriesTitleHeader;
