import React from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { Formik, FieldArray } from 'formik';
import { colors, fonts } from '../Utils/theme';


const UrlPickerInput = ({ initialValuesAddUrl }) => {
  const { t } = useTranslation();

  const handleAdd = (values) => {
    console.log("xyz", values)

  }

  return (
    <View style={styles.container}>
      <Formik initialValues={initialValuesAddUrl} onSubmit={(values) => handleAdd(values)}>
        {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
          return <>
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
                    {i !== 0 && <TouchableOpacity onPress={() => remove(i)}><Text style={styles.addMore}>Remove</Text></TouchableOpacity>}
                  </>)}
                  <TouchableOpacity onPress={() => push({ url_link: '' })}><Text style={styles.addMore}>{t('add_more')}</Text></TouchableOpacity>
                </>
              )
              }
            </FieldArray>
            <Text onPress={handleSubmit}>Add All</Text>
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
    paddingBottom:'8@s'
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
    letterSpacing: '0.5@s',
    textAlign: 'left',
    color: colors.greenColor,
    paddingVertical: '8@s',
    width: '40%',
  },
});

export default UrlPickerInput;
