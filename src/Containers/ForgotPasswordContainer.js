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

  const handleForgotPasswordPress = () => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (
      forgotPasswordData?.email.length <=0
    ) {
      Toast.show({
        type: 'error',
        text1: 'Email cannot be empty',
      });
    } else if (reg.test(forgotPasswordData.email) === false) {
      Toast.show({
        type: 'error',
        text1: 'Please Provide a valid email',
      });
    } else {
      const forgotPassowrdData = {
        email: forgotPasswordData?.email.toLocaleLowerCase(),
      };
      dispatch(forgotPassword(forgotPassowrdData, navigation));
      toggleModal();
    }
  };
  
  return (
    <View style={styles.container}>
      <ForgotPasswordScreen
      handleChange={handleChange}
      handleForgotPasswordPress={handleForgotPasswordPress}
      isModalVisible={isModalVisible}
      toggleModal={toggleModal} />
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