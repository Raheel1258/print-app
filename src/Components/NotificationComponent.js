import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ScaledSheet} from 'react-native-size-matters';
import {handleOrderStatus} from "../Utils/helperFunctions"
import {getTimeFormat} from '../Utils/helperFunctions'
import { useTranslation } from 'react-i18next';
import {colors, fonts} from '../Utils/theme';
import i18n from 'i18next';
import { compose } from 'redux';

const NotificationComponent = ({orderReceived, time,childern, border=true, seen, onPress,orderMessage,orderMessage_chi
}) => {
  console.log("vdvd", orderMessage_chi)
  const { t } = useTranslation();
  return (
    <TouchableOpacity onPress={onPress}>
    <View>
      <View style={styles.contentContainer}>
        <View  style={styles.orderCodeContainer}>
       {childern}
        <View>
          <Text style={styles.orderStatus}>{i18n.language == "en" ? orderMessage?.replace(orderReceived, "") : orderMessage_chi?.replace(orderReceived, "") }
          </Text> 
          <Text style={{...styles.orderReceived, 
            color: orderReceived =='ORDER_RECIEVED' ? colors.pearlColor : 
            orderReceived =='OUT_FOR_DELIVERY' ? colors.lightOrangeColor : 
            orderReceived =='COMPLETED' ? colors.actvityGreenColor : 
            orderReceived =='READY_FOR_PICKUP' ? colors.lightGreenColor : 
            orderReceived =='PRINTING' ? colors.printingColor : colors.lightRedColor}}>{handleOrderStatus(orderReceived,t)}</Text>
          <Text style={styles.timeText}>{getTimeFormat(time)}</Text>
        </View>
        </View>
        {seen == false && <View style={styles.activeDot} />}
      </View>
     {border !== false && <View style={styles.borderBottom}/>}
      </View>
      
      </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({

  contentContainer:{
    flexDirection:'row',
    justifyContent:'space-between',
    marginTop:'12@s'
  },
  orderCodeContainer:{
    flexDirection:'row',
  },
  orderStatus: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '17@s',
    letterSpacing: '0.2@s',
    color: colors.blackColor,
    marginLeft:'10@s',
    width:'265@s'
  },
  orderCode: {
    fontFamily: fonts.avenir_bold,
  },
  orderReceived: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '17@s',
      letterSpacing: '0.2@s',
    color: colors.pearlColor,
    marginLeft:'10@s',
    marginVertical:'4@s',
  },
  timeText: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '17@s',
      letterSpacing: '0.2@s',
    color: colors.lightBlackColor,
    marginLeft:'10@s'
  },
  activeDot: {
    width: '8@s',
    height: '8@s',
    borderRadius: '50@s',
    backgroundColor: colors.greenColor,
    marginTop:'5@s'
  },
  borderBottom:{
    borderBottomWidth:1,
    borderBottomColor:colors.inputBorderColor,
    marginTop:'10@s'
  }
});

export default NotificationComponent;
