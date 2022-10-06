import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';

import BackArrow from '../Assests/Svgs/BackArrow';
import LeftArrow from '../Assests/Svgs/LeftArrow';
import { colors } from '../Utils/theme';
import { fonts } from '../Utils/theme';

const BackArrowHeader = ({ title, goBack, arrow = true, borderBottomWidth = 9 }) => {
  return (
    <View style={{ ...styles.headerContainer, height: arrow ? 65 : 70, borderBottomWidth: borderBottomWidth }}>
      <TouchableOpacity onPress={goBack} style={styles.headerArrow}>
        {arrow ? <LeftArrow /> : <BackArrow />}
      </TouchableOpacity>
      <Text style={styles.headerText}>{title}</Text>
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
    paddingTop: '15@s',
    paddingBottom: '3@s',
    borderBottomWidth: 9,
    borderBottomColor: colors.offWhiteColor,
  },

  headerText: {
    fontFamily: fonts.avenir_next,
    fontSize: '18@s',
    fontStyle: 'normal',
    lineHeight: '24@s',
    letterSpacing: '0.2@s',
    textAlign: 'center',
    color: colors.blackColor,
    marginLeft: -25,
  },
  headerArrow: {
    padding: '7@s',
  },
});

export default BackArrowHeader;
