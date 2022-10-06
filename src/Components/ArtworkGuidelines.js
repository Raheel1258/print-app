import React from 'react';
import { View, Text } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import { colors, fonts } from '../Utils/theme';

const ArtworkGuidelines = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.designFileContainer}>
      <Text style={styles.heading}>
        {t('upload_design_file')}
      </Text>
      <Text style={styles.paragraph}>
        {t('file_compile')}{' '}
        <Text style={styles.greenText}>{t('artwork_guidelines')}</Text>
      </Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  designFileContainer: {
    backgroundColor: colors.offWhiteColor,
    padding: '10@s',
    paddingVertical: '13@s',
    marginTop: '23%'
  },
  heading: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  paragraph: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginTop: '10@s'
  },
  greenText: {
    color: colors.greenColor,
  }
});

export default ArtworkGuidelines;
