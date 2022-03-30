import { types } from '@babel/core';
import React, {useState} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { signup } from '../store/actions/auth';
import Toast from 'react-native-toast-message';

import SignupScreen from '../Screens/SignupScreen';
import {colors} from '../Utils/theme';

const SignupContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [signupData, setSignupData] = useState({
    firstName: '',
    lastName: '',
    phone:'',
    email:'',
    password:''
  });

  const handleChange = (name, value) => {
    console.log(name , value )
    setSignupData({...signupData, [name]: value});
  };

  const handleSignupPress = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (
      signupData?.email.length > 0 &&
      signupData?.firstName.length > 0 &&
      signupData?.lastName.length > 0 &&
      signupData.password.length <= 0 &&
      signupData.phone.length > 0
    ) {
      Toast.show({
        type: 'error',
        text1: 'Password cannot be empty',
      });
    } else if (
      signupData?.email.length <= 0 ||
      signupData?.firstName.length <= 0 ||
      signupData?.lastName.length <= 0 ||
      signupData.password.length <= 0 ||
      signupData.phone.length <= 0
    ) {
      Toast.show({
        type: 'error',
        text1: 'Fields cannot be empty',
      });
    }else if (
      signupData?.email.length <= 0 &&
      signupData?.firstName.length > 0 &&
      signupData?.lastName.length > 0 &&
      signupData.password.length > 0 &&
      signupData.phone.length > 0
    ) {
      Toast.show({
        type: 'error',
        text1: 'Email cannot be empty',
      });
    } else if (
      signupData?.email.length > 0 &&
      signupData?.firstName.length <= 0 &&
      signupData?.lastName.length > 0 &&
      signupData.password.length > 0 &&
      signupData.phone.length > 0
    ) {
      Toast.show({
        type: 'error',
        text1: 'First_Name cannot be empty',
      });
    }
    else if (
      signupData?.email.length > 0 &&
      signupData?.firstName.length > 0 &&
      signupData?.lastName.length <= 0 &&
      signupData.password.length > 0 &&
      signupData.phone.length > 0
    ) {
      Toast.show({
        type: 'error',
        text1: 'Last_Name cannot be empty',
      });
    } else if (
      signupData?.email.length > 0 &&
      signupData?.firstName.length > 0 &&
      signupData?.lastName.length > 0 &&
      signupData.password.length > 0 &&
      signupData.phone.length <= 0
    ) {
      Toast.show({
        type: 'error',
        text1: 'Phone Number cannot be empty',
      });
      
    } else if (
      signupData?.email.length <= 0 &&
      signupData?.firstName.length <= 0 &&
      signupData?.lastName.length <= 0 &&
      signupData.password.length <= 0 &&
      signupData.phone.length <= 0
    ) {
      Toast.show({
        type: 'error',
        text1: 'Fields cannot be empty',
      });
    } else if (reg.test(signupData.email) === false) {
      Toast.show({
        type: 'error',
        text1: 'Please Provide a valid email',
      });
    } else {
      const signDetail = {
        firstName: signupData.firstName,
        lastName:signupData.lastName,
        phone: signupData.phone,
        email: signupData?.email.toLocaleLowerCase(),
        password: signupData.password,
      };
      dispatch(signup(signDetail, navigation));
    }
  };


  return (
    <View style={styles.container}>
      <SignupScreen handleChange={handleChange} navigation={navigation} handleSignupPress={handleSignupPress}/>
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default SignupContainer;