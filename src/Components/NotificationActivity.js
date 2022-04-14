import React from 'react';
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
    orderReceived: 'Cancelled',
    time: '2h',
    seen: true,
    childern:<OrderCancelledIcon/>
  },
];

const NotificationActivity = ({date,readMark}) => {
  const {t} = useTranslation();
  const renderItem = ({item}, index) => (
    <NotificationComponent
      orderCode={item.orderCode}
      orderReceived={item.orderReceived}
      time={item.time}
      childern={item.childern}
      border = {item?.id == DATA?.length ? false : true}
      seen={item?.seen}
    />
  );
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>{date}</Text>
        <Text style={styles.headerText}>{readMark}</Text>
      </View>
      <FlatList
        data={DATA}
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
    letterSpacing: '0.3@s',
    color: colors.lightBlackColor,
  },
});

export default NotificationActivity;
