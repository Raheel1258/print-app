import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList, ActivityIndicator} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import {colors,fonts} from '../Utils/theme';



const QuantityTable = ({selectedPriceChart, setSelectedPriceChart, priceChartAnimation, sliceArray, sliceData, flag }) => {
  const { t } = useTranslation();
  console.log("sliceArray of price into quantity compoentent" , sliceArray);

  const renderItem = ({item}) => {
    const quantityStyle = selectedPriceChart?._id == item?._id ? {...styles.selectedQuantity} : {...styles.notSelectedQuantity};
    return (
      <TouchableOpacity activeOpacity={1} onPress = { () => setSelectedPriceChart(item)} style={{...styles.tableItems, ...quantityStyle}}>
        <Text style={styles.priceText}>{item?.units}</Text>
        <Text style={styles.dollerPrice}>${item?.units * item?. pricePerUnit}</Text>
        <Text style={styles.priceText}>${item?.pricePerUnit}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <>
    {!priceChartAnimation ? <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerTitle}>{t('quantity_text')}</Text>
        <Text style={styles.headerTitle}>{t('price_HK')}</Text>
        <Text style={styles.headerTitle}>{t('unit_text')}</Text>
      </View>
      <FlatList
        data={sliceArray && sliceArray}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
        />
      {flag && <TouchableOpacity  onPress={()=>sliceData()} style={styles.tableBottom}>
        <Text style={styles.showMore}>{t('show_more')}</Text>
      </TouchableOpacity>}
    </View>: <View style={styles.loaderContainer}>
            <ActivityIndicator size="small" color="#000" animating={true} />
          </View>}
        </>
  );
};

const styles = ScaledSheet.create({
  selectedQuantity: {
    borderWidth: 2,
    borderColor: colors.greenColor,
  },
  notSelectedQuantity: {
    borderWidth: 1,
    borderTopWidth:0,
    borderColor: colors.innerBorderColor,
  },
  tableItems: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '18@s',
    height: '50@s',
  },
  tableContainer: {
    borderWidth: 1,
    borderColor: colors.innerBorderColor,
    marginHorizontal: '15@s',
    borderRadius: '10@s',
    marginVertical: '17@s',
  },
  headerTitle: {
    fontFamily:fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '13@s',
     letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  dollerPrice: {
    fontFamily:fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '13@s',
     letterSpacing: '0.2@s',
    textAlign: 'left',
    width: '78@s',
    color: colors.blackColor,
  },
  tableHeader: {
    borderBottomWidth: 1,
    borderBottomColor: colors.innerBorderColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '18@s',
    height: '50@s',
  },
  showMore: {
    fontFamily:fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '16@s',
     letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
  },
  tableBottom: {
    justifyContent: 'center',
    paddingHorizontal: '18@s',
    height: '50@s',
  },
  priceText: {
    fontFamily:fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '16@s',
     letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    width: '58@s',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default QuantityTable;