import React from 'react';
import {View, Text,TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors} from '../Utils/theme';

const QuantityTable = () => {
  return (
    <View style={styles.tableContainer}>
      <View style={styles.tableHeader}>
        <Text style={styles.headerTitle}>Quantity</Text>
        <Text style={styles.headerTitle}>Price (HK$)</Text>
        <Text style={styles.headerTitle}>Unit price</Text>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.priceText}>100</Text>
        <Text style={styles.dollerPrice}>$68</Text>
        <Text style={styles.priceText}>$0.5</Text>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.priceText}>200</Text>
        <Text style={styles.dollerPrice}>$108</Text>
        <Text style={styles.priceText}>$0.5</Text>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.priceText}>300</Text>
        <Text style={styles.dollerPrice}>$158</Text>
        <Text style={styles.priceText}>$0.5</Text>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.priceText}>400</Text>
        <Text style={styles.dollerPrice}>$210</Text>
        <Text style={styles.priceText}>$0.5</Text>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.priceText}>500</Text>
        <Text style={styles.dollerPrice}>$90</Text>
        <Text style={styles.priceText}>$0.5</Text>
      </View>
      <View style={styles.tableHeader}>
        <Text style={styles.priceText}>600</Text>
        <Text style={styles.dollerPrice}>$90</Text>
        <Text style={styles.priceText}>$0.5</Text>
      </View>
      <TouchableOpacity style={styles.tableBottom}>
        <Text style={styles.showMore}>Show more quantity</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = ScaledSheet.create({
  tableContainer: {
    borderWidth: 1,
    borderColor: colors.innerBorderColor,
    marginHorizontal: '15@s',
    borderRadius: '10@s',
    marginVertical:'17@s',
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
  dollerPrice:{
  // fontFamily:Avenir LT Std,
  fontSize: '12@s',
  fontStyle: 'normal',
  fontWeight: '800',
  fontStyle: 'normal',
  lineHeight: '13@s',
  letterSpacing: '0.5@s',
  textAlign: 'left',
  width:'60@s',
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
  tableBottom:{
    justifyContent:'center',
    paddingHorizontal: '18@s',
    height: '50@s',
  },
  priceText:{
         // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor, 
    width:'60@s',
  }
});

export default QuantityTable;
