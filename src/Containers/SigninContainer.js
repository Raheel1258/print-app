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
    email: 'nor@gmail.com',
    password: '2123423',
  });

  const goBack = () => {
    navigation.goBack();
  };

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }
 
  const handleLogin = (values) => {
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