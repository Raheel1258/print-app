import React,{useState} from 'react';
import { types } from '@babel/core';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { verificationOtpCode } from '../store/actions/auth';
import Toast from 'react-native-toast-message';

import VerificationCodeScreen from '../Screens/VerificationCodeScreen';
import {colors} from '../Utils/theme';

const VerificationCodeContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [useId , setUserId] = useState("");

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const [verificationCodeState, setVerificationCodeState] = useState({
    otpCode: '',
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

  const handleVerificationCode = (values) => {
    dispatch(verificationOtpCode(values,navigate, setAnimation, setUserId));
   
  };
  
  return (
    <View style={styles.container}>
      <VerificationCodeScreen
      handleVerificationCode={handleVerificationCode}
      verificationCodeState={verificationCodeState}
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

export default VerificationCodeContainer;