import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import LeftArrow from '../Assests/Svgs/LeftArrow';
import {colors} from '../Utils/theme';

const BackArrowHeader = () => {
  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity style={styles.headerArrow}>
      <LeftArrow />
      </TouchableOpacity>
      <Text style={styles.headerText}>Sign in</Text>
      <View></View>
    </View>
  );
};

const styles = ScaledSheet.create({
  headerContainer: {
    backgroundColor: colors.whiteColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '15@s',
    paddingTop:'15@s',
    paddingBottom:'3@s',
    borderBottomWidth:9,
    borderBottomColor:colors.offWhiteColor,
  },
  headerText: {
    // fontFamily: Avenir Next,
    fontSize: '18@s',
    fontStyle: 'normal',
    fontWeight: '900',
    lineHeight: '20@s',
    letterSpacing: '0.6@s',
    textAlign: 'center',
    color:colors.blackColor,
  },
  headerArrow:{
    padding:'7@s',
  }
});

export default BackArrowHeader;
