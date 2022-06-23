import React, { useEffect, useRef, useState } from 'react';
import { View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import { addToCart} from "../store/actions/cartAction";
import { getPriceChart} from "../store/actions/productList";
import SingleProductScreen from '../Screens/SingleProductScreen';
import { colors } from '../Utils/theme';

const SingleProductContainer = ({ route }) => {

  const { t } = useTranslation();
  const { item, categoryTitle, productCategory } = route.params;


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
  const [designUrl, setDesignUrl] = useState([]);
  const [initialValuesAddUrl, setInitialValuesAddUrl] = useState({ url: [{ url_link: '' }] })
  const [priceChartAnimation, setPriceChartAnimation] = useState(false);
  const [addToCartAnimation, setAddToCartAnimation] = useState(false);
  const [selectedUpload, setSelectedUpload] = useState('uploadFile');
  const [shape, setShape] = useState(item?.category?.productType);
  const [selectedSize, setSelectedSize] = useState(item?.size && item?.size[0]);
  const [selectedCorner, setSelectedCorner] = useState(item?.corner && item?.corner[0]);
  const [selectFinishing, setSelectFinishing] = useState(item?.finishing && item?.finishing[0]);
  const [selectSpotUv, setSelectSpotUv] = useState(item?.spotUV && item?.spotUV[0]);
  const [selectedPriceChart, setSelectedPriceChart] = useState(priceChart && priceChart[0]);
  const [paperTypeCoverPages, setPaperTypeCoverPages] = useState(item?.paperType && item?.paperType[0]);
  const [paperTypeInnerPages, setPaperTypeInnerPages] = useState(item?.paperType && item?.paperType[1]);
  const [noOfPagesCoverPages, setNoOfPagesCoverPages] = useState(item?.numberOfPages && item?.numberOfPages[0]?.number[0]);
  const [noOfPagesInnerPages, setNoOfPagesInnerPages] = useState(item?.numberOfPages && item?.numberOfPages[1]?.number[0]);


  const [allCardsPaperType, setAllCardsPaperType] = useState(item?.paperType && item?.paperType[0]);
  const [numberOfSides, setNumberOfSides] = useState(item?.numberOfSides && item?.numberOfSides[0]);

  const [selectedCut, setSelectedCut] = useState(item?.cut && item?.cut[0]);
  const [selectedFolding, setSelectedFolding] = useState(item?.folding && item?.folding[0]);

  const [selectedWindow, setSelectedWindow] = useState(item?.window && item?.window[0]);
  const [preview, setPreview] = useState(true);
  const [remarks, setRemarks] = useState('');
  const [result, setResult] = useState([]);

  const defaultValuesObject = productCategory == "BUSINESS_CARD" ? {
    category: 'businesscard',
    product: item?.category?.productType,
    size: `${selectedSize?.width} x ${selectedSize?.height}`,
    corner: `${selectedCorner?.cornerName} Corner`,
    spotuvside: selectSpotUv
  } : productCategory == "BOOKLET" ? {
    category: 'booklet',
    product: item?.category?.productType,
    size: selectedSize?.name,
    innerpage: noOfPagesInnerPages
  } : productCategory === "POSTER" ? {
    category: 'poster',
    product: item?.category?.productType,
    size: selectedSize?.name,
    papertype: allCardsPaperType.substr(14, 7),
    sides: numberOfSides
  } : productCategory === "FLYERS_LEAFLET" ? {
    category: 'flyer',
    product: item?.category?.productType,
    size: item?.category?.name == "Rectangular Flyer" ? selectedSize?.name : `${selectedSize?.width} x ${selectedSize?.height}`,
    papertype: allCardsPaperType.substr(14, 7),
    folding: selectedFolding?.foldingName
  } : productCategory === "ENVELOPE" ? {
    category: 'envelop',
    product: item?.category?.productType,
    window: selectedWindow?.windowName
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
    let newPriceChartArray = priceChart
    setSliceArray(newPriceChartArray?.slice(0, 5));
  }, [priceChart])

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
    const obj = {
      productId: item?._id,
      image: item?.image[0],
      title: item?.title,
      category: item?.category,
      size: selectedSize,
      priceChart: selectedPriceChart,
      designUrl: selectedUpload == "urlLink" ? designUrl : result,
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
    dispatch(addToCart(setAddToCartAnimation, obj, navigate));


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
