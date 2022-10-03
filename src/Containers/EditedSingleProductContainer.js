import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { editCartItem } from "../store/actions/cartAction";
import {getObjKey} from "../Utils/helperFunctions";

import { getProductById, getPriceChartOnEdited } from "../store/actions/productList";
import EditedSingleProductScreen from '../Screens/EditedSingleProductScreen';
import { chi_eng } from "../Utils/mockData";
import { colors } from '../Utils/theme';
import i18n from 'i18next'

const EditedSingleProductContainer = ({ route }) => {

  const { t } = useTranslation();
  const { productCategory, productId, cartItem, cartProductId } = route.params;

  const priceChart = useSelector(state => state?.productList?.priceChartEdit);
  const state = useSelector(state => state?.productList?.singleProduct);

  const [sliceArray, setSliceArray] = useState([]);
  const [flag, setflag] = useState(true)
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const refRBSheet = useRef();
  const urlRBSheet = useRef();
  const finishingRBSheet = useRef();
  const sizeRBSheet = useRef();
  const spotUvRBSheet = useRef();
  const paperTypeCoverPagesRBSheet = useRef();
  const paperTypeInnerPagesRBSheet = useRef();
  const noOfPagesCoverPagesRBSheet = useRef();
  const noOfPagesInnerPagesRBSheet = useRef();
  const allCardsPaperTypeRBSheet = useRef();
  const numberOfSidesRBSheet = useRef();

  const [animation, setAnimation] = useState(false);
  const [designUrl, setDesignUrl] = useState([]);
  const [initialValuesAddUrl, setInitialValuesAddUrl] = useState(
    {
      url: cartItem?.designUrl?.length > 0 ? 
      cartItem?.designUrl?.map((item) => { return { url_link: item } }) 
      : [{ url_link: '' }]
    }

  )
  const [priceChartAnimation, setPriceChartAnimation] = useState(false);
  const [addToCartAnimation, setAddToCartAnimation] = useState(false);
  const [selectedUpload, setSelectedUpload] = useState('uploadFile');
  const [shape, setShape] = useState("");
  const [selectedSize, setSelectedSize] = useState(i18n.language == "en" ? cartItem?.size : cartItem.size_chi);
  const [selectedCorner, setSelectedCorner] = useState(i18n.language == "en" ? (cartItem?.corner && cartItem?.corner) : ((cartItem?.corner_chi && cartItem?.corner_chi)));
  const [selectFinishing, setSelectFinishing] = useState(i18n.language == "en" ? (cartItem?.finishing && cartItem?.finishing) : cartItem?.finishing_chi && cartItem?.finishing_chi);
  const [selectSpotUv, setSelectSpotUv] = useState(i18n.language == "en" ? cartItem?.spotUV : cartItem?.spotUV_chi);
  const [selectedPriceChart, setSelectedPriceChart] = useState(cartItem?.priceChart && cartItem?.priceChart);
  const [paperTypeCoverPages, setPaperTypeCoverPages] = useState(i18n.language == "en" ? (cartItem?.paperType && cartItem?.paperType) : (cartItem?.paperType_chi && cartItem?.paperType_chi));
  const [paperTypeInnerPages, setPaperTypeInnerPages] = useState(i18n.language == "en" ? (cartItem?.paperType && "Woodfree paper (140 gsm)") : (cartItem?.paperType && "書紙(140 gsm)"));
  const [noOfPagesCoverPages, setNoOfPagesCoverPages] = useState(i18n.language == "en" ? (cartItem?.numberOfPages && cartItem?.numberOfPages[0]?.number[0]) : (cartItem?.numberOfPages_chi && cartItem?.numberOfPages_chi[0]?.number[0]));
  const [noOfPagesInnerPages, setNoOfPagesInnerPages] = useState(i18n.language == "en" ? (cartItem?.numberOfPages && cartItem?.numberOfPages[1]?.number[0]) : (cartItem?.numberOfPages_chi && cartItem?.numberOfPages_chi[1]?.number[0]));




  const [allCardsPaperType, setAllCardsPaperType] = useState(i18n.language == "en" ? (cartItem?.paperType && cartItem?.paperType) : (cartItem?.paperType_chi && cartItem?.paperType_chi));
  const [numberOfSides, setNumberOfSides] = useState(i18n.language == "en" ? (cartItem?.numberOfSides && cartItem?.numberOfSides) : ((cartItem?.numberOfSides_chi && cartItem?.numberOfSides_chi)));

  const [selectedCut, setSelectedCut] = useState(i18n.language == "en" ? (cartItem?.cut && cartItem?.cut) : (cartItem?.cut_chi && cartItem?.cut_chi));
  const [selectedFolding, setSelectedFolding] = useState(i18n.language == "en" ? (cartItem?.folding && cartItem?.folding) : (cartItem?.folding_chi && cartItem?.folding_chi));

  const [selectedWindow, setSelectedWindow] = useState(i18n.language == "en" ? (cartItem?.window && cartItem?.window) : (cartItem?.window_chi && cartItem?.window_chi));
  const [preview, setPreview] = useState(true);
  const [remarks, setRemarks] = useState(cartItem?.remarks);
  const [result, setResult] = useState(cartItem?.designFileUrl?.length > 0 ? cartItem?.designFileUrl : []);

  const defaultValuesObject = productCategory == "BUSINESS_CARD" ? {
    category: 'businesscard',
    product: cartItem?.category?.productType,
    size: `${selectedSize?.width} x ${selectedSize?.height}`,
    corner: `${chi_eng[selectedCorner?.cornerName]} Corner`,
    spotuvside: chi_eng[selectSpotUv] ? "1 side" : chi_eng[selectSpotUv]
  } : productCategory == "BOOKLET" ? {
    category: 'booklet',
    product: cartItem?.category?.productType,
    size: selectedSize?.name,
    innerpage: chi_eng[noOfPagesInnerPages]
  } : productCategory === "POSTER" ? {
    category: 'poster',
    product: cartItem?.category?.productType,
    size: selectedSize?.name,
    papertype: chi_eng[allCardsPaperType].substr(14, 7),
    sides: chi_eng[numberOfSides]
  } : productCategory === "FLYERS_LEAFLET" ? {
    category: 'flyer',
    product: cartItem?.category?.productType,
    size: (i18n.language == "en" ? (cartItem?.category?.name == "Rectangular Flyer") : getObjKey(chi_eng, cartItem?.category?.name)) ? selectedSize?.name : `${selectedSize?.width} x ${selectedSize?.height}`,
    papertype: chi_eng[allCardsPaperType].substr(14, 7),
    folding: chi_eng[selectedFolding?.foldingName]
  } : productCategory === "ENVELOPE" ? {
    category: 'envelop',
    product: cartItem?.category?.productType,
    window: chi_eng[selectedWindow?.windowName]
  } : productCategory === "LETTERHEAD" ? {
    category: 'letterhead',
    product: cartItem?.category?.productType,
  } : {
    category: 'sticker',
    product: 'Sicker',
    size: `${selectedSize?.width} x ${selectedSize?.height}`,
    shape: cartItem?.category?.productType
  }


  const [values, setValues] = useState(defaultValuesObject)
  //usefffff
  useEffect(() => {
    if (state && productId) {
      setValues(productCategory == "BUSINESS_CARD" ? {
        category: 'businesscard',
        product: state?.category?.productType,
        size: `${state?.size[0]?.width} x ${state?.size[0]?.height}`,
        corner: `${state?.corner[0] && state?.corner[0].cornerName} Corner`,
        spotuvside: state?.spotUV[0] && state?.spotUV[0]
      } : productCategory == "BOOKLET" ? {
        category: 'booklet',
        product: state?.category?.productType,
        size: state?.size?.name,
        innerpage: state?.numberOfPages[0] && state?.numberOfPages[1]?.number[0]
      } : productCategory === "POSTER" ? {
        category: 'poster',
        product: state?.category?.productType,
        size: state?.size?.name,
        papertype: state?.paperType[0] && state?.paperType[0].substr(14, 7),
        sides: state?.numberOfSides[0] && state?.numberOfSides[0]
      } : productCategory === "FLYERS_LEAFLET" ? {
        category: 'flyer',
        product: state?.category?.productType,
        size: state?.category?.name == "Rectangular Flyer" ? state?.size?.name : `${state?.size?.width} x ${state?.size?.height}`,
        papertype: state?.paperType[0] && state?.paperType[0].substr(14, 7),
        folding: state?.folding[0] && state?.folding[0]?.foldingName
      } : productCategory === "ENVELOPE" ? {
        category: 'envelop',
        product: state?.category?.productType,
        window: state?.window[0] && state?.window[0].windowName
      } : productCategory === "LETTERHEAD" ? {
        category: 'letterhead',
        product: state?.category?.productType,
      } : {
        category: 'sticker',
        product: 'Sicker',
        size: `${state?.size?.width} x ${state?.size?.height}`,
        shape: shape
      })
    }

  }, [state])

  useEffect(() => {
    let newPriceChartArray = priceChart;
    setSliceArray(newPriceChartArray?.slice(0, 5));
  }, [priceChart])

  useEffect(() => {
    if (productId != undefined) {
      dispatch(getProductById(productId, setAnimation));
    }
  }, [])

  useEffect(() => {
    setflag(true);
    dispatch(getPriceChartOnEdited(setPriceChartAnimation, defaultValuesObject, setSelectedPriceChart));
  }, [values, state]);

  useEffect(() => {
    setSelectedSize(i18n.language == "en" ? cartItem?.size : cartItem.size_chi);
    setSelectedCorner(i18n.language == "en" ? (cartItem?.corner && cartItem?.corner) : ((cartItem?.corner_chi && cartItem?.corner_chi)));
    setSelectFinishing(i18n.language == "en" ? (cartItem?.finishing && cartItem?.finishing) : cartItem?.finishing_chi && cartItem?.finishing_chi);
    setSelectSpotUv(i18n.language == "en" ? cartItem?.spotUV : cartItem?.spotUV_chi);
    setSelectedPriceChart(cartItem?.priceChart && cartItem?.priceChart);
    setPaperTypeCoverPages(i18n.language == "en" ? (cartItem?.paperType && cartItem?.paperType) : (cartItem?.paperType_chi && cartItem?.paperType_chi));
    setPaperTypeInnerPages(i18n.language == "en" ? (cartItem?.paperType && "Woodfree paper (140 gsm)") : (cartItem?.paperType && "書紙(140 gsm)"));
    setNoOfPagesCoverPages(i18n.language == "en" ? (cartItem?.numberOfPages && cartItem?.numberOfPages[0]?.number[0]) : (cartItem?.numberOfPages_chi && cartItem?.numberOfPages_chi[0]?.number[0]));
    setNoOfPagesInnerPages(i18n.language == "en" ? (cartItem?.numberOfPages && cartItem?.numberOfPages[1]?.number[0]) : (cartItem?.numberOfPages_chi && cartItem?.numberOfPages_chi[1]?.number[0]));
    setAllCardsPaperType(i18n.language == "en" ? (cartItem?.paperType && cartItem?.paperType) : (cartItem?.paperType_chi && cartItem?.paperType_chi));
    setNumberOfSides(i18n.language == "en" ? (cartItem?.numberOfSides && cartItem?.numberOfSides) : ((cartItem?.numberOfSides_chi && cartItem?.numberOfSides_chi)));
    setSelectedCut(i18n.language == "en" ? (cartItem?.cut && cartItem?.cut) : (cartItem?.cut_chi && cartItem?.cut_chi));
    setSelectedFolding(i18n.language == "en" ? (cartItem?.folding && cartItem?.folding) : (cartItem?.folding_chi && cartItem?.folding_chi));
    setSelectedWindow(i18n.language == "en" ? (cartItem?.window && cartItem?.window) : (cartItem?.window_chi && cartItem?.window_chi));
  }, [i18n.language])




  useEffect(() => {
    if (state && productId != undefined) {
      setShape(cartItem?.category?.productType);
      setSelectedSize(i18n.language == "en" ? cartItem?.size : cartItem.size_chi);
      setSelectedCorner(i18n.language == "en" ? (cartItem?.corner && cartItem?.corner) : ((cartItem?.corner_chi && cartItem?.corner_chi)));
      setSelectFinishing(i18n.language == "en" ? (cartItem?.finishing && cartItem?.finishing) : cartItem?.finishing_chi && cartItem?.finishing_chi);
      setSelectSpotUv(i18n.language == "en" ? cartItem?.spotUV : cartItem?.spotUV_chi);
      setSelectedPriceChart(cartItem?.priceChart && cartItem?.priceChart);
      setPaperTypeCoverPages(i18n.language == "en" ? (cartItem?.paperType && cartItem?.paperType) : (cartItem?.paperType_chi && cartItem?.paperType_chi));
      setPaperTypeInnerPages(i18n.language == "en" ? (cartItem?.paperType && "Woodfree paper (140 gsm)") : (cartItem?.paperType && "書紙(140 gsm)"));
      setNoOfPagesCoverPages(i18n.language == "en" ? (cartItem?.numberOfPages && cartItem?.numberOfPages[0]?.number[0]) : (cartItem?.numberOfPages_chi && cartItem?.numberOfPages_chi[0]?.number[0]));
      setNoOfPagesInnerPages(i18n.language == "en" ? (cartItem?.numberOfPages && cartItem?.numberOfPages[1]?.number[0]) : (cartItem?.numberOfPages_chi && cartItem?.numberOfPages_chi[1]?.number[0]));
      setAllCardsPaperType(i18n.language == "en" ? (cartItem?.paperType && cartItem?.paperType) : (cartItem?.paperType_chi && cartItem?.paperType_chi));
      setNumberOfSides(i18n.language == "en" ? (cartItem?.numberOfSides && cartItem?.numberOfSides) : ((cartItem?.numberOfSides_chi && cartItem?.numberOfSides_chi)));
      setSelectedCut(i18n.language == "en" ? (cartItem?.cut && cartItem?.cut) : (cartItem?.cut_chi && cartItem?.cut_chi));
      setSelectedFolding(i18n.language == "en" ? (cartItem?.folding && cartItem?.folding) : (cartItem?.folding_chi && cartItem?.folding_chi));
      setSelectedWindow(i18n.language == "en" ? (cartItem?.window && cartItem?.window) : (cartItem?.window_chi && cartItem?.window_chi));
    }
  }, [state])

  // useEffect(() => {
  //   if (item) {
  //     setShape(item?.category?.productType);
  //     setSelectedSize(item?.size && item?.size[0]);
  //     setSelectedCorner(item?.corner && item?.corner[0]);
  //     setSelectFinishing(item?.finishing && item?.finishing[0]);
  //     setSelectSpotUv(item?.spotUV && item?.spotUV[0]);
  //     setSelectedPriceChart(item?.priceChart[0] && item?.priceChart[0]);
  //     setPaperTypeCoverPages(item?.paperType && item?.paperType[0]);
  //     setPaperTypeInnerPages(item?.paperType && item?.paperType[1]);
  //     setNoOfPagesCoverPages(item?.numberOfPages && item?.numberOfPages[0]?.number[0]);
  //     setNoOfPagesInnerPages(item?.numberOfPages && item?.numberOfPages[1]?.number[0]);
  //     setAllCardsPaperType(item?.paperType && item?.paperType[0]);
  //     setNumberOfSides(item?.numberOfSides && item?.numberOfSides[0]);
  //     setSelectedCut(item?.cut && item?.cut[0]);
  //     setSelectedFolding(item?.folding && item?.folding[0]);
  //     setSelectedWindow(item?.window && item?.window[0]);
  //   }
  // }, [item])

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const sliceData = () => {
    // setSliceArray(priceChart);
    setSliceArray((prev) => {
      return priceChart
    })
    // setSelectedPriceChart(cartItem?.priceChart && cartItem?.priceChart);
    setflag(false);
  }

  const goBack = () => {
    navigation.goBack();
  };

  const handleChange = (value) => {
    setRemarks(value);
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleAddFileUrl = (values) => {
    setInitialValuesAddUrl(values);
    const retrieveArray = values?.url?.map(item => item.url_link);
    setDesignUrl(retrieveArray);
  }


  const handleAddToCart = () => {
    // const obj = {
    //   productId: state?._id,
    //   image: state?.image[0],
    //   title: state?.title,
    //   category: state?.category,
    //   size: selectedSize,
    //   priceChart: selectedPriceChart,
    //   designUrl: designUrl,
    //   designFileUrl: result,
    //   preview: preview,
    //   numberOfPages: state?.numberOfPages[0] ? [{ name: state?.numberOfPages && state?.numberOfPages[0]?.pageName, number: [noOfPagesCoverPages] }, { name: state?.numberOfPages && state?.numberOfPages[1]?.pageName, number: [noOfPagesInnerPages] }] : undefined,
    //   cut: selectedCut,
    //   window: selectedWindow,
    //   folding: selectedFolding,
    //   paperType: allCardsPaperType,
    //   spotUV: selectSpotUv,
    //   corner: selectedCorner,
    //   finishing: selectFinishing,
    //   remarks: remarks,
    //   cut: selectedCut,
    //   sendByMail: selectedUpload == "email" ? true: false
    // }
    const obj = {
      productId: state?._id,
      image: state?.image[0],
      title: state?.title,
      remarks: remarks,
      designUrl: designUrl,
      designFileUrl: result,
      priceChart: selectedPriceChart,
      preview: preview,
      category: state?.category,
      sendByMail: selectedUpload == "email" ? true : false,
      size: i18n.language == "eng" ? selectedSize : { ...selectedSize, name: chi_eng[selectedSize.name] },
      size_chi: i18n.language == "chi" ? selectedSize : { ...selectedSize, name: getObjKey(chi_eng, chi_eng[selectedSize.name]) },

      numberOfPages: i18n.language == "eng" ? (state?.numberOfPages[0] ?
        [
          { state: state?.numberOfPages && state?.numberOfPages[0]?.pageName, number: [noOfPagesCoverPages] },
          { state: state?.numberOfPages && state?.numberOfPages[1]?.pageName, number: [noOfPagesInnerPages] }
        ] : undefined) : (state?.numberOfPages[0] ?
          [
            { name: state?.numberOfPages && chi_eng[state?.numberOfPages[0]?.pageName], number: [chi_eng[noOfPagesCoverPages]] },
            { name: state?.numberOfPages && chi_eng[state?.numberOfPages[1]?.pageName], number: [chi_eng[noOfPagesInnerPages]] }
          ] : undefined),

      numberOfPages_chi: i18n.language == "chi" ? (state?.numberOfPages[0] ?
        [
          { name: state?.numberOfPages && getObjKey(chi_eng, chi_eng[state?.numberOfPages[0]?.pageName]), number: [noOfPagesCoverPages] },
          { name: state?.numberOfPages && getObjKey(chi_eng, chi_eng[state?.numberOfPages[1]?.pageName]), number: [noOfPagesInnerPages] }
        ] : undefined) : (state?.numberOfPages[0] ?
          [
            { name: state?.numberOfPages && getObjKey(chi_eng, chi_eng[state?.numberOfPages[0]?.pageName]), number: [getObjKey(chi_eng, chi_eng[noOfPagesCoverPages])] },
            { name: state?.numberOfPages && getObjKey(chi_eng, chi_eng[state?.numberOfPages[1]?.pageName]), number: [getObjKey(chi_eng, chi_eng[noOfPagesInnerPages])] }
          ] : undefined),
      // cut: selectedCut,
      window: i18n.language == "eng" ? selectedWindow : selectedWindow && { ...selectedWindow, windowName: chi_eng[selectedWindow.windowName] },
      window_chi: i18n.language == "chi" ? selectedWindow : selectedWindow && { ...selectedWindow, windowName: getObjKey(chi_eng, chi_eng[selectedWindow.windowName]) },
      folding: i18n.language == "eng" ? selectedFolding : selectedFolding && { ...selectedFolding, foldingName: chi_eng[selectedFolding.foldingName] },
      folding_chi: i18n.language == "chi" ? selectedFolding : selectedFolding && { ...selectedFolding, foldingName: getObjKey(chi_eng, chi_eng[selectedFolding.foldingName]) },
      paperType: i18n.language == "eng" ? allCardsPaperType : chi_eng[allCardsPaperType],
      paperType_chi: i18n.language == "chi" ? allCardsPaperType : getObjKey(chi_eng, chi_eng[allCardsPaperType]),
      spotUV: i18n.language == "eng" ? selectSpotUv : chi_eng[selectSpotUv],
      spotUV_chi: i18n.language == "chi" ? selectSpotUv : getObjKey(chi_eng, chi_eng[selectSpotUv]),
      corner_chi: i18n.language == "chi" ? selectedCorner : selectedCorner && { ...selectedCorner, cornerName: getObjKey(chi_eng, chi_eng[selectedCorner.cornerName]), cornerDescription: getObjKey(chi_eng, chi_eng[selectedCorner.cornerDescription]) },
      corner: i18n.language == "eng" ? selectedCorner : selectedCorner && { ...selectedCorner, cornerName: chi_eng[selectedCorner.cornerName], cornerDescription: chi_eng[selectedCorner.cornerDescription] },
      finishing: i18n.language == "eng" ? selectFinishing : chi_eng[selectFinishing],
      finishing_chi: i18n.language == "chi" ? selectFinishing : getObjKey(chi_eng, chi_eng[selectFinishing]),
      cut: i18n.language == "eng" ? selectedCut : selectedCut && { ...selectedCut, cutName: chi_eng[selectedCut.cutName] },
      cut_chi: i18n.language == "chi" ? selectedCut : selectedCut && { ...selectedCut, cutName: getObjKey(chi_eng, chi_eng[selectedCut.cutName]) },
      numberOfSides: i18n.language == "eng" ? numberOfSides : chi_eng[numberOfSides],
      numberOfSides_chi: i18n.language == "chi" ? numberOfSides : getObjKey(chi_eng, chi_eng[numberOfSides]),
    }
    Object.keys(obj).forEach(key => {
      if (obj[key] === undefined) {
        delete obj[key];
      }
    });
    dispatch(editCartItem(setAddToCartAnimation, cartProductId, obj, navigate));
  }

  return (
    <View style={styles.container}>
      <EditedSingleProductScreen
        animation={animation}
        sliceData={sliceData}
        flag={flag}
        sliceArray={sliceArray}
        priceChartAnimation={priceChartAnimation}
        item={state}
        categoryTitle={t("update_cart_item_header")}
        category={productCategory}
        goBack={goBack}
        refRBSheet={refRBSheet}
        urlRBSheet={urlRBSheet}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
        selectedCorner={selectedCorner && selectedCorner}
        setSelectedCorner={setSelectedCorner}
        selectedPriceChart={selectedPriceChart}
        setSelectedPriceChart={setSelectedPriceChart}
        preview={preview}
        setPreview={setPreview}
        remarks={remarks}
        setRemarks={setRemarks}
        handleAddToCart={handleAddToCart}
        handleChange={handleChange}
        finishingRBSheet={finishingRBSheet}
        selectFinishing={selectFinishing}
        setSelectFinishing={setSelectFinishing}
        sizeRBSheet={sizeRBSheet}
        spotUvRBSheet={spotUvRBSheet}
        selectSpotUv={selectSpotUv}
        setSelectSpotUv={setSelectSpotUv}
        selectedUpload={selectedUpload}
        setSelectedUpload={setSelectedUpload}
        result={result}
        setResult={setResult}
        initialValuesAddUrl={initialValuesAddUrl}
        handleAddFileUrl={handleAddFileUrl}
        paperTypeCoverPagesRBSheet={paperTypeCoverPagesRBSheet}
        paperTypeCoverPages={paperTypeCoverPages}
        setPaperTypeCoverPages={setPaperTypeCoverPages}
        paperTypeInnerPagesRBSheet={paperTypeInnerPagesRBSheet}
        paperTypeInnerPages={paperTypeInnerPages}
        setPaperTypeInnerPages={setPaperTypeInnerPages}
        noOfPagesCoverPagesRBSheet={noOfPagesCoverPagesRBSheet}
        noOfPagesCoverPages={noOfPagesCoverPages}
        setNoOfPagesCoverPages={setNoOfPagesCoverPages}
        noOfPagesInnerPagesRBSheet={noOfPagesInnerPagesRBSheet}
        noOfPagesInnerPages={noOfPagesInnerPages}
        setNoOfPagesInnerPages={setNoOfPagesInnerPages}
        allCardsPaperTypeRBSheet={allCardsPaperTypeRBSheet}
        allCardsPaperType={allCardsPaperType}
        setAllCardsPaperType={setAllCardsPaperType}
        numberOfSidesRBSheet={numberOfSidesRBSheet}
        numberOfSides={numberOfSides}
        setNumberOfSides={setNumberOfSides}
        selectedCut={selectedCut}
        setSelectedCut={setSelectedCut}
        selectedFolding={selectedFolding}
        setSelectedFolding={setSelectedFolding}
        selectedWindow={selectedWindow}
        setSelectedWindow={setSelectedWindow}
        addToCartAnimation={addToCartAnimation}
        setValues={setValues}
        values={values}
        defaultValuesObject={defaultValuesObject}
        chi_eng={chi_eng}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
});

export default EditedSingleProductContainer;
