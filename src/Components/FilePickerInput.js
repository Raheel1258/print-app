import React, {useEffect, useState, useCallback} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import DocumentPicker, {isInProgress, pick} from 'react-native-document-picker';
import {useTranslation} from 'react-i18next';

import {colors,fonts} from '../Utils/theme';

const FilePickerInput = ({result,setResult}) => {
  const {t} = useTranslation();
  // useEffect(() => {
  //   console.log(JSON.stringify(result, null, 2));
  // }, [result]);
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

  const handleDocumentSelection = useCallback(async () => {
    try {
      const pickerResult = await DocumentPicker.pickSingle({
        presentationStyle: 'fullScreen',
        copyTo: 'cachesDirectory',
      });
      
      setResult((prev)=>{
        return [...prev, pickerResult]
      });
    } catch (e) {
      handleError(e);
    }
  },[])

  const removeHandler = (index) => {
    setResult((prev)=>{
      return prev.filter((x,i) => i!=index)
    });
  };
  return (
    <View>
      {result?.length == 0 && (
        <Text style={styles.noFileAdded}>{t('no_file_added')}</Text>
      )}
      {result && result.map((file, index) => (
        <View key={index}>
        <Text
        key={index}
        style={styles.fileAdded}
        numberOfLines={1}
        ellipsizeMode={'middle'}>
        {file?.name}
        </Text>
        <TouchableOpacity onPress={()=>removeHandler(index)}>
          <Text style={styles.browseText}>{t('remove_text')}</Text>
        </TouchableOpacity>
        <View style={styles.bottomBorder} />
        </View>
      ))}
      {result?.length == 0 && <View style={styles.bottomBorder} />}
      <TouchableOpacity
        onPress={handleDocumentSelection}>
        {/* <Text style={styles.browseText}>{t('browse_text')}</Text> */}
       {result?.length < 1  ? <Text style={styles.browseText}>{t('browse_text')}</Text> : <Text style={styles.browseText}>{t('add_more')}</Text>}
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  fileAdded: {
    fontFamily:fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    // textAlign: 'center',
    color: colors.blackColor,
    marginBottom: '0@s',
    marginTop:'15@s',
  },
  noFileAdded:{
    fontFamily:fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
     letterSpacing: '0.2@s',
    textAlign: 'center',
    color: colors.lightBlackColor,
    marginBottom: '15@s',
    marginTop:'10@s',
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
     letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
    padding: '8@s',
    width: '40%',
    paddingLeft:'0@s'
  },
});

export default FilePickerInput;
