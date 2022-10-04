import React, {useState, useEffect} from 'react';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import { getDate } from '../Utils/helperFunctions';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { signup } from '../store/actions/auth';
import {colors} from '../Utils/theme';
import i18n from 'i18next';

import OneSignal from 'react-native-onesignal';
import SignupScreen from '../Screens/SignupScreen';

const SignupContainer = ({route}) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const {obj} = route.params;
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

  const handleSignup = (values) => {
      var date = getDate();
      dispatch(signup({...values, deviceId:deviceId, date:date, created:"InApp", language:i18n.language == "en" ? 'English' : "Chinese"}, navigation, setAnimation, obj));    
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