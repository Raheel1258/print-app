import React, {useEffect, useState} from 'react';
import { useDispatch } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { types } from '@babel/core';
import {View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import OneSignal from 'react-native-onesignal';
import { login } from '../store/actions/auth';
import SigninScreen from '../Screens/SigninScreen';
import {colors} from '../Utils/theme';

const SigninContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState(false);
  const [deviceId, setDeviceId] = useState(null);
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  useEffect(()=> {
    getUserDeviceId();
  }, [])

  const getUserDeviceId = async () => {
    await OneSignal.getDeviceState().then(res => {
      setDeviceId(`${res?.userId}`);
    });
  };

  const goBack = () => {
    navigation.goBack();
  };

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }
 
  const handleLogin = (values) => {
    dispatch(login({...values, deviceId:deviceId},navigation,setAnimation));
  };

  return (
    <View style={styles.container}>
      <SigninScreen loginData={loginData} handleLogin={handleLogin} navigate={navigate} animation={animation} goBack={goBack}/>
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default SigninContainer;