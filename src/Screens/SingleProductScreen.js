import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {BackArrowHeader,ImageSlider,CategoriesTitleHeader} from '../Components';
import {colors} from '../Utils/theme';

const SingleProductScreen = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <BackArrowHeader title={t('business_card')} />
      <ImageSlider/>
      <CategoriesTitleHeader/>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  flatlistContainer: {
    paddingBottom: '80@s',
  },
});

export default SingleProductScreen;
