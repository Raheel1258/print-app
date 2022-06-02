import React, { useState } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import {changePassword} from "../store/actions/userPersonalDetailAction"
import { useDispatch} from 'react-redux';
import Toast from 'react-native-toast-message';

import ChangePasswordScreen from '../Screens/ChangePasswordScreen';
import { colors } from '../Utils/theme';

const ChangePasswordContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState(false);
  const [animationChangePassword,setAnimationChangePassowrd] = useState(false);
  const [changePasswordState, setChangePasswordState] = useState({
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  });

  const goBack = () => {
    navigation.goBack();
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleChangePassword = (values) => {
    if(values?.newPassword != values?.confirmPassword){
      Toast.show({
        type: 'error',
        text1: 'New and confirm password must be equal',
    });
    }else{
      dispatch(changePassword(setAnimationChangePassowrd , {currentPassword:values.currentPassword , newPassword:values.newPassword}, toggleModal))
    }
   

  }

  return (
    <View style={styles.container}>
      <ChangePasswordScreen
        animationChangePassword={animationChangePassword}
        goBack={goBack}
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
        changePasswordState={changePasswordState}
        animation={animation}
        handleChangePassword={handleChangePassword} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhiteColor,
  },
});

export default ChangePasswordContainer;
