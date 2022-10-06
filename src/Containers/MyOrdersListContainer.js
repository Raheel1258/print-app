import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import { useDispatch } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation, useIsFocused } from '@react-navigation/native';

import MyOrdersListScreen from '../Screens/MyOrdersListScreen';
import { handleEmailing } from '../store/actions/orderAction'

import { colors } from '../Utils/theme';
import Storage from '../Utils/Storage';

const MyOrdersListContainer = ({ route }) => {
  const dispater = useDispatch()
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const { item } = route.params;

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
    dispater(handleEmailing(id, true))
  }
  const handlerSupportEmail = (id) => {
    dispater(handleEmailing(id, false))
  }

  return (
    <View style={styles.container}>
      <MyOrdersListScreen goBack={goBack} orderData={item} handleReceiptEmail={handleReceiptEmail} handlerSupportEmail={handlerSupportEmail} userToken={userToken} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
});

export default MyOrdersListContainer;