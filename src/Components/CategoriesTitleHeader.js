import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import LeftArrow from '../Assests/Svgs/LeftArrow';
import {colors} from '../Utils/theme';

const CategoriesTitleHeader = ({title,description}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
      <Text style={styles.headerRightText}>{description}</Text>
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
    // fontFamily: Avenir LT Std,
    fontSize: '14@s',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: '15@s',
    letterSpacing: '0.6@s',
    textAlign: 'left',
    color:colors.blackColor,
    marginTop:'8@s',
  },
  headerRightText:{
      // fontFamily: Avenir LT Std,
      fontSize: '12@s',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: '15@s',
      letterSpacing: '0.6@s',
      textAlign: 'left',
      color:colors.greenColor,
      marginTop:'8@s',
  }
});

export default CategoriesTitleHeader;
