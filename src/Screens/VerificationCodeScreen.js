import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { Formik } from 'formik';
import { verificationCodeSchema } from '../Utils/validationSchema';

import {
  BackArrowHeader,
  InputTextField,
  GreenButton,
} from '../Components';
import { colors, fonts } from '../Utils/theme';

const VerificationCodeScreen = ({
  animation,
  navigate,
  goBack,
  handleVerificationCode,
  verificationCodeState,
}) => {
  const { t } = useTranslation();
  return (
    <>
      <BackArrowHeader goBack={goBack} title={t('verification_code')} />
      <View style={styles.container}>
        <ScrollView>
          <Formik initialValues={verificationCodeState} validationSchema={() => verificationCodeSchema(t)} onSubmit={(values) => handleVerificationCode(values)}>
            {({ values, handleChange, handleSubmit, handleBlur, errors, touched }) => {
              const { otpCode } = values;
              return <>
                <Text style={styles.emailDescription}>{t('verification_description')}</Text>
                <InputTextField
                  value={otpCode}
                  error={touched.otpCode && errors.otpCode}
                  title={t('verification_code')}
                  keyboardType="phone-pad"
                  name="otpCode"
                  secureTextEntry={false}
                  onChangeText={handleChange('otpCode')}
                  onBlur={handleBlur('otpCode')}
                />
                <View style={styles.buttonWrapper}>
                  <GreenButton
                    onPress={handleSubmit}
                    title={t('reset_password')}
                    animation={animation}
                  />
                </View>
              </>
            }}
          </Formik>
        </ScrollView>
      </View>
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
    padding: '12@s',
  },
  buttonWrapper: {
    marginTop: '20@s',
  },
  emailDescription: {
    fontFamily: fonts.avenir_regular,
    fontSize: '13@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '17@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginBottom: '40@s',
    marginTop: '10@s',
  },
});

export default VerificationCodeScreen;
