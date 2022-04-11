import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors,fonts} from '../Utils/theme';

const PreferredLanguageBottomSheet = () => {
  return (
   <View>
       <Text>languages</Text>
   </View>
  );
};

const styles = ScaledSheet.create({
    buttonContainer: {
    backgroundColor:colors.greenColor,
    borderRadius:'25@s',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
  },
  buttonText: {
    fontFamily:fonts.avenir_bold,
    fontSize: '13@s',
    fontStyle: 'normal',
    // fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '22@s',
    letterSpacing: '0.5@s',
    color: colors.whiteColor,
  },
});

export default PreferredLanguageBottomSheet;
