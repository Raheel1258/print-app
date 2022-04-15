import React from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {colors, fonts} from '../Utils/theme';

const AddressTextField = ({childern, placeholder=null, title, keyboardType, placeholderTextColor=colors.lightBlackColor }) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.titleText}>{title}</Text>
        <TextInput
          style={styles.textInput}
          placeholder={placeholder}
          keyboardType={keyboardType}
          placeholderTextColor={placeholderTextColor}
        />
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
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
    marginBottom:'20@s'
  },
  titleText: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  textInput: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.5@s',
    textAlign: 'left',
    color: colors.blackColor,
    width: '290@s',
    marginBottom: '5@s',
    paddingLeft: '0@s',
  },
  iconWrapper: {
    transform: [{rotate: '180deg'}],
    padding: '7@s',
  },
});

export default AddressTextField;