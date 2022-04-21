import React,{useRef,useState, useEffect} from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Storage from '../Utils/Storage';

import MyOrderScreen from '../Screens/MyOrderScreen';
import { colors } from '../Utils/theme';

const MyOrderContainer = () => {
  const navigation = useNavigation();
  const [focused, setFocused] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const isFocused = useIsFocused();

  const orderRBSheet = useRef();
  


  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const goBack = () => {
    navigation.goBack();
  };

  

  useEffect(()=>{
    
  isFocused && Storage.retrieveData('token').then((token)=>{
    setUserToken(token);
    !token && orderRBSheet.current.open()
  });
  },[isFocused])



  return (
    <View style={styles.container}>
        <MyOrderScreen navigate={navigate} goBack={goBack} 
        orderRBSheet={orderRBSheet}   
        focused={focused}
        setFocused={setFocused}/>
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default MyOrderContainer;