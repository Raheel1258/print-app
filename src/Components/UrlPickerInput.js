import React from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {colors} from '../Utils/theme';

const UrlPickerInput = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.fileUrl}>{t('file_url')}</Text>
      <TextInput
        style={styles.textInput}
      />
     <TouchableOpacity><Text style={styles.addMore}>{t('add_more')}</Text></TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginHorizontal: '6@s',
  },
  textInput: {
    borderBottomWidth: 1,
    borderColor: colors.inputBorderColor,
    color: colors.lightBlackColor,
    paddingLeft: 0,
  },
  fileUrl: {
    // fontFamily: Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '800',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  addMore: {
    // fontFamily: Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '15@s',
    letterSpacing: '0.5@s',
    textAlign: 'left',
    color: colors.greenColor,
    paddingVertical: '8@s',
    width: '40%',
  },
});

export default UrlPickerInput;
