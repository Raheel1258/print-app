import React,{useState} from 'react';
import { types } from '@babel/core';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { forgotPassword } from '../store/actions/auth';
import Toast from 'react-native-toast-message';

import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import {colors} from '../Utils/theme';

const ForgotPasswordContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [forgotPasswordData, setForgotPasswordData] = useState({
    email: '',
  });

  const handleChange = (name, value) => {
    setForgotPasswordData({...forgotPassword, [name]: value});
  };

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const goBack = () => {
    navigation.goBack();
  };

  const handleForgotPassword = (values) => {
    console.log("forgot password" , values);
    dispatch(forgotPassword(values, navigation, setAnimation));
    toggleModal();
    // let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    // if (
    //   forgotPasswordData?.email.length <=0
    // ) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Email cannot be empty',
    //   });
    // } else if (reg.test(forgotPasswordData.email) === false) {
    //   Toast.show({
    //     type: 'error',
    //     text1: 'Please Provide a valid email',
    //   });
    // } else {
    //   const forgotPassowrdData = {
    //     email: forgotPasswordData?.email.toLocaleLowerCase(),
    //   };
    //   dispatch(forgotPassword(forgotPassowrdData, navigation, setAnimation));
    //   toggleModal();
    // }
  };
  
  return (
    <View style={styles.container}>
      <ForgotPasswordScreen
      handleChange={handleChange}
      handleForgotPassword={handleForgotPassword}
      forgotPasswordData={forgotPasswordData}
      animation={animation}
      isModalVisible={isModalVisible}
      toggleModal={toggleModal} 
      navigate={navigate}
      goBack={goBack}/>
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default ForgotPasswordContainer;