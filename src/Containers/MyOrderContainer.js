import React, { useRef, useState, useEffect } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllOrder } from '../store/actions/orderAction'
import Storage from '../Utils/Storage';

import MyOrderScreen from '../Screens/MyOrderScreen';
import { colors } from '../Utils/theme';

const MyOrderContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const orderRBSheet = useRef();
  const isFocused = useIsFocused();


  const [animation, setAnimation] = useState(false);
  const [focused, setFocused] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const getAllOrderData = useSelector(state => state?.orderReducer?.orderDetail);

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const goBack = () => {
    navigation.goBack();
  };

  // useEffect(() => {
  //   Storage.retrieveData('token').then((token) => {
  //     setUserToken(token);
      
  //   })
  // }, [isFocused])

  useEffect(() => {
    isFocused && Storage.retrieveData('token').then((token) => {
      setUserToken(token);
      !token && orderRBSheet.current.open()
      token && dispatch(getAllOrder(setAnimation))
    });
  }, [isFocused])
  console.log("All order", getAllOrderData)

  return (
    <View style={styles.container}>
      <MyOrderScreen navigate={navigate} goBack={goBack}
        orderRBSheet={orderRBSheet}
        focused={focused}
        getAllOrderData={getAllOrderData}
        animation={animation}
        setFocused={setFocused}
        userToken={userToken}
        />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
});

export default MyOrderContainer;