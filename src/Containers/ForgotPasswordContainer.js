import React,{useState} from 'react';
import { types } from '@babel/core';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import ForgotPasswordScreen from '../Screens/ForgotPasswordScreen';
import {colors} from '../Utils/theme';

const ForgotPasswordContainer = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.container}>
      <ForgotPasswordScreen
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