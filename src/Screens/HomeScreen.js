import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import { colors } from '../Utils/theme';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = ScaledSheet.create({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default HomeScreen;
