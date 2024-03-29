import React, { useEffect, useRef, useState } from 'react';
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addToCart, editCartItem } from "../store/actions/cartAction";
import { getProductById, getPriceChartOnEdited } from "../store/actions/productList";
import EditedSingleProductScreen from '../Screens/EditedSingleProductScreen';
import { colors } from '../Utils/theme';

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
    // { url: [
    //   { url_link: '12' },
    //   { url_link: '123' }
    // ]},
    {
      url: cartItem?.designUrl?.length > 0 ? cartItem?.designUrl?.map((item)=>{return {url_link: item}}) : [{url_link: ''}]
    }
  
    )
  const [priceChartAnimation, setPriceChartAnimation] = useState(false);
  const [addToCartAnimation, setAddToCartAnimation] = useState(false);
  const [selectedUpload, setSelectedUpload] = useState('uploadFile');
  const [shape, setShape] = useState("");
  const [selectedSize, setSelectedSize] = useState(cartItem?.size);
  const [selectedCorner, setSelectedCorner] = useState(cartItem?.corner && cartItem?.corner);
  const [selectFinishing, setSelectFinishing] = useState(cartItem?.finishing && cartItem?.finishing);
  const [selectSpotUv, setSelectSpotUv] = useState(cartItem?.spotUV);
  const [selectedPriceChart, setSelectedPriceChart] = useState(cartItem?.priceChart && cartItem?.priceChart);
  const [paperTypeCoverPages, setPaperTypeCoverPages] = useState(cartItem?.paperType && cartItem?.paperType);
  const [paperTypeInnerPages, setPaperTypeInnerPages] = useState(cartItem?.paperType && "Woodfree paper (140 gsm)");
  const [noOfPagesCoverPages, setNoOfPagesCoverPages] = useState(cartItem?.numberOfPages && cartItem?.numberOfPages[0]?.number[0]);
  const [noOfPagesInnerPages, setNoOfPagesInnerPages] = useState(cartItem?.numberOfPages && cartItem?.numberOfPages[1]?.number[0]);




  const [allCardsPaperType, setAllCardsPaperType] = useState(cartItem?.paperType && cartItem?.paperType);
  const [numberOfSides, setNumberOfSides] = useState(cartItem?.numberOfSides && cartItem?.numberOfSides);

  const [selectedCut, setSelectedCut] = useState(cartItem?.cut && cartItem?.cut);
  const [selectedFolding, setSelectedFolding] = useState(cartItem?.folding && cartItem?.folding);

  const [selectedWindow, setSelectedWindow] = useState(cartItem?.window && cartItem?.window);
  const [preview, setPreview] = useState(true);
  const [remarks, setRemarks] = useState(cartItem?.remarks);
  const [result, setResult] = useState(cartItem?.designFileUrl?.length > 0 ? cartItem?.designFileUrl :[]);

  const defaultValuesObject = productCategory == "BUSINESS_CARD" ? {
    category: 'businesscard',
    product: cartItem?.category?.productType,
    size: `${selectedSize?.width} x ${selectedSize?.height}`,
    corner: `${selectedCorner?.cornerName} Corner`,
    spotuvside: selectSpotUv
  } : productCategory == "BOOKLET" ? {
    category: 'booklet',
    product: cartItem?.category?.productType,
    size: selectedSize?.name,
    innerpage: noOfPagesInnerPages
  } : productCategory === "POSTER" ? {
    category: 'poster',
    product: cartItem?.category?.productType,
    size: selectedSize?.name,
    papertype: allCardsPaperType?.substr(14, 7),
    sides: numberOfSides
  } : productCategory === "FLYERS_LEAFLET" ? {
    category: 'flyer',
    product: cartItem?.category?.productType,
    size: cartItem?.category?.name == "Rectangular Flyer" ? selectedSize?.name : `${selectedSize?.width} x ${selectedSize?.height}`,
    papertype: allCardsPaperType?.substr(14, 7),
    folding: selectedFolding?.foldingName
  } : productCategory === "ENVELOPE" ? {
    category: 'envelop',
    product: cartItem?.category?.productType,
    window: selectedWindow?.windowName
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
    if (state && productId != undefined) {
      setShape(cartItem?.category?.productType);
      setSelectedSize(cartItem?.size);
      setSelectedCorner(cartItem?.corner && cartItem?.corner);
      setSelectFinishing(cartItem?.finishing && cartItem?.finishing);
      setSelectSpotUv(cartItem?.spotUV && cartItem?.spotUV);
      setSelectedPriceChart(cartItem?.priceChart && cartItem?.priceChart);
      setPaperTypeCoverPages(cartItem?.paperType && cartItem?.paperType);
      setPaperTypeInnerPages(cartItem?.paperType && "Woodfree paper (140 gsm)");
      setNoOfPagesCoverPages(cartItem?.numberOfPages && cartItem?.numberOfPages[0]?.number[0]);
      setNoOfPagesInnerPages(cartItem?.numberOfPages && cartItem?.numberOfPages[1]?.number[0]);
      setAllCardsPaperType(cartItem?.paperType && cartItem?.paperType);
      setNumberOfSides(cartItem?.numberOfSides && cartItem?.numberOfSides);
      setSelectedCut(cartItem?.cut && cartItem?.cut);
      setSelectedFolding(cartItem?.folding && cartItem?.folding);
      setSelectedWindow(cartItem?.window && cartItem?.window);
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
    const obj = {
      productId: state?._id,
      image: state?.image[0],
      title: state?.title,
      category: state?.category,
      size: selectedSize,
      priceChart: selectedPriceChart,
      designUrl: designUrl,
      designFileUrl: result,
      preview: preview,
      numberOfPages: state?.numberOfPages[0] ? [{ name: state?.numberOfPages && state?.numberOfPages[0]?.pageName, number: [noOfPagesCoverPages] }, { name: state?.numberOfPages && state?.numberOfPages[1]?.pageName, number: [noOfPagesInnerPages] }] : undefined,
      cut: selectedCut,
      window: selectedWindow,
      folding: selectedFolding,
      paperType: allCardsPaperType,
      spotUV: selectSpotUv,
      corner: selectedCorner,
      finishing: selectFinishing,
      remarks: remarks,
      cut: selectedCut,
      sendByMail: selectedUpload == "email" ? true: false
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
        categoryTitle={"Updated Cart Item"}
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
