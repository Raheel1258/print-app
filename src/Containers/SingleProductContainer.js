import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addToCart, addToCartAnotherDesign } from "../store/actions/cartAction";
import { getPriceChart } from "../store/actions/productList";
import SingleProductScreen from '../Screens/SingleProductScreen';
import { chi_eng } from "../Utils/mockData";
import Storage from '../Utils/Storage';
import { colors } from '../Utils/theme';
import i18n from 'i18next'

const SingleProductContainer = ({ route }) => {

  const accountRBSheet = useRef();
  const isFocused = useIsFocused();
  const { t } = useTranslation();
  const [focused, setFocused] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const { item, categoryTitle, productCategory } = route.params;
  const [finalObjCart, setFinalObjCart] = useState({});


  const getObjKey = (obj, value) => {
    return Object.keys(obj).find(key => obj[key] === value);
  }

  const priceChart = useSelector(state => state?.productList?.priceChart);
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
  const [anotherDesign, setAnotherDesign] = useState(false);
  const [designUrl, setDesignUrl] = useState([]);
  const [initialValuesAddUrl, setInitialValuesAddUrl] = useState({ url: [{ url_link: '' }] })
  const [priceChartAnimation, setPriceChartAnimation] = useState(false);
  const [addToCartAnimation, setAddToCartAnimation] = useState(false);
  const [selectedUpload, setSelectedUpload] = useState('uploadFile');
  const [shape, setShape] = useState(item?.category?.productType);
  const [selectedSize, setSelectedSize] = useState(i18n.language == "en" ? (item?.size && item?.size[0]) : (item?.size_chi && item?.size_chi[0]));
  const [selectedCorner, setSelectedCorner] = useState(i18n.language == "en" ? (item?.corner && item?.corner[0]) : (item?.corner_chi && item?.corner_chi[0]));
  const [selectFinishing, setSelectFinishing] = useState(i18n.language == "en" ? (item?.finishing && item?.finishing[0]) : (item?.finishing_chi && item?.finishing_chi[0]));
  const [selectSpotUv, setSelectSpotUv] = useState(i18n.language == "en" ? (item?.spotUV && item?.spotUV[0]) : (item?.spotUV_chi && item?.spotUV_chi[0]));
  const [selectedPriceChart, setSelectedPriceChart] = useState(priceChart && priceChart[0]);
  const [paperTypeCoverPages, setPaperTypeCoverPages] = useState(i18n.language == "en" ? (item?.paperType && item?.paperType[0]) : (item?.paperType_chi && item?.paperType_chi[0]));
  const [paperTypeInnerPages, setPaperTypeInnerPages] = useState(i18n.language == "en" ? (item?.paperType && item?.paperType[1]) : (item?.paperType_chi && item?.paperType_chi[1]));
  const [noOfPagesCoverPages, setNoOfPagesCoverPages] = useState(i18n.language == "en" ? (item?.numberOfPages && item?.numberOfPages[0]?.number[0]) : (item?.numberOfPages_chi && item?.numberOfPages_chi[0]?.number[0]));
  const [noOfPagesInnerPages, setNoOfPagesInnerPages] = useState(i18n.language == "en" ? (item?.numberOfPages && item?.numberOfPages[1]?.number[0]) : (item?.numberOfPages_chi && item?.numberOfPages_chi[1]?.number[0]));

  const [allCardsPaperType, setAllCardsPaperType] = useState(i18n.language == "en" ? (item?.paperType && item?.paperType[0]) : (item?.paperType_chi && item?.paperType_chi[0]));
  const [numberOfSides, setNumberOfSides] = useState(i18n.language == "en" ? (item?.numberOfSides && item?.numberOfSides[0]) : (item?.numberOfSides_chi && item?.numberOfSides_chi[0]));

  const [selectedCut, setSelectedCut] = useState(i18n.language == "en" ? (item?.cut && item?.cut[0]) : (item?.cut_chi && item?.cut_chi[0]));
  const [selectedFolding, setSelectedFolding] = useState(i18n.language == "en" ? (item?.folding && item?.folding[0]) : (item?.folding_chi && item?.folding_chi[0]));

  const [selectedWindow, setSelectedWindow] = useState(i18n.language == "en" ? item?.window && item?.window[0] : item?.window_chi && item?.window_chi[0]);
  const [preview, setPreview] = useState(true);
  const [remarks, setRemarks] = useState('');
  const [result, setResult] = useState([]);

  console.log('slescted folder', selectedCut)

  


  const defaultValuesObject = productCategory == "BUSINESS_CARD" ? {
    category: 'businesscard',
    product: item?.category?.productType,
    size: `${selectedSize?.width} x ${selectedSize?.height}`,
    corner: `${chi_eng[selectedCorner?.cornerName]} Corner`,
    spotuvside: chi_eng[selectSpotUv] ? "1 side" : chi_eng[selectSpotUv]
  } : productCategory == "BOOKLET" ? {
    category: 'booklet',
    product: item?.category?.productType,
    size: selectedSize?.name,
    innerpage: chi_eng[noOfPagesInnerPages]
  } : productCategory === "POSTER" ? {
    category: 'poster',
    product: item?.category?.productType,
    size: selectedSize?.name,
    papertype: chi_eng[allCardsPaperType].substr(14, 7),
    sides: chi_eng[numberOfSides]
  } : productCategory === "FLYERS_LEAFLET" ? {
    category: 'flyer',
    product: item?.category?.productType,
    size: item?.index == "0" ? selectedSize?.name : `${selectedSize?.width} x ${selectedSize?.height}`,
    papertype: chi_eng[allCardsPaperType].substr(14, 7),
    folding: chi_eng[selectedFolding?.foldingName]
  } : productCategory === "ENVELOPE" ? {
    category: 'envelop',
    product: item?.category?.productType,
    window: chi_eng[selectedWindow?.windowName]
  } : productCategory === "LETTERHEAD" ? {
    category: 'letterhead',
    product: item?.category?.productType,
  } : {
    category: 'sticker',
    product: 'Sicker',
    size: `${selectedSize?.width} x ${selectedSize?.height}`,
    shape: item?.category?.productType
  }
  const [values, setValues] = useState(defaultValuesObject)



  useEffect(() => {
    isFocused &&
      Storage.retrieveData('token').then(token => {
        setUserToken(token);
      });
  }, [isFocused]);

  useEffect(() => {
    setSelectedPriceChart(priceChart && priceChart[0]);
    setSelectedSize(i18n.language == "en" ? (item?.size && item?.size[0]) : (item?.size_chi && item?.size_chi[0]));
    setSelectedCorner(i18n.language == "en" ? (item?.corner && item?.corner[0]) : (item?.corner_chi && item?.corner_chi[0]));
    setSelectFinishing(i18n.language == "en" ? (item?.finishing && item?.finishing[0]) : (item?.finishing_chi && item?.finishing_chi[0]));
    setSelectSpotUv(i18n.language == "en" ? (item?.spotUV && item?.spotUV[0]) : (item?.spotUV_chi && item?.spotUV_chi[0]));
    setAllCardsPaperType(i18n.language == "en" ? (item?.paperType && item?.paperType[0]) : (item?.paperType_chi && item?.paperType_chi[0]));
    setNumberOfSides(i18n.language == "en" ? (item?.numberOfSides && item?.numberOfSides[0]) : (item?.numberOfSides_chi && item?.numberOfSides_chi[0]));
    setSelectedCut(i18n.language == "en" ? (item?.cut && item?.cut[0]) : (item?.cut_chi && item?.cut_chi[0]));
    setSelectedFolding(i18n.language == "en" ? (item?.folding && item?.folding[0]) : (item?.folding_chi && item?.folding_chi[0]));
    setSelectedWindow(i18n.language == "en" ? item?.window && item?.window[0] : item?.window_chi && item?.window_chi[0]);
    setPaperTypeCoverPages(i18n.language == "en" ? (item?.paperType && item?.paperType[0]) : (item?.paperType_chi && item?.paperType_chi[0]));
    setPaperTypeInnerPages(i18n.language == "en" ? (item?.paperType && item?.paperType[1]) : (item?.paperType_chi && item?.paperType_chi[1]));
    setNoOfPagesCoverPages(i18n.language == "en" ? (item?.numberOfPages && item?.numberOfPages[0]?.number[0]) : (item?.numberOfPages_chi && item?.numberOfPages_chi[0]?.number[0]));
    setNoOfPagesInnerPages(i18n.language == "en" ? (item?.numberOfPages && item?.numberOfPages[1]?.number[0]) : (item?.numberOfPages_chi && item?.numberOfPages_chi[1]?.number[0]));
  }, [i18n.language])

  useEffect(() => {
    let newPriceChartArray = priceChart
    setSliceArray(newPriceChartArray?.slice(0, 5));
  }, [priceChart, anotherDesign])

  useEffect(() => {
    dispatch(getPriceChart(setPriceChartAnimation, defaultValuesObject, setSelectedPriceChart));
    setflag(true);
  }, [values]);


  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const sliceData = () => {
    setSliceArray(priceChart);
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
    //   productId: item?._id,
    //   image: item?.image[0],
    //   title: item?.title,
    //   category: item?.category,
    //   size: i18n.language == "eng" ? selectedSize : { ...selectedSize, name: chi_eng[selectedSize.name] },
    //   size_chi: i18n.language == "chi" ? selectedSize : { ...selectedSize, name: getObjKey(chi_eng, chi_eng[selectedSize.name]) },
    //   priceChart: selectedPriceChart,
    //   designUrl: designUrl,
    //   designFileUrl: result,
    //   preview: preview,
    //   numberOfPages: item?.numberOfPages[0] ? [{ name: item?.numberOfPages && item?.numberOfPages[0]?.pageName, number: [noOfPagesCoverPages] }, { name: item?.numberOfPages && item?.numberOfPages[1]?.pageName, number: [noOfPagesInnerPages] }] : undefined,
    //   cut: selectedCut,
    //   window: selectedWindow,
    //   folding: selectedFolding,
    //   paperType: allCardsPaperType,
    //   spotUV: i18n.language == "eng" ? selectSpotUv : chi_eng[selectSpotUv],
    //   spotUV_chi: i18n.language == "chi" ? selectSpotUv : getObjKey(chi_eng, chi_eng[selectSpotUv]),
    //   corner_chi: i18n.language == "chi" ? selectedCorner : selectedCorner && { ...selectedCorner, cornerName: getObjKey(chi_eng, chi_eng[selectedCorner.cornerName]), cornerDescription: getObjKey(chi_eng, chi_eng[selectedCorner.cornerDescription]) },
    //   corner: i18n.language == "eng" ? selectedCorner : selectedCorner && { ...selectedCorner, cornerName: chi_eng[selectedCorner.cornerName], cornerDescription: chi_eng[selectedCorner.cornerDescription] },
    //   finishing: i18n.language == "eng" ? selectFinishing : chi_eng[selectFinishing],
    //   finishing_chi: i18n.language == "chi" ? selectFinishing : getObjKey(chi_eng, chi_eng[selectFinishing]),
    //   remarks: remarks,
    //   cut: selectedCut,
    //   numberOfSides: numberOfSides,
    //   sendByMail: selectedUpload == "email" ? true : false
    // }

    const obj = {
      productId: item?._id,
      image: item?.image[0],
      title: item?.title,
      remarks: remarks,
      designUrl: designUrl,
      designFileUrl: result,
      priceChart: selectedPriceChart,
      preview: preview,
      category: item?.category,
      sendByMail: selectedUpload == "email" ? true : false,
      size: i18n.language == "eng" ? selectedSize : { ...selectedSize, name: chi_eng[selectedSize.name] },
      size_chi: i18n.language == "chi" ? selectedSize : { ...selectedSize, name: getObjKey(chi_eng, chi_eng[selectedSize.name]) },

      numberOfPages: i18n.language == "eng" ? (item?.numberOfPages[0] ?
        [
          { name: item?.numberOfPages && item?.numberOfPages[0]?.pageName, number: [noOfPagesCoverPages] },
          { name: item?.numberOfPages && item?.numberOfPages[1]?.pageName, number: [noOfPagesInnerPages] }
        ] : undefined) : (item?.numberOfPages[0] ?
          [
            { name: item?.numberOfPages && chi_eng[item?.numberOfPages[0]?.pageName], number: [chi_eng[noOfPagesCoverPages]] },
            { name: item?.numberOfPages && chi_eng[item?.numberOfPages[1]?.pageName], number: [chi_eng[noOfPagesInnerPages]] }
          ] : undefined),

      numberOfPages_chi: i18n.language == "chi" ? (item?.numberOfPages[0] ?
        [
          { name: item?.numberOfPages && getObjKey(chi_eng,chi_eng[item?.numberOfPages[0]?.pageName]), number: [noOfPagesCoverPages] },
          { name: item?.numberOfPages && getObjKey(chi_eng,chi_eng[item?.numberOfPages[1]?.pageName]), number: [noOfPagesInnerPages] }
        ] : undefined) : (item?.numberOfPages[0] ?
          [
            { name: item?.numberOfPages && getObjKey(chi_eng,chi_eng[item?.numberOfPages[0]?.pageName]), number: [getObjKey(chi_eng,chi_eng[noOfPagesCoverPages])] },
            { name: item?.numberOfPages && getObjKey(chi_eng,chi_eng[item?.numberOfPages[1]?.pageName]), number: [getObjKey(chi_eng,chi_eng[noOfPagesInnerPages])] }
          ] : undefined),
      // cut: selectedCut,
      window: i18n.language == "eng" ? selectedWindow : selectedWindow && {...selectedWindow, windowName: chi_eng[selectedWindow.windowName]} ,
      window_chi: i18n.language == "chi" ? selectedWindow : selectedWindow && {...selectedWindow, windowName: getObjKey(chi_eng, chi_eng[selectedWindow.windowName])},
      folding: i18n.language == "eng" ? selectedFolding : selectedFolding && {...selectedFolding, foldingName:chi_eng[selectedFolding.foldingName]},
      folding_chi: i18n.language == "chi" ? selectedFolding : selectedFolding && {...selectedFolding, foldingName: getObjKey(chi_eng, chi_eng[selectedFolding.foldingName])},
      paperType: i18n.language == "eng" ? allCardsPaperType : chi_eng[allCardsPaperType],
      paperType_chi: i18n.language == "chi" ? allCardsPaperType : getObjKey(chi_eng, chi_eng[allCardsPaperType]),
      spotUV: i18n.language == "eng" ? selectSpotUv : chi_eng[selectSpotUv],
      spotUV_chi: i18n.language == "chi" ? selectSpotUv : getObjKey(chi_eng, chi_eng[selectSpotUv]),
      corner_chi: i18n.language == "chi" ? selectedCorner : selectedCorner && { ...selectedCorner, cornerName: getObjKey(chi_eng, chi_eng[selectedCorner.cornerName]), cornerDescription: getObjKey(chi_eng, chi_eng[selectedCorner.cornerDescription]) },
      corner: i18n.language == "eng" ? selectedCorner : selectedCorner && { ...selectedCorner, cornerName: chi_eng[selectedCorner.cornerName], cornerDescription: chi_eng[selectedCorner.cornerDescription] },
      finishing: i18n.language == "eng" ? selectFinishing : chi_eng[selectFinishing],
      finishing_chi: i18n.language == "chi" ? selectFinishing : getObjKey(chi_eng, chi_eng[selectFinishing]),
      cut: i18n.language == "eng" ? selectedCut : selectedCut && {...selectedCut, cutName:chi_eng[selectedCut.cutName]},
      cut_chi: i18n.language == "chi" ? selectedCut : selectedCut && {...selectedCut, cutName:getObjKey(chi_eng, chi_eng[selectedCut.cutName])},
      numberOfSides: i18n.language == "eng" ? numberOfSides : chi_eng[numberOfSides],
      numberOfSides_chi: i18n.language == "chi" ? numberOfSides : getObjKey(chi_eng, chi_eng[numberOfSides]),
    }
    Object.keys(obj).forEach(key => {
      if (obj[key] === undefined) {
        delete obj[key];
      }
    });
    console.log("checking before", obj)
    setFinalObjCart(obj);
    if(userToken){
      dispatch(addToCart(setAddToCartAnimation, obj, navigate));
    }
    else{
      accountRBSheet.current.open();
    }


  }

  const handleAnotherDesign = () => {
    const obj = {
      productId: item?._id,
      image: item?.image[0],
      title: item?.title,
      category: item?.category,
      size: selectedSize,
      priceChart: selectedPriceChart,
      designUrl: designUrl,
      designFileUrl: result,
      preview: preview,
      numberOfPages: item?.numberOfPages[0] ? [{ name: item?.numberOfPages && item?.numberOfPages[0]?.pageName, number: [noOfPagesCoverPages] }, { name: item?.numberOfPages && item?.numberOfPages[1]?.pageName, number: [noOfPagesInnerPages] }] : undefined,
      cut: selectedCut,
      window: selectedWindow,
      folding: selectedFolding,
      paperType: allCardsPaperType,
      spotUV: selectSpotUv,
      corner: selectedCorner,
      finishing: selectFinishing,
      remarks: remarks,
      cut: selectedCut,
      numberOfSides: numberOfSides,
      sendByMail: selectedUpload == "email" ? true : false
    }
    Object.keys(obj).forEach(key => {
      if (obj[key] === undefined) {
        delete obj[key];
      }
    });
    if (userToken) {
      dispatch(addToCartAnotherDesign(obj));
      setDesignUrl([]);
      setInitialValuesAddUrl({ url: [{ url_link: '' }] })
      setPriceChartAnimation(false);
      setAddToCartAnimation(false);
      setSelectedUpload('uploadFile');
      setShape(item?.category?.productType);
      setSelectedPriceChart(priceChart && priceChart[0]);
      setSelectedSize(i18n.language == "en" ? (item?.size && item?.size[0]) : (item?.size_chi && item?.size_chi[0]));
      setSelectedCorner(i18n.language == "en" ? (item?.corner && item?.corner[0]) : (item?.corner_chi && item?.corner_chi[0]));
      setSelectFinishing(i18n.language == "en" ? (item?.finishing && item?.finishing[0]) : (item?.finishing_chi && item?.finishing_chi[0]));
      setSelectSpotUv(i18n.language == "en" ? (item?.spotUV && item?.spotUV[0]) : (item?.spotUV_chi && item?.spotUV_chi[0]));
      setAllCardsPaperType(i18n.language == "en" ? (item?.paperType && item?.paperType[0]) : (item?.paperType_chi && item?.paperType_chi[0]));
      setNumberOfSides(i18n.language == "en" ? (item?.numberOfSides && item?.numberOfSides[0]) : (item?.numberOfSides_chi && item?.numberOfSides_chi[0]));
      setSelectedCut(i18n.language == "en" ? (item?.cut && item?.cut[0]) : (item?.cut_chi && item?.cut_chi[0]));
      setSelectedFolding(i18n.language == "en" ? (item?.folding && item?.folding[0]) : (item?.folding_chi && item?.folding_chi[0]));
      setSelectedWindow(i18n.language == "en" ? item?.window && item?.window[0] : item?.window_chi && item?.window_chi[0]);
      setPaperTypeCoverPages(i18n.language == "en" ? (item?.paperType && item?.paperType[0]) : (item?.paperType_chi && item?.paperType_chi[0]));
      setPaperTypeInnerPages(i18n.language == "en" ? (item?.paperType && item?.paperType[1]) : (item?.paperType_chi && item?.paperType_chi[1]));
      setNoOfPagesCoverPages(i18n.language == "en" ? (item?.numberOfPages && item?.numberOfPages[0]?.number[0]) : (item?.numberOfPages_chi && item?.numberOfPages_chi[0]?.number[0]));
      setNoOfPagesInnerPages(i18n.language == "en" ? (item?.numberOfPages && item?.numberOfPages[1]?.number[0]) : (item?.numberOfPages_chi && item?.numberOfPages_chi[1]?.number[0]));
      setPreview(true);
      setRemarks('');
      setResult([]);
      setAnotherDesign(true);
    }
    else {
      accountRBSheet.current.open();
    }
  }

  return (
    <View style={styles.container}>
      <SingleProductScreen
        item={item}
        animation={animation}
        sliceData={sliceData}
        flag={flag}
        sliceArray={sliceArray}
        priceChartAnimation={priceChartAnimation}
        categoryTitle={categoryTitle}
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
        accountRBSheet={accountRBSheet}
        focused={focused}
        setFocused={setFocused}
        navigate={navigate}
        handleAnotherDesign={handleAnotherDesign}
        productData={finalObjCart}
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

export default SingleProductContainer;
