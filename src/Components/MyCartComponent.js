import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {colors, fonts} from '../Utils/theme';
import {useTranslation} from 'react-i18next';

const MyCartComponent = ({
  image,
  index,
  length,
  fontFamily = fonts.avenir_bold,
  edit = false,
  remove = false,
  item,
  navigate,
  handleRemoveProduct,
  handleEditProduct,
}) => {
  const {t} = useTranslation();
  return (
    <View
      style={{
        ...styles.container,
        borderBottomWidth: index + 1 === length ? 0 : 1,
      }}>
      <Image
        transition={false}
        style={styles.cardImage}
        source={{uri: image}}
      />
      <View>
        <Text
          numberOfLines={2}
          // style={{...styles.cardTitle, fontFamily: fontFamily}}
          style={styles.cardTitle}>
          {item?.category?.name}
        </Text>
        {/* <Text style={styles.cardTitle}>{item?.category?.pricePerHunderd.substr(5,7)}</Text> */}
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>{t('quantity_text')}</Text>
          <Text style={styles.quantityText} numberOfLines={1}>
            {item?.priceChart?.units}
          </Text>
        </View>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantityText}>{t('size')}</Text>
          <Text style={styles.quantityText} numberOfLines={1}>
            {item?.size?.name}
          </Text>
        </View>
        {item?.paperType ? (
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityText}>{t('paper_type_product')}</Text>
            <Text style={styles.paperTypeDes} numberOfLines={1}>
              {item?.paperType}
            </Text>
          </View>
        ) : (
          item?.category?.paperType && (
            <View style={styles.quantityContainer}>
              <Text style={styles.quantityText}>{t('paper_type_product')}</Text>
              <Text style={styles.paperTypeDes} numberOfLines={1}>
                {item?.category?.paperType}
              </Text>
            </View>
          )
        )}
        {item?.corner?.cornerName && (
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityText}>{t('corner_product')} </Text>
            <Text style={styles.quantityText} numberOfLines={1}>
              {item?.corner?.cornerName && item?.corner?.cornerName}
            </Text>
          </View>
        )}

        {item?.folding && (
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityText}>{t('folding_product')} </Text>
            <Text style={styles.quantityText} numberOfLines={1}>
              {t('halffold_product')}
            </Text>
          </View>
        )}

        {item?.cut && (
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityText}>{t('cut')} </Text>
            <Text style={styles.quantityText} numberOfLines={1}>
              {item?.cut?.cutName}
            </Text>
          </View>
        )}

        {item?.window && (
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityText}>{t('window')} </Text>
            <Text style={styles.quantityText} numberOfLines={1}>
              {item?.window?.windowName}
            </Text>
          </View>
        )}

        {item?.finishing && (
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityText}>{t('finishing')} </Text>
            <Text style={styles.quantityText} numberOfLines={1}>
              {item?.finishing}
            </Text>
          </View>
        )}

        {item?.priceChart?.coverPageNumber && (
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityText}>
              {t('coverPageNumber_product')}
            </Text>
            <Text style={styles.quantityText} numberOfLines={1}>
              {item?.priceChart?.coverPageNumber}
            </Text>
          </View>
        )}

        {item?.priceChart?.innerPageNumber && (
          <View style={styles.quantityContainer}>
            <Text style={styles.quantityText}>
              {t('innerPageNumber_product')}
            </Text>
            <Text style={styles.quantityText} numberOfLines={1}>
              {item?.priceChart?.innerPageNumber}
            </Text>
          </View>
        )}

        {edit && remove && (
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => handleEditProduct(item)}
              style={styles.paddingWrapper}>
              <Text style={styles.editText}>{t('edit_product')}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => handleRemoveProduct(item?._id)}
              style={styles.paddingWrapper}>
              <Text style={styles.editText}>{t('remove_product')}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flexDirection: 'row',
    marginHorizontal: '14@s',
    borderBottomColor: colors.innerBorderColor,
    borderBottomWidth: 1,
    marginTop: '20@s',
    paddingBottom: '14@s',
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardImage: {
    width: '110@s',
    height: '80@s',
    borderRadius: '10@s',
    marginRight: '10@s',
  },
  cardTitle: {
    fontFamily: fonts.avenir_bold,
    fontSize: '13@s',
    fontStyle: 'normal',
    lineHeight: '20@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    width: '200@s',
  },
  OrderCardTitle: {
    fontFamily: fonts.avenir_regular,
    fontSize: '14@s',
    fontStyle: 'normal',
    lineHeight: '20@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  quantityText: {
    fontFamily: fonts.avenir_light,
    fontSize: '11.5@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginRight: '2@s',
  },
  paperTypeDes: {
    fontFamily: fonts.avenir_light,
    fontSize: '11.5@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    width: '145@s',
  },
  editText: {
    fontFamily: fonts.avenir_light,
    fontSize: '11.5@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
    marginRight: '20@s',
    marginTop: '5@s',
    marginBottom: '10@s',
  },
  paddingWrapper: {
    padding: '2@s',
  },
});

export default MyCartComponent;
