import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import LeftArrow from '../Assests/Svgs/LeftArrow';
import {colors} from '../Utils/theme';

const SigninTextField = ({keyboardType,title,secureTextEntry , handleChange}) => {
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputTitle}>{title}</Text>
      <TextInput style={styles.textInput} keyboardType={keyboardType} secureTextEntry={secureTextEntry} onChangeText={(text) => handleChange(`${title}`, text)}/>
    </View>
  );
};

const styles = ScaledSheet.create({
  textInputContainer: {
    marginTop: '5@s',
  },
  textInputTitle: {
    // fontFamily:Avenir LT Std,
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '22@s',
    letterSpacing: '0.5@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginBottom:'5@s',
  },
  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
    paddingBottom: '0@s',
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '18@s',
    color: colors.blackColor,
    paddingLeft: '0@s',
    marginBottom:'10@s',
  },
});

export default SigninTextField;
