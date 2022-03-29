import React from 'react';
import {View, Text,TouchableOpacity,ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {BackArrowHeader, SigninTextField,LoginGreenButton} from '../Components';
import {colors} from '../Utils/theme';

const SigninScreen = () => {
  return (
    <ScrollView>
      <BackArrowHeader />
      <View style={styles.container}>
        <SigninTextField title="Email" keyboardType="email-address" secureTextEntry={false} />
        <SigninTextField title="Password"  secureTextEntry={true} />
        <TouchableOpacity style={styles.forgotWrapper}>
        <Text style={styles.forgotPassword}>Forgot password</Text>
        </TouchableOpacity>
        <View style={styles.buttonWrapper}>
          <LoginGreenButton/>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: '12@s',
  },
  forgotPassword:{
      // fontFamily:Avenir LT Std,
      fontSize: '12@s',
      fontStyle: 'normal',
      fontWeight: '400',
      fontStyle: 'normal',
      lineHeight: '15@s',
      letterSpacing: '0.5@s',
      textAlign: 'left',
      color: colors.greenColor,
  },
  forgotWrapper:{
    paddingVertical:'7@s',
    marginTop:-7,
  },
  buttonWrapper:{
    marginTop:'40@s',
  }
});

export default SigninScreen;
