import React, {useState} from 'react';
import {View, Text, TouchableOpacity, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors} from '../Utils/theme';

const DATA = [
  {
    id: '1',
    quantity: 100,
    price: 12,
    unit_price: 23,
  },
  {
    id: '2',
    quantity: 100,
    price: 12,
    unit_price: 23,
  },
  {
    id: '3',
    quantity: 100,
    price: 12,
    unit_price: 23,
  },
  {
    id: '4',
    quantity: 100,
    price: 12,
    unit_price: 23,
  },
  {
    id: '5',
    quantity: 100,
    price: 12,
    unit_price: 23,
  },
  {
    id: '6',
    quantity: 100,
    price: 12,
    unit_price: 23,
  },
];

const QuantityTable = ({setQuantityId, quantityId, quantityTable }) => {
  const [sliceArray, setSliceArray] = useState(quantityTable?.slice(0,6));
  const [flag , setflag] = useState(true)
 

  const sliceData = () => {
    setSliceArray(quantityTable);
    setflag(false);
  }

  const renderItem = ({item}) => {
    const quantityStyle = quantityId == item?.id ? {...styles.selectedQuantity} : {...styles.notSelectedQuantity};
    return (
      <TouchableOpacity activeOpacity={1} onPress = { () => setQuantityId(item?.id)} style={{...styles.tableItems, ...quantityStyle}}>
        <Text style={styles.priceText}>{item?.quantity}</Text>
        <Text style={styles.dollerPrice}>${item?.price}</Text>
        <Text style={styles.priceText}>{item?.unit_price}</Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerTitle}>Quantity</Text>
        <Text style={styles.headerTitle}>Price (HK$)</Text>
        <Text style={styles.headerTitle}>Unit price</Text>
      </View>
      <FlatList
        data={sliceArray}
        renderItem={renderItem}
        keyExtractor={item => item?.id}
      />
      {flag && <TouchableOpacity style={styles.tableBottom}>
        <Text style={styles.showMore} onPress={sliceData}>Show more quantity</Text>
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
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.5@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  dollerPrice: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.5@s',
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
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.greenColor,
  },
  tableBottom: {
    justifyContent: 'center',
    paddingHorizontal: '18@s',
    height: '50@s',
  },
  priceText: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
    width: '58@s',
  },
});

export default QuantityTable;