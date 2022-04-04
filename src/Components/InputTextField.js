import React from 'react';
import {View, Text, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import LeftArrow from '../Assests/Svgs/LeftArrow';
import {colors} from '../Utils/theme';

const InputTextField = (props) => {
  const {keyboardType,title,secureTextEntry,error} = props;
  return (
    <View style={styles.textInputContainer}>
      <Text style={styles.textInputTitle}>{title}</Text>
      <TextInput {...props} style={styles.textInput} keyboardType={keyboardType} secureTextEntry={secureTextEntry} />
      {error ? <Text style={styles.textError}>{error}</Text> : null }
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
    marginBottom:'7@s',
  },

  textInput: {
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
    paddingBottom: '1@s',
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '400',
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
  }
});

export default InputTextField;
