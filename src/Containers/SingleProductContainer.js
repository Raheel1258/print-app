import React from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch } from 'react-redux';
import { useNavigation } from '@react-navigation/native';

import SingleProductScreen from '../Screens/SingleProductScreen';
import {colors} from '../Utils/theme';

const SingleProductContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <SingleProductScreen goBack={goBack}/>
    </View>
  );
};


const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default SingleProductContainer;