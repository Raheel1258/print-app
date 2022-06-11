import React from 'react';
import {View, Text, TextInput} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {ScaledSheet} from 'react-native-size-matters';

import {colors, fonts} from '../Utils/theme';

const NotificationComponent = ({orderCode, orderReceived, time,childern, border=true, seen, onPress,orderMessage
}) => {
  return (
    <TouchableOpacity onPress={onPress}>
    <View>
      <View style={styles.contentContainer}>
        <View  style={styles.orderCodeContainer}>
       {childern}
        <View>
          <Text style={styles.orderStatus}>
            Order <Text style={styles.orderCode}>{orderCode}</Text> {orderMessage}
          </Text>
          {/* <Text style={{...styles.orderReceived, color: orderReceived =='Order received' ? colors.pearlColor : orderReceived =='Completed' ? colors.greenColor : colors.lightRedColor}}>{orderReceived}</Text> */}
          <Text style={styles.timeText}>{time.substring(12, 19)}</Text>
        </View>
        </View>
        {seen == true && <View style={styles.activeDot} />}
      </View>
     {border && <View style={styles.borderBottom}/>}
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
    marginLeft:'10@s'
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
