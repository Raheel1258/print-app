import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {colors, fonts} from '../Utils/theme';

const AddressTextField = (props) => {
  const {childern, placeholder=null, title, keyboardType, placeholderTextColor=colors.lightBlackColor,secureTextEntry, error } = props;
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <TextInput
          {...props}
          style={styles.textInput}
          placeholder={placeholder}
          keyboardType={keyboardType}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={placeholderTextColor}
        /> 
      {error ? <Text style={styles.textError}>{error}</Text> : null }
      </View>
      <TouchableOpacity style={styles.iconWrapper}>
        {childern}
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // borderBottomWidth: 1,
    // borderBottomColor: colors.inputBorderColor,
    marginBottom:'20@s'
  },
  titleText: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  textError:  {
    fontSize: '10@s',
    fontStyle: 'normal',
    fontWeight: '600',
    fontStyle: 'normal',
    lineHeight: '22@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: 'red',
    marginBottom:'7@s',
  },
  textInput: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
  letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    width: '290@s',
    marginBottom: '5@s',
    paddingLeft: '0@s',
      borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
  },
  iconWrapper: {
    transform: [{rotate: '180deg'}],
    padding: '7@s',
  },
});

export default AddressTextField;
