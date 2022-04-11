import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {
  ImageBackArrowHeader,
  UploadFileComponent,
  BottomSheetComponent,
  GreenButton
} from '../Components';
import HeaderImage from '../Assests/Images/account-header-image.png';
import AccountIcon from '../Assests/Svgs/AccountBlackIcon';
import FaqsIcon from '../Assests/Svgs/FaqsIcon';
import LanguageIcon from '../Assests/Svgs/LanguageIcon';
import ShuffleIcon from '../Assests/Svgs/ShuffleIcon';
import {colors, fonts} from '../Utils/theme';

const AccountScreen = ({navigate, goBack, refRBSheet}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <ImageBackArrowHeader
        Children={HeaderImage}
        title="Account"
        description="Spread the word"
        goBack={goBack}
      />
      <ScrollView>
        <View style={styles.paddingContainer}>
          <UploadFileComponent
            onPress={() => navigate('accountDetail')}
            title={t('my_details')}
            Children={<AccountIcon />}
          />
          <UploadFileComponent title={t('faqs_text')} Children={<FaqsIcon />} />
          <UploadFileComponent
            onPress={() => refRBSheet.current.open()}
            title={t('language_text')}
            Children={<LanguageIcon />}
          />
          <BottomSheetComponent
            height={'30%'}
            refRBSheet={refRBSheet}
            languageTitle = {t('select_language')}
            childern = {
            <>
            <GreenButton title={t('english_text')}/>
            <View style={styles.buttonWrapper}>
            <GreenButton borderWidth={2} backgroundColor={colors.whiteColor} color={colors.greenColor} title={t('chinese_text')}/>
            </View>
            </>}
          />
          <UploadFileComponent
            title={t('sign_out')}
            Children={<ShuffleIcon />}
          />
          <Text style={styles.signOutDescription}>
            {t('question_support')}{' '}
            <Text style={styles.mailText}>{t('support_mail')}</Text>
          </Text>
        </View>
      </ScrollView>
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
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.3@s',
    color: colors.lightBlackColor,
    marginTop: '18@s',
  },
  mailText: {
    color: colors.greenColor,
  },
  buttonWrapper:{
    marginTop:'15@s'
  }
});

export default AccountScreen;
