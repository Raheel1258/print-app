import React from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import LeftArrow from '../Assests/Svgs/LeftArrow';
import CalendarIcon from '../Assests/Svgs/CalendarIcon';
import DollarIcon from '../Assests/Svgs/DollarIcon';
import {colors, fonts} from '../Utils/theme';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const OrdersComponent = ({orderNotify,navigate}) => {
  const {t} = useTranslation();
  return (
    <TouchableOpacity  onPress={() => navigate("myOrdersList")} style={styles.cardContainer}>
      <Text style={styles.title}>PP202203-16428</Text>
      <View style={styles.contentContainer}>
        <View>
          <View style={styles.ordersContainer}>
            <View style={styles.iconWrapper}>
              <CalendarIcon />
            </View>
            <Text style={styles.orderText}>{t('order_date')}</Text>
            <Text style={styles.orderText}>22/4/2022</Text>
          </View>
          <View style={styles.ordersContainer}>
            <View style={styles.iconWrapper}>
              <DollarIcon />
            </View>
            <Text style={styles.orderText}>{t('order_ammount')}</Text>
            <Text style={styles.orderText}>HK$ 2,500</Text>
          </View>
        </View>
        <View style={styles.arrowIcon}>
        <LeftArrow />
        </View>
      </View>
      <Text style={{...styles.orderNotify, color: orderNotify =='Order received' ? colors.pearlColor : orderNotify =='Out for delivery' ? colors.lightOrangeColor : colors.lightGreenColor }}>{orderNotify}</Text>
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
    letterSpacing: '0.4@s',
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
    letterSpacing: '0.5@s',
    color: colors.blackColor,
    marginBottom: '6@s',
  },
  orderNotify: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.5@s',
    color: colors.pearlColor,
    marginTop: '10@s',
  },
  arrowIcon:{
    transform:[{rotate:'180deg'}]
  }
});

export default OrdersComponent;
