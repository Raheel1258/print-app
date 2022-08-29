import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';
import {colors, fonts} from '../Utils/theme';

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
        {item?.category?.name}
      </Text>
      <Text style={styles.productPrice} numberOfLines={1}>
        {item?.category?.pricePerHunderd}
      </Text>
      <Text style={styles.productDescription}>
        {item?.category?.description}
      </Text>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryType}>
          {flag ? t('paper_type_product') : t('paper_product')}
        </Text>
        <Text style={styles.categoryDescription}>
          {item?.category?.paperType}
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryType}>{t('lead_time_product')}</Text>
        <Text style={styles.categoryDescription} numberOfLines={1}>
          {item?.category?.leadTime}
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryType}>{t('colour_product')}</Text>
        <Text style={styles.categoryDescription} numberOfLines={1}>
          {item?.category?.colour}
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryType}>{t('size_product')}</Text>
        <Text style={styles.categoryDescription} numberOfLines={1}>
          {item?.category?.Sizes}
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
