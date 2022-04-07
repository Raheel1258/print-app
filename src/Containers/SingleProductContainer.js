import React, {useRef, useState} from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';
import { useTranslation } from 'react-i18next';

import SingleProductScreen from '../Screens/SingleProductScreen';
import {colors} from '../Utils/theme';

const SingleProductContainer = () => {
  const {t} = useTranslation();

  const refRBSheet = useRef();
  const urlRBSheet = useRef();
  const navigation = useNavigation();
  
  const [selectedSize, setSelectedSize] = useState(t('standard_text'));
  const [selectedCorner, setSelectedCorner] = useState(t('square_text'));
  const [quantityId, setQuantityId] = useState('1');
  const [review, setReview] = useState(true);

  const goBack = () => {
    navigation.goBack();
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={styles.container}>
      <SingleProductScreen
        goBack={goBack}
        refRBSheet={refRBSheet}
        urlRBSheet={urlRBSheet}
        isModalVisible={isModalVisible}
        toggleModal={toggleModal}
        selectedSize = {selectedSize}
        setSelectedSize = {setSelectedSize}
        selectedCorner={selectedCorner}
        setSelectedCorner={setSelectedCorner}
        quantityId = {quantityId}
        setQuantityId = {setQuantityId}
        review = {review}
        setReview = {setReview}
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
