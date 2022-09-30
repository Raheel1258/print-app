import React from 'react';
import { View, Text, ScrollView, Linking } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';




import {
  ImageBackArrowHeader,
  UploadFileComponent,
  BottomSheetComponent,
  GreenButton,
  VerificationModal
} from '../Components';
import AuthenticationLogo from '../Assests/Svgs/AuthenticationLogo';
import HeaderImage from '../Assests/Images/account-header-image.png';
import AccountIcon from '../Assests/Svgs/AccountBlackIcon';
import FaqsIcon from '../Assests/Svgs/FaqsIcon';
import LanguageIcon from '../Assests/Svgs/LanguageIcon';
import ShuffleIcon from '../Assests/Svgs/ShuffleIcon';
import { colors, fonts } from '../Utils/theme';

const AccountScreen = ({
  navigate,
  goBack,
  refRBSheet,
  logoutHandler,
  accountRBSheet,
  focused,
  setFocused,
  isModalVisible,
  toggleModal,
  changeLanguageHandler,
  languageToggle,
  setLanguageToggle,
  userToken
}) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <ImageBackArrowHeader
        Children={HeaderImage}
        title={t("account")}
        description={t("spread_the_word")}
        goBack={goBack}
        borderBottomWidth={0}
      />
      <ScrollView>
        <View style={styles.paddingContainer}>
          <UploadFileComponent
            onPress={() => {userToken ? navigate('accountDetail') : accountRBSheet.current.open()}}
            title={t('my_details')}
            Children={<AccountIcon />}
          />
          <UploadFileComponent
            onPress={() => i18n.language == "en" ? Linking.openURL('https://pri.cxstaging.com/en/faqs/') : Linking.openURL('https://pri.cxstaging.com/faqs/')}
            title={t('faqs_text')} Children={<FaqsIcon />} />
          <UploadFileComponent
            onPress={() => refRBSheet.current.open()}
            title={t('language_text')}
            Children={<LanguageIcon />}
          />
          <BottomSheetComponent
            height={250}
            refRBSheet={refRBSheet}
            languageTitle={t('select_language')}
            childern={
              <>
               <View style={{marginTop:10}}>
               <GreenButton
                  backgroundColor={
                    i18n.language == "en" ? colors.greenColor : colors.smokeWhiteColor
                  }
                  color={i18n.language == "en" ? colors.whiteColor : colors.greenColor}
                  onPress={() => { changeLanguageHandler('en'), setLanguageToggle(true) }}
                  title={'English'} />
               </View>
                <View style={styles.buttonWrapper}>
                  <GreenButton
                    onPress={() => { changeLanguageHandler('chi'), setLanguageToggle(false) }}
                    borderWidth={2}
                    backgroundColor={
                      i18n.language == "en" ? colors.smokeWhiteColor : colors.greenColor
                    }
                    color={i18n.language == "en" ? colors.greenColor : colors.whiteColor}
                    title={t('chinese_text')} />
                </View>
              </>}
          />
          <UploadFileComponent
            onPress={()=> {userToken ? toggleModal(): accountRBSheet.current.open()}}
            title={t('sign_out')}
            Children={<ShuffleIcon />}
          />
          <Text style={styles.signOutDescription}>
            {t('question_support')}{' '}
            <Text style={styles.mailText}>{t('support_mail')}</Text>
          </Text>
        </View>
      </ScrollView>
      <BottomSheetComponent
        childern={
          <>
            <View style={styles.logoWrapper}>
              <AuthenticationLogo />
            </View>
            <View style={styles.signinButtonWrapper}>
              <GreenButton
                backgroundColor={focused ? colors.greenColor : colors.whiteColor}
                color={focused ? colors.whiteColor : colors.greenColor}
                borderWidth={2}
                title={t('signup_text')}
                onPress={() => {
                  accountRBSheet.current.close();
                  navigate('auth', { next: 'signup' });
                  setFocused(true);
                }}
              />
            </View>
            <View style={styles.signinButtonWrapper}>
              <GreenButton
                title={t('sheet_login_in')}
                backgroundColor={focused ? colors.whiteColor : colors.greenColor}
                color={focused ? colors.greenColor : colors.whiteColor}
                borderWidth={2}
                onPress={() => {
                  accountRBSheet.current.close();
                  navigate('auth', { next: 'signin' });
                  setFocused(false);
                }}
              />
            </View>
          </>
        }
        languageTitle={t('Signup_today')}
        // note={false}
        refRBSheet={accountRBSheet}
        height={420}
        // onClose={false}
      />
      <VerificationModal
        title={t('you_signed_out')}
        description={t('signed_out_description')}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        aditionalAction={() => logoutHandler()}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  paddingContainer: {
    marginHorizontal: '15@s',
    marginTop: '7@s',
  },
  signOutDescription: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '18@s',
    letterSpacing: '0.2@s',
    color: colors.lightBlackColor,
    marginTop: '18@s',
  },
  mailText: {
    color: colors.greenColor,
  },
  buttonWrapper: {
    marginTop: '15@s'
  },
  logoWrapper: {
    alignItems: 'center',
    marginVertical: '15@s'
  },
  signinButtonWrapper: {
    marginTop: '20@s'
  },
});

export default AccountScreen;
