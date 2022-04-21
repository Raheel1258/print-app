import React, { useState } from 'react';
import { View, Image, ScrollView, Text, TextInput } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

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
import InfoIcon from '../Assests/Svgs/InfoIcon';
import { colors, fonts } from '../Utils/theme';
import roundImage from '../Assests/Images/round-image.png';
import squareImage from '../Assests/Images/square-image.png';

const SingleProductScreen = ({
  title,
  item,
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
  preview,
  setPreview,
  handleAddToCart,
  remarks,
  setRemarks,
  handleChange,
  finishingRBSheet
}) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <BackArrowHeader goBack={goBack} title={title} arrow={false} />
      <ScrollView style={styles.marginContainer}>
        <View style={styles.sliderWrapper}>
          <ImageSlider sliderImages={item?.images} />
          <SingleCardDescription item={item} />
        </View>
        <CategoriesTitleHeader title={title === 'Business Card' ? t('choose_size') : t('choose_book_size')} />
        <View style={styles.cardsContainer}>
          {item?.choose_size && item?.choose_size.map((item, index) => {
            return (
              <>
                {(title === 'Business Card')?
                  <CardSizeComponent
                    key={index}
                    Childern={
                      item?.size_name === 'Sqaure' ?

                        <StandardSizeCard
                          key={index}
                          name={item?.name}
                          designation={item?.designation}
                          studio={item?.studio}
                          textWidth={60}
                          cardWidth={100}
                          cardHeight={100}
                          borderColor={colors.lightOrangeColor}
                          dotColor={colors.orangeColor}
                        />
                        :
                        <StandardSizeCard
                          key={index}
                          name={item?.name}
                          designation={item?.designation}
                          studio={item?.studio}
                          textWidth={100}
                          cardWidth={135}
                          cardHeight={80}
                          borderColor={item?.size_name === 'Standard' ? colors.gradientGreenColor : colors.gradientBlueColor}
                          dotColor={item?.size_name === 'Standard' ? colors.darkGreenColor : colors.lightBlueColor}
                        />
                    }
                    selectedSize={selectedSize}
                    onPress={() => setSelectedSize(item?.size_name)}
                    cardStandard={item?.size_name}
                    cardDimensions={`${item?.height} x ${item?.width}`}
                  /> :
                 <CardSizeComponent
                    key={index}
                    Childern={
                      <Image style={styles.squareimage} source={item?.image} />}
                    cardStandard={item?.size_name}
                    cardDimensions={`${item?.height}x${item?.width}`}
                    selectedSize={selectedSize}
                    onPress={() => setSelectedSize(item?.size_name)}
                  />}
                  
              </>
            )
          })
          }
        </View>
        {title === 'Business Card' &&
          <>
            <CategoriesTitleHeader title={t('choose_finishing')} Children={<InfoIcon/>} />
            <UploadFileComponent   onPress={() => finishingRBSheet.current.open()} title={t('finishing')} selection={'Mate'}/>
            <CategoriesTitleHeader title={t('choose_corner')}  />
            <View style={styles.cardsContainer}>
              {item?.choose_corner && item?.choose_corner.map((item, index) => {
                return (
                  <CardSizeComponent
                    key={index}
                    selectedCorner={selectedCorner}
                    onPress={() => setSelectedCorner(item?.corner)}
                    Childern={
                      <Image style={styles.squareimage} source={item?.image} />}
                    cardStandard={item?.corner}
                    cardDimensions={item?.variation}
                  />
                )
              })
              }
            </View>
          </>}

        <CategoriesTitleHeader title={t('choose_quantity')} />
        <QuantityTable quantityTable={item?.quantity_table} quantityId={quantityId} setQuantityId={setQuantityId} />
        <CategoriesTitleHeader title={t('send_preview')} />
        <Text style={styles.previewDescription}>
          After you’ve placed the order, we will send you a preview in e-mail
          before production
        </Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <GreenButton
              buttonHeight={47}
              backgroundColor={
                preview ? colors.greenColor : colors.smokeWhiteColor
              }
              color={preview ? colors.blackColor : colors.lightBlackColor}
              title={t('yes_text')}
              onPress={() => setPreview(true)}
            />
          </View>
          <View style={styles.buttonWrapper}>
            <GreenButton
              buttonHeight={47}
              backgroundColor={
                preview ? colors.smokeWhiteColor : colors.greenColor
              }
              color={preview ? colors.lightBlackColor : colors.blackColor}
              title={t('no_text')}
              onPress={() => setPreview(false)}
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
         <BottomSheetComponent
          title={'finigfhf'}
          refRBSheet={finishingRBSheet}
          note={false}
          height = {300}
          childern={
            <Text>vghvjhv</Text>
          }
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
          onChangeText={handleChange}
          textAlignVertical="top"
          multiline={true}
          numberOfLines={5}
          style={styles.textAreaInput}
        />
        <View style={styles.bottomContainer}>
          <Text style={styles.addCart}>{t('add_to_cart')}</Text>
          <GreenButton
            backgroundColor={colors.blackColor}
            title={t('add_to_cart_text')}
            onPress={()=>handleAddToCart()}
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
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
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
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
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
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    color: colors.greenColor,
    textAlign: 'center',
    marginBottom: '15@s',
    marginTop: '5@s',
  },
  questionText: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    color: colors.lightBlackColor,
    textAlign: 'center',
    marginTop: '15@s',
  },
  mailText: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    color: colors.greenColor,
    textAlign: 'center',
    marginTop: '3@s',
  },
});

export default SingleProductScreen;
