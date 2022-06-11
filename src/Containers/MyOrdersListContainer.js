import React, {useState} from 'react';
import {View, Text} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import {handleEmailing} from '../store/actions/orderAction'

import MyOrdersListScreen from '../Screens/MyOrdersListScreen';
import { colors } from '../Utils/theme';
import { useDispatch } from 'react-redux';

const MyOrdersListContainer = ({route}) => {
  const {item} = route.params;
  const dispater = useDispatch()
  const navigation = useNavigation();
  const [supportEmail, setSupportEmail] = useState('receipt')
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
        <MyOrdersListScreen goBack={goBack} orderData={item} setSupportEmail={setSupportEmail} handleReceiptEmail={handleReceiptEmail} handlerSupportEmail={handlerSupportEmail}/>
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