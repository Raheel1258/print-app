import React from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import EmptyCartScreen from '../Screens/EmptyCartScreen';
import { colors } from '../Utils/theme';

const EmptyCartContainer = () => {
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