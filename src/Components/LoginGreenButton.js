import React from 'react';
import {View, Text, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import LeftArrow from '../Assests/Svgs/LeftArrow';
import {colors} from '../Utils/theme';

const LoginGreenButton = ({title, onPress, animation, backgroundColor = colors.greenColor}) => {
  return (
    <TouchableOpacity onPress={onPress} style={{...styles.buttonContainer, backgroundColor:backgroundColor}}>
      <Text style={styles.buttonText}> {animation ?
          <ActivityIndicator size="small" color="#FFFFFF" animating={animation} />
          : title
        }</Text>
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
