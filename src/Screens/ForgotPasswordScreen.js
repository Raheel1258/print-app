import React from 'react';
import {View, Text,TouchableOpacity,ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {BackArrowHeader, SigninTextField,LoginGreenButton} from '../Components';
import {colors} from '../Utils/theme';

const ForgotPasswordScreen = () => {
  return (
    <>
    <BackArrowHeader title="Forgot password" />
    <ScrollView>
      <View style={styles.container}>
          <Text style={styles.emailDescription}>Please enter your email address below, we’ll send you a password reset link.</Text>
        <SigninTextField title="Email" keyboardType="email-address" secureTextEntry={false} />
        <View style={styles.buttonWrapper}>
          <LoginGreenButton title="Send"/>
        </View>
      </View>
    </ScrollView>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: '12@s',
  },
  buttonWrapper:{
    marginTop:'20@s',
  },
  emailDescription:{
      // fontFamily:Avenir LT Std,
      fontSize: '13@s',
      fontStyle: 'normal',
      fontWeight: '400',
      fontStyle: 'normal',
      lineHeight: '17@s',
      letterSpacing: '0.3@s',
      textAlign: 'left',
      color: colors.blackColor,
      marginBottom:'40@s',
      marginTop:'10@s'
  }
});

export default ForgotPasswordScreen;
