import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import {handleEmailing} from '../store/actions/orderAction'
import Storage from '../Utils/Storage';

import MyOrdersListScreen from '../Screens/MyOrdersListScreen';
import { colors } from '../Utils/theme';
import { useDispatch } from 'react-redux';

const MyOrdersListContainer = ({route}) => {
  const {item} = route.params;
  console.log("item is is si", item);
  const dispater = useDispatch()
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const [userToken, setUserToken] = useState(null);


  useEffect(() => {
    isFocused && Storage.retrieveData('token').then((token) => {
      setUserToken(token);
    });
  }, [isFocused])

  const goBack = () => {
    navigation.goBack();
  };
  const handleReceiptEmail = (id) => {
    dispater(handleEmailing(id,true))
  }
  const handlerSupportEmail = (id) => {
    dispater(handleEmailing(id,false))
  }
 
  return (
    <View style={styles.container}>
        <MyOrdersListScreen goBack={goBack} orderData={item} handleReceiptEmail={handleReceiptEmail} handlerSupportEmail={handlerSupportEmail} userToken={userToken}/>
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default MyOrdersListContainer;