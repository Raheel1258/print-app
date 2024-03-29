import React from 'react';
import { View, Image, ScrollView, Text, TextInput, TouchableOpacity, ActivityIndicator, Keyboard, Linking } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import i18n from 'i18next';


import {
  BackArrowHeader,
  ImageSwiper,
  CategoriesTitleHeader,
  CardSizeComponent,
  SingleCardDescription,
  QuantityTable,
  GreenButton,
  UploadFileComponent,
  BottomSheetComponent,
  FilePickerInput,
  UrlPickerInput,
  VerificationModal,
} from '../Components';
import InfoIcon from '../Assests/Svgs/InfoIcon';
import AuthenticationLogo from '../Assests/Svgs/AuthenticationLogo';
import { colors, fonts } from '../Utils/theme';

const SingleProductScreen = ({
  animation,
  priceChartAnimation,
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
  setSelectedPriceChart,
  selectedPriceChart,
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
  handleAddFileUrl,
  paperTypeCoverPagesRBSheet,
  paperTypeCoverPages,
  setPaperTypeCoverPages,
  paperTypeInnerPagesRBSheet,
  setPaperTypeInnerPages,
  paperTypeInnerPages,
  noOfPagesCoverPagesRBSheet,
  noOfPagesCoverPages,
  setNoOfPagesCoverPages,
  noOfPagesInnerPagesRBSheet,
  noOfPagesInnerPages,
  setNoOfPagesInnerPages,
  allCardsPaperTypeRBSheet,
  allCardsPaperType,
  setAllCardsPaperType,
  numberOfSidesRBSheet,
  numberOfSides,
  setNumberOfSides,
  selectedCut,
  setSelectedCut,
  selectedFolding,
  setSelectedFolding,
  selectedWindow,
  setSelectedWindow,
  addToCartAnimation,
  setValues,
  defaultValuesObject,
  sliceArray,
  sliceData,
  flag,
  accountRBSheet,
  focused,
  setFocused,
  navigate,
  handleAnotherDesign,
  remarks,
  productData
}) => {
  let widthOne = 120;
  let heightOne = 65;
  let marginTop = 20;
  const getIndex = (index) => {
    if (category == "STICKERS_LABEL" && index == 0) {
      widthOne = 27;
      heightOne = 27;
      marginTop = 50;
    }
    else if (category == "STICKERS_LABEL" && index == 1) {
      widthOne = 35;
      heightOne = 35;
      marginTop = 45;
    }
    else if (category == "STICKERS_LABEL" && index == 2) {
      widthOne = 50;
      heightOne = 50;
      marginTop = 35;
    } else {
      widthOne = 65;
      heightOne = 65;
      marginTop = 30;
    }
  }
  const { t } = useTranslation();
  const getSize = () => {
    if (category == 'BOOKLET') {
      return selectedSize?.name
    } else if (category == 'BUSINESS_CARD') {
      return `${selectedSize?.width} x ${selectedSize?.height}`
    } else if (category == 'POSTER') {
      return selectedSize?.name
    } else if (category == "FLYERS_LEAFLET" && item?.category?.name == "Square Flyer") {
      return `${selectedSize?.width} x ${selectedSize?.height}`
    }
  }
  return (
    <>
      {!animation ?
        <View style={styles.container}>
          <BackArrowHeader goBack={goBack} title={categoryTitle} arrow={false} />
          <ScrollView style={styles.marginContainer}>
            <View style={styles.sliderWrapper}>
              <ImageSwiper sliderImages={item?.image ? item?.image : []} autoPlaySlider={false} />
              <SingleCardDescription item={item} />
            </View>

            <CategoriesTitleHeader title={category === 'BOOKLET' ? t('choose_book_size') : t('choose_size')} />
            <View style={!(category === "ENVELOPE" || category === "LETTERHEAD") ? styles.cardsContainer : ""}>
              {!(category === "ENVELOPE" || category === "LETTERHEAD") ? item?.size.map((item, index) => {
                category == "STICKERS_LABEL" && getIndex(index);

                return (
                  <View key={index}>
                    <CardSizeComponent
                      Childern={
                        <Image transition={false} resizeMode='contain' style={item?.name == "Square" ? styles.squareStyling : { ...styles.squareImage, width: widthOne, height: heightOne, marginTop: marginTop }} source={{ uri: item?.image }} />}
                      cardStandard={item?.name}
                      cardDimensions={`${item?.width}mm x ${item?.height}mm`}
                      selectedSize={selectedSize?.name}
                      onPress={() => { setSelectedSize(item), setValues({ ...defaultValuesObject, size: getSize() }) }}
                    />
                  </View>
                )
              }) :
                <View>
                  <UploadFileComponent title={t('size')} onPress={() => sizeRBSheet.current.open()} selection={selectedSize?.name ? selectedSize?.name : ""} />
                </View>}
            </View>

            {!(category == "BOOKLET" || category == 'BUSINESS_CARD') &&
              <>
                <CategoriesTitleHeader title={t('paper_type')} />
                <UploadFileComponent onPress={() => allCardsPaperTypeRBSheet.current.open()} title={t('paper')} selection={allCardsPaperType} />
              </>
            }

            {(category == "POSTER") &&
              <>
                <CategoriesTitleHeader title={t('side_number')} />
                <UploadFileComponent onPress={() => numberOfSidesRBSheet.current.open()} title={t('side')} selection={numberOfSides} />
              </>
            }

            {(category == "BOOKLET") &&
              <>
                <CategoriesTitleHeader title={t('paper_type')} />
                <UploadFileComponent onPress={() => paperTypeCoverPagesRBSheet.current.open()} title={t('cover_pages')} selection={paperTypeCoverPages} />
                <UploadFileComponent onPress={() => paperTypeInnerPagesRBSheet.current.open()} title={t('inner_pages')} selection={paperTypeInnerPages} />
              </>
            }

            {((category == "BUSINESS_CARD" && item?.category?.productType == "Matte / Glossy Business Card") || category == "BOOKLET") &&
              <>
                <CategoriesTitleHeader title={t('choose_finishing')} Children={<InfoIcon />} />
                <UploadFileComponent onPress={() => finishingRBSheet.current.open()} title={t('finishing')} selection={selectFinishing} />
              </>
            }


            {(category === "BUSINESS_CARD" && item?.category?.productType === "Spot UV Business Card") &&
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
                          selectedCorner={selectedCorner?.cornerName}
                          onPress={() => { setSelectedCorner(item), setValues({ ...defaultValuesObject, corner: `${item?.cornerName} Corner` }) }}
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

            {(category == "BOOKLET") &&
              <>
                <CategoriesTitleHeader title={t('number_pages')} Children={<InfoIcon />} />
                <UploadFileComponent onPress={() => noOfPagesCoverPagesRBSheet.current.open()} title={t('cover_pages')} selection={noOfPagesCoverPages} />
                <UploadFileComponent onPress={() => noOfPagesInnerPagesRBSheet.current.open()} title={t('inner_pages')} selection={noOfPagesInnerPages} />
              </>
            }

            {category == "STICKERS_LABEL" &&
              <>
                <CategoriesTitleHeader title={t('choose_cut')} />
                <View style={styles.cardsContainer}>
                  {item?.cut?.map((item, index) => {
                    return (
                      <View key={index}>
                        <CardSizeComponent
                          Childern={
                            <Image transition={false} resizeMode='contain' style={styles.squareImage} source={{ uri: item?.image }} />}
                          cardStandard={item?.cutName}
                          cardDimensions={`${item?.cutWidth}mm x ${item?.cutHeight}mm`}
                          selectedSize={selectedCut?.cutName}
                          onPress={() => setSelectedCut(item)}
                        />
                      </View>
                    )
                  })}
                </View>
              </>
            }


            {(category == "FLYERS_LEAFLET" && item?.category?.productType === "Flyer (A4)") &&
              <>
                <CategoriesTitleHeader title={t('choose_folding')} />
                <View style={styles.cardsContainer}>
                  {item?.folding?.map((item, index) => {
                    return (
                      <View key={index}>
                        <CardSizeComponent
                          Childern={
                            <Image transition={false} resizeMode='contain' style={styles.squareImage} source={{ uri: item?.image }} />}
                          cardStandard={item?.foldingName}
                          cardDimensions={`${item?.foldingWidth}mm x ${item?.foldingHeight}mm`}
                          selectedSize={selectedFolding?.foldingName}
                          onPress={() => { setSelectedFolding(item), setValues({ ...defaultValuesObject, folding: item?.foldingName }) }}
                        />
                      </View>
                    )
                  })}
                </View>
              </>
            }


            {(category == "ENVELOPE") &&
              <>
                <CategoriesTitleHeader title={t('choose_window')} />
                <View style={styles.cardsContainer}>
                  {item?.window?.map((item, index) => {
                    return (
                      <View key={index}>
                        <CardSizeComponent
                          Childern={
                            <Image transition={false} resizeMode='contain' style={styles.squareImage} source={{ uri: item?.image }} />}
                          cardStandard={item?.windowName}
                          cardDimensions={`${item?.windowWidth}" x ${item?.windowHeight}"`}
                          selectedSize={selectedWindow?.windowName}
                          onPress={() => { setSelectedWindow(item), setValues({ ...defaultValuesObject, window: item?.windowName }) }}
                        />
                      </View>
                    )
                  })}
                </View>
              </>
            }
            <CategoriesTitleHeader title={t('choose_quantity')} />
            <QuantityTable sliceData={sliceData} flag={flag} sliceArray={sliceArray} priceChartAnimation={priceChartAnimation} selectedPriceChart={selectedPriceChart} setSelectedPriceChart={setSelectedPriceChart} />
            <CategoriesTitleHeader title={t('send_preview')} />
            <Text style={styles.previewDescription}>
              {t('preview_Descriptions')}
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
              onPress={() => {
                i18n.language === 'en' ? Linking.openURL('https://printprint.com.hk/en/artwork-guidelines/') :
                  Linking.openURL('https://printprint.com.hk/artwork-guidelines/')
              }}
            />
            <UploadFileComponent
              width={320}
              onPress={() => { refRBSheet.current.open(), setSelectedUpload('uploadFile') }}
              title={t('upload_file')}
              isSelected={selectedUpload == 'uploadFile' ? true : false}
            />
            <UploadFileComponent
              width={320}
              onPress={() => { urlRBSheet.current.open(), setSelectedUpload('urlLink') }}
              title={t('upload_url')}
              isSelected={selectedUpload == 'urlLink' ? true : false}

            />
            <UploadFileComponent
              width={320}
              onPress={() => { toggleModal(), setSelectedUpload('email') }}
              title={t('upload_mail')}
              isSelected={selectedUpload == 'email' ? true : false}
            />
            <BottomSheetComponent
              title={t('sheet_upload_file')}
              refRBSheet={refRBSheet}
              note={true}
              childern={<FilePickerInput result={result} setResult={setResult} />}
            />
            <BottomSheetComponent
              refRBSheet={urlRBSheet}
              note={true}
              childern={<UrlPickerInput refRBSheet={urlRBSheet} title={t('sheet_upload_url')} initialValuesAddUrl={initialValuesAddUrl} handleAddFileUrl={handleAddFileUrl} />}
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
              value={remarks}
              style={styles.textAreaInput}
              keyboardType="default"
              returnKeyType="done"
              onSubmitEditing={() => { Keyboard.dismiss() }}
            />
            <View style={styles.bottomContainer}>
              <TouchableOpacity onPress={() => handleAnotherDesign()}>
                <Text style={styles.addCart}>{t('add_to_cart')}</Text>
              </TouchableOpacity>
              <GreenButton
                backgroundColor={colors.blackColor}
                title={t('add_to_cart_text')}
                animation={addToCartAnimation}
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
                    setSelectedSize(item);
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
                item?.spotUV?.map((item, index) => {
                  return <TouchableOpacity key={index} onPress={() => {
                    setSelectSpotUv(item);
                    spotUvRBSheet.current.close()
                  }} style={styles.listContainer}>
                    <Text style={styles.listStyle}>{item}</Text>
                  </TouchableOpacity>
                })
              }
            />

            {/* paperTypeCoverPagesRBSheet */}
            <BottomSheetComponent
              title={t('paper_type')}
              refRBSheet={paperTypeCoverPagesRBSheet}
              note={false}
              height={300}
              childern={
                <TouchableOpacity onPress={() => {
                  setPaperTypeCoverPages(paperTypeCoverPages);
                  paperTypeCoverPagesRBSheet.current.close()
                }}
                  style={styles.listContainer}>
                  <Text style={styles.listStyle}>{item?.paperType ? item?.paperType[0] : ''}</Text>
                </TouchableOpacity>
              }
            />

            {/* paperTypeInnerPagesRBSheet */}
            <BottomSheetComponent
              title={t('paper_type')}
              refRBSheet={paperTypeInnerPagesRBSheet}
              note={false}
              height={300}
              childern={
                <TouchableOpacity onPress={() => {
                  setPaperTypeInnerPages(paperTypeInnerPages);
                  paperTypeInnerPagesRBSheet.current.close()
                }}
                  style={styles.listContainer}>
                  <Text style={styles.listStyle}>{item?.paperType ? item?.paperType[1] : ''}</Text>
                </TouchableOpacity>
              }
            />

            {/* noOfPagesCoverPagesRBSheet */}
            <BottomSheetComponent
              title={t('number_pages')}
              refRBSheet={noOfPagesCoverPagesRBSheet}
              note={false}
              height={300}
              childern={
                // <TouchableOpacity onPress={() => {
                //   setNoOfPagesCoverPages(noOfPagesCoverPages);
                //   noOfPagesCoverPagesRBSheet.current.close()
                // }}
                //   style={styles.listContainer}>
                //   <Text style={styles.listStyle}>{noOfPagesCoverPages}</Text>
                // </TouchableOpacity>
                item?.numberOfPages && item?.numberOfPages[0]?.number?.map((item, index) => {
                  return <TouchableOpacity key={index} onPress={() => {
                    setNoOfPagesCoverPages(item);
                    noOfPagesCoverPagesRBSheet.current.close()
                  }} style={styles.listContainer}>
                    <Text style={styles.listStyle}>{item}</Text>
                  </TouchableOpacity>
                })
              }
            />

            {/* noOfPagesInnerPagesRBSheet */}
            <BottomSheetComponent
              title={t('number_pages')}
              refRBSheet={noOfPagesInnerPagesRBSheet}
              note={false}
              height={430}
              childern={
                item?.numberOfPages && item?.numberOfPages[1]?.number?.map((item, index) => {
                  return <TouchableOpacity key={index} onPress={() => {
                    setNoOfPagesInnerPages(item);
                    setValues({ ...defaultValuesObject, innerpage: item })
                    noOfPagesInnerPagesRBSheet.current.close()
                  }} style={styles.listContainer}>
                    <Text style={styles.listStyle}>{item}</Text>
                  </TouchableOpacity>
                })
              }
            />

            {/* x` */}
            <BottomSheetComponent
              title={t('paper_type')}
              refRBSheet={allCardsPaperTypeRBSheet}
              note={false}
              height={330}
              childern={
                item?.paperType?.map((item, index) => {
                  return <TouchableOpacity key={index} onPress={() => {
                    setAllCardsPaperType(item);
                    setValues({ ...defaultValuesObject, papertype: item.substr(14, 7) })
                    allCardsPaperTypeRBSheet.current.close()
                  }} style={styles.listContainer}>
                    <Text style={styles.listStyle}>{item}</Text>
                  </TouchableOpacity>
                })
              }
            />

            {/* numberOfSidesRBSheet */}
            <BottomSheetComponent
              title={t('side_number')}
              refRBSheet={numberOfSidesRBSheet}
              note={false}
              height={330}
              childern={
                item?.numberOfSides?.map((item, index) => {
                  return <TouchableOpacity key={index} onPress={() => {
                    setNumberOfSides(item);
                    setValues({ ...defaultValuesObject, sides: item })
                    numberOfSidesRBSheet.current.close()
                  }} style={styles.listContainer}>
                    <Text style={styles.listStyle}>{item}</Text>
                  </TouchableOpacity>
                })
              }
            />
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
                        navigate('auth', { next: 'signup', obj: productData });
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
                        navigate('auth', { next: 'signin', obj: productData });
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

          </ScrollView>
        </View> : <View style={styles.loaderContainer}>
          <ActivityIndicator size="small" color="#000" animating={true} />
        </View>}
    </>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  marginContainer: {
    // marginBottom: '62@s',
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
  squareStyling: {
    width: '120@s',
    height: '85@s',
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
    marginTop: '20@s',
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
    color: colors.blackColor,
  },
  listContainer: {
    borderBottomColor: colors.innerBorderColor,
    borderBottomWidth: 1,
    paddingHorizontal: '10@s'
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoWrapper: {
    alignItems: 'center',
    marginVertical: '15@s'
  },
  signinButtonWrapper: {
    marginTop: '20@s'
  }
});

export default SingleProductScreen;
