import { types } from '@babel/core';
import React, {useState} from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { login } from '../store/actions/auth';
import Toast from 'react-native-toast-message';


import SigninScreen from '../Screens/SigninScreen';
import {colors} from '../Utils/theme';

const SigninContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (name, value) => {
    setLoginData({...loginData, [name]: value});
  };

  const handleLoginPress = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (
      loginData?.email.length > 0 &&
      loginData.password.length <= 0
    ) {
      Toast.show({
        type: 'error',
        text1: 'Password cannot be empty',
      });
    } else if (
      loginData?.password.length > 0 &&
      loginData.email.length <= 0
    ) {
      Toast.show({
        type: 'error',
        text1: 'Email cannot be empty',
      });
    } else if (
      loginData?.password.length <= 0 &&
      loginData?.email.length <= 0
    ) {
      Toast.show({
        type: 'error',
        text1: 'Fields cannot be empty',
      });
    } else if (reg.test(loginData.email) === false) {
      Toast.show({
        type: 'error',
        text1: 'Please Provide a valid email',
      });
    } else {
      const loginDetail = {
        email: loginData?.email.toLocaleLowerCase(),
        password: loginData.password,
      };
      dispatch(login(loginDetail, navigation));
    }
  };

  return (
    <View style={styles.container}>
      <SigninScreen handleChange={handleChange} handleLoginPress={handleLoginPress} navigation={navigation}/>
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