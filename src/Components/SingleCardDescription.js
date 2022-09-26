import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';
import {colors, fonts} from '../Utils/theme';

import i18n from 'i18next'

const SingleCardDescription = ({item}) => {
  const {t} = useTranslation();
  const flag =
    item?.title == 'BUSINESS_CARD' ||
    item?.title == 'BOOKLET' ||
    item?.title == 'STICKERS_LABEL'
      ? true
      : false;
  return (
    <View style={styles.paddingContainer}>
      <Text style={styles.productTitle} numberOfLines={1}>
        {i18n.language == "en" ? item?.category?.name : item?.category?.name_chi}
      </Text>
      <Text style={styles.productPrice} numberOfLines={1}>
        {i18n.language == "en" ? item?.category?.pricePerHunderd : item?.category?.pricePerHunderd_chi }
      </Text>
      <Text style={styles.productDescription}>
        {i18n.language == "en" ?item?.category?.description : item?.category?.description_chi}
      </Text>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryType}>
          {flag ? t('paper_type_product') : t('paper_product')}
        </Text>
        <Text style={styles.categoryDescription}>
          {i18n.language == "en" ? item?.category?.paperType : item?.category?.paperType_chi}
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryType}>{t('lead_time_product')}</Text>
        <Text style={styles.categoryDescription} numberOfLines={1}>
          {i18n.language == "en" ? item?.category?.leadTime : item?.category?.leadTime_chi}
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryType}>{t('colour_product')}</Text>
        <Text style={styles.categoryDescription} numberOfLines={1}>
          {i18n.language == "en" ? item?.category?.colour : item?.category?.colour_chi}
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryType}>{t('size_product')}</Text>
        <Text style={styles.categoryDescription} numberOfLines={1}>
          {i18n.language == "en" ? item?.category?.Sizes :  item?.category?.Sizes_chi}
        </Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  paddingContainer: {
    paddingHorizontal: '15@s',
    marginTop: '10@s',
  },
  productTitle: {
    fontFamily: fonts.avenir_next,
    fontSize: '18@s',
    fontStyle: 'normal',
    lineHeight: '24@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  productPrice: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
    marginTop: '8@s',
  },
  productDescription: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginVertical: '7@s',
  },
  categoryType: {
    fontFamily: fonts.avenir_bold,
    fontSize: '13@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    width: '100@s',
  },
  categoryDescription: {
    fontFamily: fonts.avenir_regular,
    width: '210@s',
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '14@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4@s',
  },
});

export default SingleCardDescription;
