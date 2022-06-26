import React, { useState } from 'react';
import {View, Text, FlatList,TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {OrderReceivedIcon,OrderCompletedIcon,DeliveryIcon,OrderCancelledIcon,OrderPicupIcon,PrintingIcon} from '../Assests/Svgs';
import NotificationComponent from '../Components/NotificationComponent';
import {colors, fonts} from '../Utils/theme';
import { getCurrentDate,getDateFormat} from '../Utils/helperFunctions';

const handleOrderStatusForActivity = (orderNotify) => {
  if(orderNotify == "ORDER_RECIEVED"){
    return <OrderReceivedIcon/>
  }
  else if(orderNotify=="COMPLETED"){
    return <OrderCompletedIcon/>;
  }
  else if(orderNotify=="CANCELLED"){
    return <OrderCancelledIcon/>;
  }
  else if(orderNotify=="OUT_FOR_DELIVERY"){
    return <DeliveryIcon/>;
  }
  else if(orderNotify=="READY_FOR_PICKUP"){
    return <OrderPicupIcon/>;
  }
  else{
    return <PrintingIcon/> ;
  }

}

const DATA = [
  {
    id: '1',
    orderCode: '#PRT2049593',
    orderReceived: '“Order received”',
    time: '12:45 PM',
    seen: false,
    childern:<OrderReceivedIcon/>
  },
  {
    id: '2',
    orderCode: '#PRT20495352',
    orderReceived: '“Completed”',
    time: '1h',
    seen: true,
    childern:<OrderCompletedIcon/>
  },
  {
    id: '3',
    orderCode: '#PRT2084593',
    orderReceived: '“Cancelled”',
    time: '2h',
    seen: true,
    childern:<OrderCancelledIcon/>
  },
];

const NotificationActivity = ({item,readMark, handleActivityIsRead, handleAllActivityRead}) => {
  const [data,setData] = useState(item?.notifications);
  const lengthItem = item?.notifications.length; 
  const lastItemId = item?.notifications[0]._id;
  const {t} = useTranslation();

  // const handleData = (id) => {
  //   setData((prev)=> {
  //     return prev?.map((x,i)=>{
  //       if(x?.orderId == id){  
  //       return {...prev[i], isRead: false}
  //       }else{
  //         return {...prev[i], isRead: true}
  //       }
  //     })
  //   })
  // }

  const renderItem = ({item}, index) => {

    return(
    <NotificationComponent onPress={() => handleActivityIsRead(item?._id, item?.orderId)}
      orderCode={item?._id}
      orderReceived={item?.orderStatus}
      orderMessage={item?.message}
      time={item?.updatedAt}
      childern={handleOrderStatusForActivity(item?.orderStatus)}
      border = {item?._id == lastItemId? false : true}
      seen={item?.isRead}
    />
  )};

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>
          {item?._id == getCurrentDate() ? 'Today' : getDateFormat(item?._id)}
          </Text>
       {item?._id == readMark && <TouchableOpacity onPress={()=>handleAllActivityRead()}><Text style={styles.headerText}>{"Mark as all read"}</Text></TouchableOpacity> }
      </View>
      <FlatList
        data={item?.notifications && item?.notifications.reverse()}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    backgroundColor: colors.whiteColor,
    padding: '15@s',
    paddingTop: '15@s',
    marginVertical: '15@s',
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '7@s',
  },
  headerText: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '17@s',
    letterSpacing: '0.2@s',
    color: colors.lightBlackColor,
  },
});

export default NotificationActivity;
