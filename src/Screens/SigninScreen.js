import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { loginValidationSchema } from '../Utils/validationSchema';
import { Formik } from "formik";



import {
  BackArrowHeader,
  InputTextField,
  GreenButton,
} from '../Components';
import { colors,fonts } from '../Utils/theme';


const SigninScreen = ({ navigate, handleLogin, animation, loginData , goBack}) => {
  const { t } = useTranslation();
  return (
    <>
      <BackArrowHeader goBack={goBack} title={t('signin_text')} />
      <ScrollView>
        <View style={styles.container}>
          <Formik initialValues={loginData} validationSchema={() => loginValidationSchema(t)} onSubmit={(values) => handleLogin(values)}>
            {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
              const { email, password } = values;
              return <>
                <InputTextField
                  value={email}
                  error={touched.email && errors.email}
                  title={t('signin_email_text')}
                  keyboardType="email-address"
                  secureTextEntry={false}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                />
                <InputTextField
                  value={password}
                  password={password}
                  error={touched.password && errors.password}
                  title={t('password_text')}
                  secureTextEntry={true}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                />
                <TouchableOpacity style={styles.forgotWrapper} onPress={() => navigate("forgotPassword")}>
                  <Text style={styles.forgotPassword}>{t('forgot_password')}</Text>
                </TouchableOpacity>
                {/* <TouchableOpacity style={styles.forgotWrapper} onPress={() => navigate("signup")}>
                  <Text style={styles.forgotPassword}>{t('Create your account')}</Text>
                </TouchableOpacity> */}
                <View style={styles.buttonWrapper}>
                  <GreenButton onPress={handleSubmit} animation={animation} title={t('login_text')} />
                </View>
              </>
            }}
          </Formik>
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
  forgotPassword: {
    fontFamily:fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    lineHeight: '15@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
  },
  forgotWrapper: {
    paddingVertical: '7@s',
    marginTop: -7,
  },
  buttonWrapper: {
    marginTop: '40@s',
  },
});

export default SigninScreen;
