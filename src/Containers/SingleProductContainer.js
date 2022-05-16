import React, { useRef, useState } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { useTranslation } from 'react-i18next';

import SingleProductScreen from '../Screens/SingleProductScreen';
import { colors } from '../Utils/theme';


const SingleProductContainer = ({ route }) => {
  const { t } = useTranslation();
  const { item, categoryTitle, category } = route.params;

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

  
  const [initialValuesAddUrl, setInitialValuesAddUrl] = useState({url:[{url_link:''}]})

  const [selectedUpload, setSelectedUpload] = useState (t('upload_file'));
  const [selectedSize, setSelectedSize] = useState( item?.size[0] && item?.size[0]);
  const [selectedCorner, setSelectedCorner] = useState((item?.corner?.cornerName && item?.corner?.cornerName[0]) ??undefined);
  const [selectFinishing, setSelectFinishing] = useState(item?.finishing ? item?.finishing[0] : undefined);
  const [selectSpotUv, setSelectSpotUv] = useState(item?.spotUv ? item?.spotUv[0] : undefined);
  const [quantityId, setQuantityId] = useState(item?.priceChart[0]?._id);
  const [paperTypeCoverPages , setPaperTypeCoverPages] = useState(item?.paperType ? item?.paperType[0]: undefined);
  const [paperTypeInnerPages , setPaperTypeInnerPages] = useState((category == 'BOOKLET' && item?.paperType) ? item?.paperType[1]: undefined);
  const [noOfPagesCoverPages , setNoOfPagesCoverPages] = useState("4 pages");
  const [noOfPagesInnerPages , setNoOfPagesInnerPages] = useState(item?.numberOfPages ? item?.numberOfPages[0]: undefined);

  const [allCardsPaperType , setAllCardsPaperType ] = useState(item?.paperType ? item?.paperType[0]: undefined);
  const [numberOfSides, setNumberOfSides] = useState(item?.numberOfSides ? item?.numberOfSides[0]: undefined);

  const [selectedCut, setSelectedCut] = useState(item?.cut ? item?.cut[0]?.name: undefined);
  const [selectedFolding, setSelectedFolding] = useState(item?.folding ? item?.folding[0]?.name : undefined);

  const [selectedWindow , setSelectedWindow] = useState(item?.window ? item?.window[0]?.name : undefined);
  const [preview, setPreview] = useState(true);
  const [remarks, setRemarks] = useState('');
  const [result, setResult] = useState([]);

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
  }

  const handleAddToCart = () => {
    const obj = {
      selectedSize: selectedSize,
      selectedCorner: selectedCorner,
      selectedFinishing: selectFinishing,
      quantityId: quantityId,
      preview: preview,
      remarks: remarks,
      cut: selectedCut
    }
    console.log("selected size", selectedSize);
    console.log("selected corner", selectedCorner);
    console.log('quantityId', quantityId);
    console.log('review', preview);
    console.log('remarks', remarks);
    console.log("new obj", obj);
    console.log("choose-finishing", selectFinishing);
    console.log('choose cut' , selectedCut)
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
        quantityId={quantityId}
        setQuantityId={setQuantityId}
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
