import React, { useState } from 'react';
import { View } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import Toast from 'react-native-toast-message';
import { useTranslation } from 'react-i18next';

import ResetPasswordScreen from '../Screens/ResetPasswordScreen';
import { resetPasswordAction } from '../store/actions/auth';

import { colors } from '../Utils/theme';

const ResetPasswordContainer = ({ route }) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const { userId } = route.params;

  const [animation, setAnimation] = useState(false);
  const [isModalVisible, setModalVisible] = useState(false);
  const [resetPassword, setResetPassword] = useState({
    password: '',
    confirmPassword: ''
  });

  const toggleModal = () => {
    isModalVisible && navigate('signin');
    setModalVisible(!isModalVisible);
  };

  const handleChange = (name, value) => {
    setForgotPasswordData({ ...forgotPassword, [name]: value });
  };

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const goBack = () => {
    navigation.goBack();
  };

  const handleResetPassword = (values) => {
    if (values?.password != values?.confirmPassword) {
      Toast.show({
        type: 'error',
        text1: t('new_confirm_password_message'),
      });
    } else {
      dispatch(resetPasswordAction({ ...values, userId: userId }, navigate, setAnimation));
    }

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

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
});

export default ResetPasswordContainer;