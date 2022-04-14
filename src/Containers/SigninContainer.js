import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { ScaledSheet } from 'react-native-size-matters';
import { types } from '@babel/core';
import {View} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { login } from '../store/actions/auth';
import Toast from 'react-native-toast-message';


import SigninScreen from '../Screens/SigninScreen';
import {colors} from '../Utils/theme';

const SigninContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState(false);
  const [loginData, setLoginData] = useState({
    email: 'link@gmail.com',
    password: '123456',
  });

  const goBack = () => {
    navigation.goBack();
  };

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }
  // const handleChange = (name, value) => {
  //   setLoginData({...loginData, [name]: value});
  // };

  const handleLogin = (values) => {
    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    // if (
    //   loginData?.email.length > 0 &&
    //   loginData.password.length <= 0
    // ) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Password cannot be empty',
    //   });
    // } else if (
    //   loginData?.password.length > 0 &&
    //   loginData.email.length <= 0
    // ) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Email cannot be empty',
    //   });
    // } else if (
    //   loginData?.password.length <= 0 &&
    //   loginData?.email.length <= 0
    // ) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Fields cannot be empty',
    //   });
    // } else if (reg.test(loginData.email) === false) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Please Provide a valid email',
    //   });
    // } else {
    //   const loginDetail = {
    //     email: loginData?.email.toLocaleLowerCase(),
    //     password: loginData.password,
    //   };
    //   dispatch(login(loginDetail, navigation, setAnimation));
    // }
    console.log("handle login" , values);
    dispatch(login(values,navigation,setAnimation));
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