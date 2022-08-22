import React, { useEffect } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useIsFocused, useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import EmptyCartScreen from '../Screens/EmptyCartScreen';
import { colors } from '../Utils/theme';
import { getCartData } from '../store/actions/cartAction';

const EmptyCartContainer = () => {
  const navigation = useNavigation();
  
  return (
    <View style={styles.container}>
      <EmptyCartScreen />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
});

export default EmptyCartContainer;