import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';
import { handleOrderStatus } from '../Utils/helperFunctions';

import LeftArrow from '../Assests/Svgs/LeftArrow';
import CalendarIcon from '../Assests/Svgs/CalendarIcon';
import DollarIcon from '../Assests/Svgs/DollarIcon';
import {colors, fonts} from '../Utils/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const OrdersComponent = ({orderNotify,navigate, item}) => {
  const {t} = useTranslation();

  // const handleStatus = (orderNotify) => {
  //   if(orderNotify == "ORDER_RECIEVED"){
  //     return "Order recieved"
  //   }
  //   else if(orderNotify=="COMPLETED"){
  //     return "Order completed";
  //   }
  //   else if(orderNotify=="CANCELLED"){
  //     return "Cancelled";
  //   }
  //   else if(orderNotify=="OUT_FOR_DELIVERY"){
  //     return "Out for delivery";
  //   }
  //   else if(orderNotify=="READY_FOR_PICKUP"){
  //     return "Ready for pickup";
  //   }
  //   else{
  //     return "Printing in process" ;
  //   }

  // }
  

  
  return (
    <TouchableOpacity  onPress={() => navigate("myOrdersList" , {item:item})} style={styles.cardContainer}>
      <Text style={styles.title}>#{item?._id}</Text>
      <View style={styles.contentContainer}>
        <View>
          <View style={styles.ordersContainer}>
            <View style={styles.iconWrapper}>
              <CalendarIcon />
            </View>
            <Text style={styles.orderText}>{t('order_date')}</Text>
            <Text style={styles.orderText}>{item?.orderDate}</Text>
          </View>
          <View style={styles.ordersContainer}>
            <View style={styles.iconWrapper}>
              <DollarIcon />
            </View>
            <Text style={styles.orderText}>{t('order_ammount')}</Text>
            <Text style={styles.orderText}>HK$ {Math.round(item?.total)}</Text>
          </View>
        </View>
        <View style={styles.arrowIcon}>
        <LeftArrow />
        </View>
      </View>
      <Text style={{...styles.orderNotify, 
        color: orderNotify =='ORDER_RECIEVED' ? colors.pearlColor : 
        orderNotify =='OUT_FOR_DELIVERY' ? colors.lightOrangeColor : 
        orderNotify =='COMPLETED' ? colors.actvityGreenColor : 
        orderNotify =='READY_FOR_PICKUP' ? colors.lightGreenColor : 
        orderNotify =='PRINTING' ? colors.printingColor : colors.lightRedColor 
        }}>
          {handleOrderStatus(orderNotify)}
          </Text>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  cardContainer: {
    backgroundColor: colors.whiteColor,
    borderWidth: 1,
    borderColor: colors.smokeWhiteColor,
    paddingHorizontal:'15@s',
    paddingVertical:'20@s',
    borderRadius:'10@s',
    marginBottom:'20@s',
    marginHorizontal:'2@s',
    shadowColor:colors.blackColor,
    shadowOffset: {
      width: 4,
      height: 4,
    
    },
    shadowOpacity: 0.27,
    shadowRadius: 2.65,
    elevation: 5,
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  ordersContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '8@s',
  },
  orderText: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    color: colors.lightBlackColor,
    marginLeft: '5@s',
  },
  iconWrapper: {
    width: '15@s',
  },
  title: {
    fontFamily: fonts.avenir_bold,
    fontSize: '14@s',
    fontStyle: 'normal',
    lineHeight: '15@s',
    letterSpacing: '0.2@s',
    color: colors.blackColor,
    marginBottom: '6@s',
  },
  orderNotify: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    color: colors.pearlColor,
    marginTop: '10@s',
  },
  arrowIcon:{
    transform:[{rotate:'180deg'}]
  }
});

export default OrdersComponent;
