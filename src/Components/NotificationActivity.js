import React, { useState } from 'react';
import {View, Text, FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {OrderReceivedIcon,OrderCompletedIcon,DeliveryIcon,OrderCancelledIcon,OrderPicupIcon,PrintingIcon} from '../Assests/Svgs';
import NotificationComponent from '../Components/NotificationComponent';
import {colors, fonts} from '../Utils/theme';

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

const NotificationActivity = ({date,item,readMark}) => {

  const [data,setData] = useState(item[date]);
  const lengthItem = item[date].length; 
  const lastItemId = item[date][lengthItem-1].orderId;
  const {t} = useTranslation();

  const handleData = (id) => {
    setData((prev)=> {
      return prev?.map((x,i)=>{
       
        if(x?.orderId == id){
          console.log("into map id of sele" ,id);
          console.log("into map id of big" ,x?.orderId);
          
        return {...prev[i], seen: false}
        }else{
          return {...prev[i], seen: true}
        }
      })
    })
  }

  console.log("data of activity" , data)

  const renderItem = ({item}, index) => {

    return(
    <NotificationComponent onPress={() => handleData(item?.orderId)}
      orderCode={item?.orderId}
      orderReceived={item?.status}
      time={item?.time}
      // childern={item.childern}
      border = {item?.orderId == lastItemId? false : true}
      seen={item?.seen}
    />
  )};
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{date}</Text>
        <Text style={styles.headerText}>{"Mark as all read"}</Text>
      </View>
      <FlatList
        data={item[date] && item[date]}
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
