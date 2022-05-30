import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import {addToCart} from "../store/actions/cartAction";
import {getPriceChart} from "../store/actions/productList";
import SingleProductScreen from '../Screens/SingleProductScreen';
import { colors } from '../Utils/theme';

const SingleProductContainer = ({ route }) => {
 
  const { t } = useTranslation();
  const { item, categoryTitle, category } = route.params;
  console.log("item" , item?._id);
  const priceChartParameter = "";

  // const state = useSelector(state => state)

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
  
  const [designUrl,setDesignUrl] = useState([]);
  const [initialValuesAddUrl, setInitialValuesAddUrl] = useState({url:[{url_link:''}]})
  const [priceChartAnimation, setPriceChartAnimation] = useState(false);
  const [addToCartAnimation, setAddToCartAnimation] = useState(false);
  const [selectedUpload, setSelectedUpload] = useState (t('upload_file'));
  const [shape, setShape] = useState(item?.category == 'STICKERS_LABEL' ?? item?.category?.productType);
  const [selectedSize, setSelectedSize] = useState(item?.size && item?.size[0]);
  const [selectedCorner, setSelectedCorner] = useState(item?.corner && item?.corner[0]);
  const [selectFinishing, setSelectFinishing] = useState(item?.finishing && item?.finishing[0]);
  const [selectSpotUv, setSelectSpotUv] = useState(item?.spotUV && item?.spotUV[0]);
  const [selectedPriceChart, setSelectedPriceChart] = useState(item?.priceChart[0] && item?.priceChart[0]);
  const [paperTypeCoverPages , setPaperTypeCoverPages] = useState(item?.paperType && item?.paperType[0]);
  const [paperTypeInnerPages , setPaperTypeInnerPages] = useState(item?.paperType && item?.paperType[1]);
  const [noOfPagesCoverPages , setNoOfPagesCoverPages] = useState(item?.numberOfPages && item?.numberOfPages[0]?.number[0]);
  const [noOfPagesInnerPages , setNoOfPagesInnerPages] = useState(item?.numberOfPages && item?.numberOfPages[1]?.number[0]);



  const [allCardsPaperType , setAllCardsPaperType ] = useState(item?.paperType && item?.paperType[0]);
  const [numberOfSides, setNumberOfSides] = useState(item?.numberOfSides && item?.numberOfSides[0]);

  const [selectedCut, setSelectedCut] = useState(item?.cut && item?.cut[0]);
  const [selectedFolding, setSelectedFolding] = useState(item?.folding && item?.folding[0]);

  const [selectedWindow , setSelectedWindow] = useState(item?.window && item?.window[0]);
  const [preview, setPreview] = useState(true);
  const [remarks, setRemarks] = useState('');
  const [result, setResult] = useState([]);

  const getPriceChartApiParameter = () => {
    if(category == "BUSINESS_CARD" && item?.category?.productType != "BizCard-spot UV"){
      priceChartParameter = `businesscard?product=${item?.category?.productType}?size=${selectedSize}?corner?${selectedCorner}`;
    }
    else if(category == "BUSINESS_CARD" && item?.category?.productType == "BizCard-spot UV"){
      priceChartParameter = `businesscard?product=${item?.category?.productType}?size=${selectedSize}?corner?${selectedCorner}?spotuvside=${selectSpotUv}`;
    }
    else if(category == "BOOKLET"){
      priceChartParameter = `booklet?product=${item?.category?.productType}?size=${selectedSize}?innerpage?${noOfPagesInnerPages}`;
    }
    else if(category == "POSTER"){
      priceChartParameter = `poster?product=${item?.category?.productType}?size=${selectedSize}?papertype?${allCardsPaperType}?sides=${numberOfSides}`;
    }
    else if(category == "FLYERS_LEAFLET" && item?.category?.productType != "Flyer-Foldable"){
      priceChartParameter = `flyer?product=${item?.category?.productType}?size=${selectedSize}?papertype?${allCardsPaperType}`;
    }
    else if(category == "FLYERS_LEAFLET" && item?.category?.productType == "Flyer-Foldable"){
      priceChartParameter = `flyer?product=${item?.category?.productType}?size=${selectedSize}?papertype?${allCardsPaperType}?folding=${selectedFolding}`;
    }
    else if(category == "ENVELOPE"){
      priceChartParameter = `envelop?product=${item?.category?.productType}?window=${selectedWindow}`;
    }
    else if(category == "LETTERHEAD"){
      priceChartParameter = `letterhead?product=${item?.category?.productType}`;
    }
    else {
      priceChartParameter = `sticker?product=${item?.category?.productType}?size=${selectedSize}?shape=${shape}`;
    }
  }

  // useEffect(()=>{
  //   dispatch(getPriceChart(setPriceChartAnimation, priceChartParameter));
  // },[]);

  // useEffect(() => {
  //   if(state){
  //   const [shape, setShape] = useState(item?.category == 'STICKERS_LABEL' ?? item?.category?.productType);
  // const [selectedSize, setSelectedSize] = useState(item?.size && item?.size[0]);
  // const [selectedCorner, setSelectedCorner] = useState(item?.corner && item?.corner[0]);
  // const [selectFinishing, setSelectFinishing] = useState(item?.finishing && item?.finishing[0]);
  // const [selectSpotUv, setSelectSpotUv] = useState(item?.spotUV && item?.spotUV[0]);
  // const [selectedPriceChart, setSelectedPriceChart] = useState(item?.priceChart[0] && item?.priceChart[0]);
  // const [paperTypeCoverPages , setPaperTypeCoverPages] = useState(item?.paperType && item?.paperType[0]);
  // const [paperTypeInnerPages , setPaperTypeInnerPages] = useState(item?.paperType && item?.paperType[1]);
  // const [noOfPagesCoverPages , setNoOfPagesCoverPages] = useState(item?.numberOfPages && item?.numberOfPages[0]?.number[0]);
  // const [noOfPagesInnerPages , setNoOfPagesInnerPages] = useState(item?.numberOfPages && item?.numberOfPages[1]?.number[0]);
  // const [allCardsPaperType , setAllCardsPaperType ] = useState(item?.paperType && item?.paperType[0]);
  // const [numberOfSides, setNumberOfSides] = useState(item?.numberOfSides && item?.numberOfSides[0]);
  // const [selectedCut, setSelectedCut] = useState(item?.cut && item?.cut[0]);
  // const [selectedFolding, setSelectedFolding] = useState(item?.folding && item?.folding[0]);
  // const [selectedWindow , setSelectedWindow] = useState(item?.window && item?.window[0]);
  //   }
  // },[state])

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
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
    console.log("val" , values)
    setInitialValuesAddUrl(values);
    const retrieveArray = values?.url?.map(item => item.url_link);
    setDesignUrl(retrieveArray);
  }

  

  const handleAddToCart = () => {
    const obj = {
      image: item?.image[0],
      title: item?.title,
      category: item?.category,
      size: selectedSize,
      priceChart: selectedPriceChart,
      designUrl:designUrl[0],
      preview: preview,
      numberOfPages: item?.numberOfPages[0] ? [{name:item?.numberOfPages && item?.numberOfPages[0]?.pageName, number:[noOfPagesCoverPages]}, {name:item?.numberOfPages && item?.numberOfPages[1]?.pageName , number:[noOfPagesInnerPages]}] : undefined,
      cut: selectedCut,
      window: selectedWindow,
      folding: selectedFolding,
      paperType: allCardsPaperType,
      spotUV:selectSpotUv,
      corner: selectedCorner,
      finishing: selectFinishing,
      remarks: remarks,
      cut: selectedCut,
    }
    Object.keys(obj).forEach(key => {
      if (obj[key] === undefined) {
        delete obj[key];
      }
    });
    console.log("obj" , obj);
    dispatch(addToCart(setAddToCartAnimation, obj, navigate));
    
    // console.log("selected size", selectedSize);
    // console.log("selected corner", selectedCorner);
    // console.log('review', preview);
    // console.log('remarks', remarks);
    // console.log("new obj", obj);
    // console.log("choose-finishing", selectFinishing);
    // console.log('choose cut' , selectedCut)
    // console.log("choose paper Type" , allCardsPaperType);
    // console.log('choose quantity Table' , selectedPriceChart)
    // console.log("folding" , selectedFolding);
    // console.log("choose window" , selectedWindow);
    // console.log("chooose cut" , selectedCut);
    // console.log("categor" , category);
    // console.log("coverpage number of pages" , noOfPagesCoverPages);
    // console.log("innerpages number of pages" , noOfPagesInnerPages);
    // console.log("designUrl", designUrl);
  }

  return (
    <View style={styles.container}>
      <SingleProductScreen
        item={item}
        categoryTitle={categoryTitle}
        category={category}
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
        paperTypeCoverPages = {paperTypeCoverPages}
        setPaperTypeCoverPages = {setPaperTypeCoverPages}
        paperTypeInnerPagesRBSheet={paperTypeInnerPagesRBSheet}
        paperTypeInnerPages={paperTypeInnerPages}
        setPaperTypeInnerPages={setPaperTypeInnerPages}
        noOfPagesCoverPagesRBSheet={noOfPagesCoverPagesRBSheet}
        noOfPagesCoverPages={noOfPagesCoverPages}
        setNoOfPagesCoverPages={setNoOfPagesCoverPages}
        noOfPagesInnerPagesRBSheet={noOfPagesInnerPagesRBSheet}
        noOfPagesInnerPages={noOfPagesInnerPages}
        setNoOfPagesInnerPages={setNoOfPagesInnerPages}
        allCardsPaperTypeRBSheet = {allCardsPaperTypeRBSheet}
        allCardsPaperType= {allCardsPaperType}
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
