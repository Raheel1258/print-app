import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { types } from '@babel/core';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { signup } from '../store/actions/auth';
import {colors} from '../Utils/theme';

import OneSignal from 'react-native-onesignal';
import SignupScreen from '../Screens/SignupScreen';

const SignupContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState(false);
  const [deviceId, setDeviceId] = useState(null);
  const [signupState, setSignupState] = useState({
    firstName: '',
    lastName: '',
    phone:'',
    email:'',
    password:''
  });

  useEffect(()=> {
    getUserDeviceId();
  }, [])

  const getUserDeviceId = async () => {
    await OneSignal.getDeviceState().then(res => {
      setDeviceId(`${res?.userId}`);
    });
  };
  
  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const goBack = () => {
    navigation.goBack();
  };

  // const handleChange = (name, value) => {
  //   console.log(name , value )
  //   setSignupData({...signupData, [name]: value});
  // };

  const handleSignup = (values) => {
    var day = new Date().getDate();
      var month = new Date().getMonth() + 1;
      var year = new Date().getFullYear();
      var date = day + '-' + month + '-' + year;
      console.log("date1",date);
      dispatch(signup({...values, deviceId:deviceId, date:date, created:"InApp"}, navigation, setAnimation));
    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    // if (
    //   signupData?.email.length > 0 &&
    //   signupData?.firstName.length > 0 &&
    //   signupData?.lastName.length > 0 &&
    //   signupData.password.length <= 0 &&
    //   signupData.phone.length > 0
    // ) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Password cannot be empty',
    //   });
    // } else if (
    //   signupData?.email.length <= 0 ||
    //   signupData?.firstName.length <= 0 ||
    //   signupData?.lastName.length <= 0 ||
    //   signupData.password.length <= 0 ||
    //   signupData.phone.length <= 0
    // ) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Fields cannot be empty',
    //   });
    // }else if (
    //   signupData?.email.length <= 0 &&
    //   signupData?.firstName.length > 0 &&
    //   signupData?.lastName.length > 0 &&
    //   signupData.password.length > 0 &&
    //   signupData.phone.length > 0
    // ) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Email cannot be empty',
    //   });
    // } else if (
    //   signupData?.email.length > 0 &&
    //   signupData?.firstName.length <= 0 &&
    //   signupData?.lastName.length > 0 &&
    //   signupData.password.length > 0 &&
    //   signupData.phone.length > 0
    // ) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'First_Name cannot be empty',
    //   });
    // }
    // else if (
    //   signupData?.email.length > 0 &&
    //   signupData?.firstName.length > 0 &&
    //   signupData?.lastName.length <= 0 &&
    //   signupData.password.length > 0 &&
    //   signupData.phone.length > 0
    // ) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Last_Name cannot be empty',
    //   });
    // } else if (
    //   signupData?.email.length > 0 &&
    //   signupData?.firstName.length > 0 &&
    //   signupData?.lastName.length > 0 &&
    //   signupData.password.length > 0 &&
    //   signupData.phone.length <= 0
    // ) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Phone Number cannot be empty',
    //   });
      
    // } else if (
    //   signupData?.email.length <= 0 &&
    //   signupData?.firstName.length <= 0 &&
    //   signupData?.lastName.length <= 0 &&
    //   signupData.password.length <= 0 &&
    //   signupData.phone.length <= 0
    // ) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Fields cannot be empty',
    //   });
    // } else if (reg.test(signupData.email) === false) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Please Provide a valid email',
    //   });
    // } else {
    //   const signDetail = {
    //     firstName: signupData.firstName,
    //     lastName:signupData.lastName,
    //     phone: signupData.phone,
    //     email: signupData?.email.toLocaleLowerCase(),
    //     password: signupData.password,
    //   };
    //   dispatch(signup(signDetail, navigation, setAnimation));
    // }
  };


  return (
    <View style={styles.container}>
      <SignupScreen 
      // handleChange={handleChange} 
      navigate={navigate} 
      handleSignup={handleSignup} 
      animation={animation}
      goBack={goBack}
      signupState={signupState}
      />
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