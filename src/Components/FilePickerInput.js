import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import DocumentPicker, {isInProgress} from 'react-native-document-picker';
import {useTranslation} from 'react-i18next';

import {colors,fonts} from '../Utils/theme';

const FilePickerInput = () => {
  const {t} = useTranslation();
  const [result, setResult] = useState(undefined);
  useEffect(() => {
    console.log(JSON.stringify(result, null, 2));
  }, [result]);

  const handleError = err => {
    if (DocumentPicker.isCancel(err)) {
      console.warn('cancelled');
      // User cancelled the picker, exit any dialogs or menus and move on
    } else if (isInProgress(err)) {
      console.warn(
        'multiple pickers were opened, only the last will be considered',
      );
    } else {
      throw err;
    }
  };
  const removeHandler = () => {
    setResult(undefined);
  };
  return (
    <View>
      {result?.length == undefined && (
        <Text style={styles.fileAdded}>{t('no_file_added')}</Text>
      )}
      {result?.length !== undefined && (
        <Text selectable>{JSON.stringify(result[0]?.name, null, 2)}</Text>
      )}
      {result?.length !== undefined && (
        <TouchableOpacity onPress={removeHandler}>
          <Text style={styles.browseText}>{t('remove_text')}</Text>
        </TouchableOpacity>
      )}
      <View style={styles.bottomBorder} />
      <TouchableOpacity
        onPress={async () => {
          try {
            const pickerResult = await DocumentPicker.pickSingle({
              presentationStyle: 'fullScreen',
              copyTo: 'cachesDirectory',
            });
            setResult([pickerResult]);
          } catch (e) {
            handleError(e);
          }
        }}>
        <Text style={styles.browseText}>{t('browse_text')}</Text>
        {/* <Text selectable>{JSON.stringify(result[0]?.name, null, 2)}</Text> */}
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  fileAdded: {
    fontFamily:fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    lineHeight: '16@s',
    letterSpacing: '0.4@s',
    textAlign: 'center',
    color: colors.lightBlackColor,
    marginBottom: '35@s',
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderColor: colors.cardBorderColor,
  },
  browseText: {
    fontFamily:fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    lineHeight: '16@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.greenColor,
    padding: '8@s',
    width: '25%',
    paddingLeft:'0@s'
  },
});

export default FilePickerInput;
