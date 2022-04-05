import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import LeftArrow from '../Assests/Svgs/LeftArrow';
import {colors} from '../Utils/theme';

const CategoriesTitleHeader = ({title, goBack}) => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>{title}</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  headerContainer: {
    backgroundColor: colors.offWhiteColor,
    width:'100%',
    height:'60@s',
    justifyContent:'center',
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
    marginLeft:'18@s',
    marginTop:'7@s'
  },
});

export default CategoriesTitleHeader;
