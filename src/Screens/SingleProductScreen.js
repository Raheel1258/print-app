import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {
  BackArrowHeader,
  ImageSlider,
  CategoriesTitleHeader,
  CardSizeComponent,
  SingleCardDescription,
} from '../Components';
import {colors} from '../Utils/theme';

const SingleProductScreen = () => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <BackArrowHeader title={t('business_card')} />
      <ScrollView style={styles.marginContainer}>
        <View style={styles.sliderWrapper}>
          <ImageSlider />
          <SingleCardDescription />
        </View>
        <CategoriesTitleHeader title={t('choose_size')} />
        <View style={styles.cardsContainer}>
          <CardSizeComponent
            textWidth={100}
            cardWidth={135}
            cardHeight={80}
            borderColor={colors.gradientGreenColor}
            dotColor={colors.darkGreenColor}
            cardStandard={t('standard_text')}
            cardDimensions={t('first_dimension')}
          />
          <CardSizeComponent
            textWidth={100}
            cardWidth={135}
            cardHeight={80}
            borderColor={colors.gradientBlueColor}
            dotColor={colors.lightBlueColor}
            cardStandard={t('shortened_text')}
            cardDimensions={t('second_dimension')}
          />
          <CardSizeComponent
            textWidth={60}
            cardWidth={100}
            cardHeight={100}
            borderColor={colors.lightOrangeColor}
            dotColor={colors.orangeColor}
            cardStandard={t('square_text')}
            cardDimensions={t('third_dimension')}
          />
        </View>
        <CategoriesTitleHeader title={t('choose_corner')} />
      </ScrollView>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  marginContainer: {
    marginBottom: '75@s',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: '12@s',
  },
  sliderWrapper: {
    marginBottom: '15@s',
  },
});

export default SingleProductScreen;
