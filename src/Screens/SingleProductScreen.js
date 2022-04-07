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
  BottomSheetComponent,
  FilePickerInput,
  UrlPickerInput,
  VerificationModal,
} from '../Components';
import {colors} from '../Utils/theme';
import roundImage from '../Assests/Images/round-image.png';
import squareImage from '../Assests/Images/square-image.png';

const SingleProductScreen = ({
  goBack,
  refRBSheet,
  urlRBSheet,
  isModalVisible,
  toggleModal,
  selectedSize,
  setSelectedSize,
  selectedCorner,
  setSelectedCorner,
  setQuantityId,
  quantityId,
  review, 
  setReview
}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <BackArrowHeader goBack={goBack} title={t('business_card')} arrow = {false}/>
      <ScrollView style={styles.marginContainer}>
        <View style={styles.sliderWrapper}>
          <ImageSlider />
          <SingleCardDescription />
        </View>
        <CategoriesTitleHeader title={t('choose_size')} />
        <View style={styles.cardsContainer}>
          <CardSizeComponent
            selectedSize = {selectedSize}
            onPress = {() => setSelectedSize(t('standard_text'))}
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
            selectedSize = {selectedSize}
            onPress = {() => setSelectedSize(t('shortened_text'))}
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
            selectedSize = {selectedSize}
            onPress = {() => setSelectedSize(t('square_text'))}
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
          selectedCorner={selectedCorner}
          onPress = {() => setSelectedCorner(t('square_text'))}
            Childern={<Image style={styles.squareimage} source={squareImage} />}
            cardStandard={t('square_text')}
            cardDimensions={t('traditional_text')}
          />
          <CardSizeComponent
          selectedCorner={selectedCorner}
          onPress = {() => setSelectedCorner(t('round_text'))}
            Childern={<Image style={styles.squareimage} source={roundImage} />}
            cardStandard={t('round_text')}
            cardDimensions={t('smooth_text')}
          />
        </View>
        <CategoriesTitleHeader title={t('choose_quantity')} />
        <QuantityTable quantityId = {quantityId} setQuantityId = {setQuantityId}/>
        <CategoriesTitleHeader title={t('send_preview')} />
        <Text style={styles.previewDescription}>
          After you’ve placed the order, we will send you a preview in e-mail
          before production
        </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <GreenButton
               buttonHeight={47}
              backgroundColor={review ? colors.greenColor : colors.smokeWhiteColor}
              color={review ? colors.blackColor : colors.lightBlackColor}
              title={t('yes_text')}
              onPress = {()=> setReview(true)}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <GreenButton
             buttonHeight={47}
              backgroundColor={review ? colors.smokeWhiteColor : colors.greenColor}
              color={review ? colors.lightBlackColor : colors.blackColor}
              title={t('no_text')}
              onPress = {()=> setReview(false)}
            />
          </View>
        </View>
        <CategoriesTitleHeader
          title={t('upload_design')}
          description={t('artwork_guidelines')}
        />
        <UploadFileComponent
          onPress={() => refRBSheet.current.open()}
          title={t('upload_file')}
        />
        <UploadFileComponent
          onPress={() => urlRBSheet.current.open()}
          title={t('upload_url')}
        />
        <UploadFileComponent onPress={toggleModal} title={t('upload_mail')} />
        <BottomSheetComponent
          title={t('sheet_upload_file')}
          refRBSheet={refRBSheet}
          childern={<FilePickerInput />}
        />
        <BottomSheetComponent
          title={t('sheet_upload_url')}
          refRBSheet={urlRBSheet}
          childern={<UrlPickerInput />}
        />
        <VerificationModal
          title={t('sent_text')}
          description={t('you_can_send')}
          isModalVisible={isModalVisible}
          toggleModal={toggleModal}
        />
        <CategoriesTitleHeader title={t('order_remark')} />
        <Text style={styles.aboutOrder}>{t('anything_about_order')}</Text>
        <TextInput
          textAlignVertical="top"
          multiline={true}
          numberOfLines={5}
          style={styles.textAreaInput}
        />
        <View style={styles.bottomContainer}>
          <Text style={styles.addCart}>{t('add_to_cart')}</Text>
          <GreenButton
            backgroundColor={colors.blackColor}
            title="Add to cart"
          />
          <Text style={styles.questionText}>{t('send_us_mail')}</Text>
          <Text style={styles.mailText}>{t('mail_text')}</Text>
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
    marginBottom: '62@s',
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
    height: '100@s',
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
    marginBottom: '15@s',
    marginTop: '5@s',
  },
  questionText: {
    // fontFamily:Avenir,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    color: colors.lightBlackColor,
    textAlign: 'center',
    marginTop: '15@s',
  },
  mailText: {
    // fontFamily:Avenir,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    color: colors.greenColor,
    textAlign: 'center',
    marginTop: '3@s',
  },
});

export default SingleProductScreen;
