import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import {colors,fonts} from '../Utils/theme';



const QuantityTable = ({setQuantityId, quantityId, quantityTable }) => {
  const { t } = useTranslation();
  const [sliceArray, setSliceArray] = useState(quantityTable?.slice(0,6));
  const [flag , setflag] = useState(true)
 

  const sliceData = () => {
    setSliceArray(quantityTable);
    setflag(false);
  }

  const renderItem = ({item}) => {
    const quantityStyle = quantityId == item?._id ? {...styles.selectedQuantity} : {...styles.notSelectedQuantity};
    return (
      <TouchableOpacity activeOpacity={1} onPress = { () => setQuantityId(item?._id)} style={{...styles.tableItems, ...quantityStyle}}>
        <Text style={styles.priceText}>{item?.quantity}</Text>
        <Text style={styles.dollerPrice}>${item?.quantity * item?.unitPrice}</Text>
        <Text style={styles.priceText}>${item?.unitPrice}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerTitle}>{t('quantity_text')}</Text>
        <Text style={styles.headerTitle}>{t('price_HK')}</Text>
        <Text style={styles.headerTitle}>{t('unit_text')}</Text>
      </View>
      <FlatList
        data={sliceArray}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
      {flag && <TouchableOpacity  onPress={sliceData} style={styles.tableBottom}>
        <Text style={styles.showMore}>{t('show_more')}</Text>
      </TouchableOpacity>}
    </View>
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
});

export default QuantityTable;