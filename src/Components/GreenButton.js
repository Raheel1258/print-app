import React from 'react';
import { Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import { colors, fonts } from '../Utils/theme';

const GreenButton = ({ title, onPress = () => { }, animation = false, backgroundColor = colors.greenColor, color = colors.whiteColor, buttonHeight = 56, borderWidth = null, borderColor = colors.smokeWhiteColor }) => {
  return (
    <TouchableOpacity disabled={animation} onPress={onPress} style={{ ...styles.buttonContainer, backgroundColor: backgroundColor, height: buttonHeight, borderWidth: borderWidth, borderColor: borderColor }}>
      <Text style={{ ...styles.buttonText, color: color }}> {animation ?
        <ActivityIndicator size="small" color="#FFFFFF" animating={animation} />
        : title
      }</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  buttonContainer: {
    backgroundColor: colors.greenColor,
    borderRadius: '25@s',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    fontFamily: fonts.avenir_bold,
    fontSize: '13@s',
    fontStyle: 'normal',
    // fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '22@s',
    letterSpacing: '0.2@s',
    color: colors.whiteColor,
  },
});

export default GreenButton;
