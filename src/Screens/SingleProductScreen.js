import React from 'react';
import {View, Image, ScrollView, Text, TextInput} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {
  BackArrowHeader,
  ImageSlider,
  CategoriesTitleHeader,
  CardSizeComponent,
  SingleCardDescription,
  StandardSizeCard,
  QuantityTable,
  GreenButton,
  UploadFileComponent,
} from '../Components';
import {colors} from '../Utils/theme';
import roundImage from '../Assests/Images/round-image.png';
import squareImage from '../Assests/Images/square-image.png';

const SingleProductScreen = ({goBack}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <BackArrowHeader goBack={goBack} title={t('business_card')} />
      <ScrollView style={styles.marginContainer}>
        <View style={styles.sliderWrapper}>
          <ImageSlider />
          <SingleCardDescription />
        </View>
        <CategoriesTitleHeader title={t('choose_size')} />
        <View style={styles.cardsContainer}>
          <CardSizeComponent
            Childern={
              <StandardSizeCard
                textWidth={100}
                cardWidth={135}
                cardHeight={80}
                borderColor={colors.gradientGreenColor}
                dotColor={colors.darkGreenColor}
              />
            }
            cardStandard={t('standard_text')}
            cardDimensions={t('first_dimension')}
          />
          <CardSizeComponent
            Childern={
              <StandardSizeCard
                textWidth={100}
                cardWidth={135}
                cardHeight={80}
                borderColor={colors.gradientBlueColor}
                dotColor={colors.lightBlueColor}
              />
            }
            cardStandard={t('shortened_text')}
            cardDimensions={t('second_dimension')}
          />
          <CardSizeComponent
            Childern={
              <StandardSizeCard
                textWidth={60}
                cardWidth={100}
                cardHeight={100}
                borderColor={colors.lightOrangeColor}
                dotColor={colors.orangeColor}
              />
            }
            cardStandard={t('square_text')}
            cardDimensions={t('third_dimension')}
          />
        </View>
        <CategoriesTitleHeader title={t('choose_corner')} />
        <View style={styles.cardsContainer}>
          <CardSizeComponent
            Childern={<Image style={styles.squareimage} source={squareImage} />}
            cardStandard={t('square_text')}
            cardDimensions={t('traditional_text')}
          />
          <CardSizeComponent
            Childern={<Image style={styles.squareimage} source={roundImage} />}
            cardStandard={t('round_text')}
            cardDimensions={t('smooth_text')}
          />
        </View>
        <CategoriesTitleHeader title={t('choose_quantity')} />
        <QuantityTable />
        <CategoriesTitleHeader title={t('send_preview')} />
        <Text style={styles.previewDescription}>
          After you’ve placed the order, we will send you a preview in e-mail
          before production
        </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <GreenButton
              backgroundColor={colors.greenColor}
              color={colors.blackColor}
              title="Yes"
            />
          </View>
          <View style={styles.buttonWrapper}>
            <GreenButton
              backgroundColor={colors.smokeWhiteColor}
              color={colors.lightBlackColor}
              title="Yes"
            />
          </View>
        </View>
        <CategoriesTitleHeader
          title={t('upload_design')}
          description={t('artwork_guidelines')}
        />
        <UploadFileComponent title={t('upload_file')} />
        <UploadFileComponent title={t('upload_url')} />
        <UploadFileComponent title={t('upload_mail')} />
        <CategoriesTitleHeader title={t('order_remark')} />
        <Text style={styles.aboutOrder}>{t('anything_about_order')}</Text>
        <TextInput
          textAlignVertical="top"
          multiline={true}
          numberOfLines={5}
          style={styles.textAreaInput}
        />
        <View style={styles.bottomContainer}>
          <Text style={styles.addCart}>Add to cart and add another design</Text>
          <GreenButton
            backgroundColor={colors.blackColor}
            title="Add to cart"
          />
          <Text style={[styles.addCart, styles.questionText]}>
            Got question? Send us an e-mail at
          </Text>
          <Text style={[styles.addCart, styles.mailText]}>
            support@printprint.com.hk
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
  marginContainer: {
    marginBottom: '75@s',
  },
  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: '12@s',
  },
  sliderWrapper: {
    marginBottom: '15@s',
  },
  squareimage: {
    width: '50@s',
    height: '50@s',
    alignSelf: 'center',
    marginTop: '30@s',
  },
  previewDescription: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.3@s',
    color: colors.lightBlackColor,
    paddingHorizontal: '10@s',
    marginLeft: '6@s',
    marginTop: '18@s',
  },
  buttonsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: '14@s',
    marginVertical: '20@s',
  },
  buttonWrapper: {
    width: '47%',
  },
  aboutOrder: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.3@s',
    color: colors.lightBlackColor,
    paddingHorizontal: '15@s',
    marginVertical: '17@s',
  },
  textAreaInput: {
    borderWidth: 1,
    borderColor: colors.innerBorderColor,
    marginHorizontal: '17@s',
    borderRadius: '5@s',
    paddingLeft: 7,
    fontSize: '14@s',
    marginBottom: '15@s',
  },
  bottomContainer: {
    backgroundColor: colors.offWhiteColor,
    padding: '12@s',
  },
  addCart: {
    // fontFamily:Avenir,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    color: colors.greenColor,
    textAlign: 'center',
    marginBottom: '17@s',
  },
  questionText: {
    color: colors.blackColor,
    marginTop: '20@s',
  },
  mailText: {
    marginTop: -10,
  },
});

export default SingleProductScreen;
