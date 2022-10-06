import React from 'react';
import { View } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import EmptyCartScreen from '../Screens/EmptyCartScreen';

import { colors } from '../Utils/theme';

const EmptyCartContainer = () => {
  const navigation = useNavigation();
  console.log("into empty screen")

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