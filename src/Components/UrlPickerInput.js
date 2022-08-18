import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { Formik, FieldArray } from 'formik';
import { colors, fonts } from '../Utils/theme';

import CloseIcon from '../Assests/Svgs/CloseIcon';


const UrlPickerInput = ({ title, refRBSheet, handleAddFileUrl, initialValuesAddUrl }) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValuesAddUrl} onSubmit={(values) => handleAddFileUrl(values)}>
        {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
          return <>
            <View style={styles.headerContainer}>
              <Text style={styles.headerTitle}>{title}</Text>
              <TouchableOpacity
                onPress={() => { refRBSheet.current.close(), handleSubmit() }}
                style={styles.iconWrapper}>
                <CloseIcon />
              </TouchableOpacity>
            </View>
            <FieldArray name='url'>
              {({ remove, push }) => (
                <>
                  <Text style={styles.fileUrl}>{t('file_url')}</Text>
                  {values.url.length > 0 && values.url.map((single_url, i) => <>
                    <TextInput
                      style={styles.textInput}
                      value={single_url.url_link}
                      keyboardType="default"
                      secureTextEntry={false}
                      onChangeText={handleChange(`url.${i}.url_link`)}
                    />
                    {values.url.length > 1 && <TouchableOpacity onPress={() => remove(i)}><Text style={styles.addMore}>{t('remove_text')}</Text></TouchableOpacity>}
                  </>)}
                  <TouchableOpacity onPress={() => push({ url_link: '' })}><Text style={styles.addMore}>{t('add_more')}</Text></TouchableOpacity>
                </>
              )
              }
            </FieldArray>
          </>
        }}
      </Formik>
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
    marginTop: '30@s',
    paddingBottom: '8@s',
    color: colors.blackColor,
  },
  fileUrl: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '800',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  addMore: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    lineHeight: '15@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
    paddingVertical: '8@s',
    width: '40%',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '35@s',
  },
  headerTitle: {
    fontFamily: fonts.avenir_bold,
    fontSize: '14@s',
    fontStyle: 'normal',
    lineHeight: '14@s',
    letterSpacing: '0.2@s',
    color: colors.blackColor,
    marginLeft: '-3@s',
  },
  iconWrapper: {
    padding: '7@s',
  },
});

export default UrlPickerInput;
