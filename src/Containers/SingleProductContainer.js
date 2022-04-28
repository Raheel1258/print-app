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

  const [selectedUpload, setSelectedUpload] =useState (t('upload_file'));
  const [selectedSize, setSelectedSize] = useState(item?.size[0] ? item?.size[0]?.name : undefined);
  const [selectedCorner, setSelectedCorner] = useState(category == 'BUSINESS_CARD' ? item?.corner[0]?.cornerName : undefined);
  const [selectFinishing, setSelectFinishing] = useState(item?.finishing ? item?.finishing[0] : undefined);
  const [selectSpotUv, setSelectSpotUv] = useState(item?.spotUv ? item?.spotUv[0] : undefined);
  const [quantityId, setQuantityId] = useState(item?.priceChart[0]?._id);
  const [preview, setPreview] = useState(true);
  const [remarks, setRemarks] = useState('');
  const [addUrl , setAddUrl] = useState('');
  const [addUrlArray, setAddUrlArray] = useState([]);
  const [result, setResult] = useState(undefined);



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

  const handleAddToCart = () => {
    const obj = {
      selectedSize: selectedSize,
      selectedCorner: selectedCorner,
      selectedFinishing: selectFinishing,
      quantityId: quantityId,
      preview: preview,
      remarks: remarks
    }
    console.log("selected size", selectedSize);
    console.log("selected corner", selectedCorner);
    console.log('quantityId', quantityId);
    console.log('review', preview);
    console.log('remarks', remarks);
    console.log("new obj", obj);
    console.log("choose-finishing", selectFinishing);
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
        addUrl={addUrl}
        setAddUrl = {setAddUrl}
        setAddUrlArray={setAddUrlArray}
        addUrlArray={addUrlArray}
        selectedUpload={selectedUpload}
        setSelectedUpload={setSelectedUpload}
        result={result}
        setResult={setResult}
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
