import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors,fonts} from '../Utils/theme';

const InputTextField = (props) => {
  const {keyboardType,title,secureTextEntry,error,placeholder=null} = props;
  return (
    <View style={styles.textInputContainer}>
      <Text style={placeholder ? styles.placeholderTitle : styles.textInputTitle}>{title}</Text>
      <TextInput {...props} style={placeholder ? styles.placeholderStyle : styles.textInput} keyboardType={keyboardType} secureTextEntry={secureTextEntry} placeholder={placeholder}/>
      {error ? <Text style={styles.textError}>{error}</Text> : null }
    </View>
  );
};

const styles = ScaledSheet.create({
  textInputContainer: {
    marginTop: '5@s',
  },
  textInputTitle: {
    fontFamily:fonts.avenir_regular,
    fontSize: '13@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '21@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginBottom:'7@s',
  },
  placeholderTitle:{
    fontFamily:fonts.avenir_regular,
    fontSize: '13@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '21@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginBottom:-4,
  },
  textInput: {
    fontFamily:fonts.avenir_regular,
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
    paddingBottom: '1@s',
    fontSize: '13@s',
    fontStyle: 'normal',
    fontStyle: 'normal',
    lineHeight: '14@s',
    color: colors.blackColor,
    paddingLeft: '0@s',
    marginBottom:'10@s',
  },
  textError:  {
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '22@s',
    letterSpacing: '0.5@s',
    textAlign: 'left',
    color: 'red',
    marginBottom:'7@s',
  },
  placeholderStyle:{
    fontFamily:fonts.avenir_regular,
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
    paddingBottom: '1@s',
    fontSize: '13@s',
    fontStyle: 'normal',
    fontStyle: 'normal',
    lineHeight: '14@s',
    color: colors.lightBlackColor,
    paddingBottom:'12@s',
    paddingLeft: '0@s',
    marginBottom:'10@s',
  }
});

export default InputTextField;
