import React,{useState} from 'react';
import { types } from '@babel/core';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { resetPasswordAction } from '../store/actions/auth';
import Toast from 'react-native-toast-message';

import ResetPasswordScreen from '../Screens/ResetPasswordScreen';
import {colors} from '../Utils/theme';

const ResetPasswordContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [resetPassword, setResetPassword] = useState({
    newPassword: '',
    confirmPassword:''
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

  const handleResetPassword = (values) => {
    console.log("reset password" , values);
    dispatch(resetPasswordAction(values, navigation, setAnimation));
    toggleModal();

  };
  
  return (
    <View style={styles.container}>
      <ResetPasswordScreen
      handleChange={handleChange}
      handleResetPassword={handleResetPassword}
      resetPassword={resetPassword}
      animation={animation}
      isModalVisible={isModalVisible}
      toggleModal={toggleModal} 
      navigate={navigate}
      goBack={goBack}
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

export default ResetPasswordContainer;