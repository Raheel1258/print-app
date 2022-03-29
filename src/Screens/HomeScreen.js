import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { useSelector } from 'react-redux'

import { colors } from '../Utils/theme';

const HomeScreen = () => {
  const data = useSelector(state => console.log(state)); 
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
