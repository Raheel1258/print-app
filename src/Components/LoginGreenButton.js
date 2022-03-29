import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ScaledSheet} from 'react-native-size-matters';

import LeftArrow from '../Assests/Svgs/LeftArrow';
import {colors} from '../Utils/theme';

const LoginGreenButton = ({handleLoginPress}) => {
  return (
    <TouchableOpacity onPress={handleLoginPress} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>Log In</Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
    buttonContainer: {
    backgroundColor:colors.greenColor,
    borderRadius:'25@s',
    justifyContent:'center',
    alignItems:'center',
    width:'100%',
    height:'52@s',
  },
  buttonText: {
    // fontFamily:Avenir LT Std,
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '22@s',
    letterSpacing: '0.5@s',
    color: colors.whiteColor,
  },
});

export default LoginGreenButton;
