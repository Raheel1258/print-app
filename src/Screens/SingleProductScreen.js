import React, { useState } from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { ShortenedIcon } from '../Assests/Svgs'


import {
  BackArrowHeader,
  ImageSlider,
  ImageSwiper,
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
  categoryTitle,
  item,
  category,
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
  handleChange,
  finishingRBSheet,
  selectFinishing,
  setSelectFinishing,
  sizeRBSheet,
  spotUvRBSheet,
  selectSpotUv,
  setSelectSpotUv,
  selectedUpload,
  setSelectedUpload,
  result,
  setResult,
  initialValuesAddUrl,
  handleAddFileUrl
}) => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <BackArrowHeader goBack={goBack} title={categoryTitle} arrow={false} />
      <ScrollView style={styles.marginContainer}>
        <View style={styles.sliderWrapper}>
          {/* <ImageSlider sliderImages={item?.image} /> */}
          <ImageSwiper sliderImages={item?.image} autoPlaySlider={false} />
          <SingleCardDescription item={item} />
        </View>

        <CategoriesTitleHeader title={category === 'BOOKLET' ? t('choose_book_size') : t('choose_size')} />
        <View style={!(category === "ENVELOPE" || category === "LETTERHEAD") ? styles.cardsContainer : ""}>
          {!(category === "ENVELOPE" || category === "LETTERHEAD") ? item?.size.map((item, index) => {
            return (
              <View key={index}>
                <CardSizeComponent
                  Childern={
                    <Image transition={false} resizeMode='contain' style={styles.squareImage} source={{ uri: item?.image }} />}
                  cardStandard={item?.name}
                  cardDimensions={`${item?.height}mm x ${item?.width}mm`}
                  selectedSize={selectedSize}
                  onPress={() => setSelectedSize(item?.name)}
                />
              </View>
            )
          }) :
            <View>
              <UploadFileComponent title={t('size')} onPress={() => sizeRBSheet.current.open()} selection={selectedSize ? selectedSize : ""} />
            </View>}
        </View>
        {((category === "BUSINESS_CARD" && item?.category?.name === "Matte / Glossy Business Card") || category === "BOOKLET") &&
          <>
            <CategoriesTitleHeader title={t('choose_finishing')} Children={<InfoIcon />} />
            <UploadFileComponent onPress={() => finishingRBSheet.current.open()} title={t('finishing')} selection={selectFinishing} />
          </>
        }

        {(category === "BUSINESS_CARD" && item?.category?.name === "Spot Gloss (UV) Business Card") &&
          <>
            <CategoriesTitleHeader title={t('choose_SpotUv')} Children={<InfoIcon />} />
            <UploadFileComponent onPress={() => spotUvRBSheet.current.open()} title={t('spotUv')} selection={selectSpotUv} />
          </>
        }

        {category === 'BUSINESS_CARD' &&
          <>
            <CategoriesTitleHeader title={t('choose_corner')} />
            <View style={styles.cardsContainer}>
              {item?.corner && item?.corner.map((item, index) => {
                return (
                  <View key={index}>

                    <CardSizeComponent
                      key={index}
                      selectedCorner={selectedCorner}
                      onPress={() => setSelectedCorner(item?.cornerName)}
                      Childern={
                        <Image transition={false} resiseMode="contain" style={styles.cornerImage} source={{ uri: item?.image }} />}
                      cardStandard={item?.cornerName}
                      cardDimensions={item?.cornerDescription}
                    />
                  </View>
                )
              })
              }
            </View>
          </>}

        <CategoriesTitleHeader title={t('choose_quantity')} />
        <QuantityTable quantityTable={item?.priceChart} quantityId={quantityId} setQuantityId={setQuantityId} />
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
          onPress={() => { refRBSheet.current.open(), setSelectedUpload(t('upload_file')) }}
          title={t('upload_file')}
          isSelected={selectedUpload == t('upload_file') ? true : false}
        />
        <UploadFileComponent
          onPress={() => { urlRBSheet.current.open(), setSelectedUpload(t('upload_url')) }}
          title={t('upload_url')}
          isSelected={selectedUpload == t('upload_url') ? true : false}

        />
        <UploadFileComponent
          onPress={() => { toggleModal(), setSelectedUpload(t('upload_mail')) }}
          title={t('upload_mail')}
          isSelected={selectedUpload == t('upload_mail') ? true : false}
        />


        <BottomSheetComponent
          title={t('sheet_upload_file')}
          refRBSheet={refRBSheet}
          childern={<FilePickerInput result={result} setResult={setResult} />}
        />
        <BottomSheetComponent
          refRBSheet={urlRBSheet}
          childern={<UrlPickerInput  refRBSheet={urlRBSheet} title={t('sheet_upload_url')} initialValuesAddUrl={initialValuesAddUrl} handleAddFileUrl={handleAddFileUrl} />}
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
            onPress={() => handleAddToCart()}
          />
          <Text style={styles.questionText}>{t('send_us_mail')}</Text>
          <Text style={styles.mailText}>{t('mail_text')}</Text>
        </View>

        {/* Finishing BottomSheet */}
        <BottomSheetComponent
          title={t('choose_finishing')}
          refRBSheet={finishingRBSheet}
          note={false}
          height={300}
          childern={
            item?.finishing?.map((item, index) => {
              return <TouchableOpacity key={index} onPress={() => {
                setSelectFinishing(item);
                finishingRBSheet.current.close()
              }} style={styles.listContainer}>
                <Text style={styles.listStyle}>{item}</Text>
              </TouchableOpacity>
            })
          }
        />

        {/* Size BottomSheet */}
        <BottomSheetComponent
          title={t('choose_size')}
          refRBSheet={sizeRBSheet}
          note={false}
          height={300}
          childern={
            item?.size?.map((item, index) => {
              return <TouchableOpacity key={index} onPress={() => {
                setSelectedSize(item?.name);
                sizeRBSheet.current.close()
              }} style={styles.listContainer}>
                <Text style={styles.listStyle}>{item?.name}</Text>
              </TouchableOpacity>
            })
          }
        />

        {/* Spot Vu Effect */}
        <BottomSheetComponent
          title={t('choose_SpotUv')}
          refRBSheet={spotUvRBSheet}
          note={false}
          height={300}
          childern={
            item?.spotUv?.map((item, index) => {
              return <TouchableOpacity key={index} onPress={() => {
                setSelectSpotUv(item);
                spotUvRBSheet.current.close()
              }} style={styles.listContainer}>
                <Text style={styles.listStyle}>{item}</Text>
              </TouchableOpacity>
            })
          }
        />
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
  squareImage: {
    width: '120@s',
    height: '65@s',
    alignSelf: 'center',
    marginTop: '10@s',
  },
  cornerImage: {
    width: '60@s',
    height: '60@s',
    alignSelf: 'center',
    marginTop: '20@s',
  },
  previewDescription: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '18@s',
    letterSpacing: '0.2@s',
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
    letterSpacing: '0.2@s',
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
    color: colors.blackColor
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
  listStyle: {
    fontFamily: fonts.avenir_regular,
    fontSize: '14@s',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.2@s',
    paddingVertical: '10@s',
  },
  listContainer: {
    borderBottomColor: colors.innerBorderColor,
    borderBottomWidth: 1,
    paddingHorizontal: '10@s'
  }
});

export default SingleProductScreen;
