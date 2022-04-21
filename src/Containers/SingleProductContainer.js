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
  const { item, title } = route.params;

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const refRBSheet = useRef();
  const urlRBSheet = useRef();

  const [selectedSize, setSelectedSize] = useState(item?.choose_size[0]?.size_name);
  const [selectedCorner, setSelectedCorner] = useState(title == 'Business Card' ? item?.choose_corner[0]?.corner : undefined);
  const [quantityId, setQuantityId] = useState(item?.quantity_table[0]?.id);
  const [preview, setPreview] = useState(true);
  const [remarks, setRemarks] = useState('');

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
  }

  return (
    <View style={styles.container}>
      <SingleProductScreen
        item={item}
        title={title}
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
