import React from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import MyOrderScreen from '../Screens/MyOrderScreen';
import { colors } from '../Utils/theme';

const MyOrderContainer = () => {
  const navigation = useNavigation();
  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
        <MyOrderScreen navigate={navigate} goBack={goBack}/>
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default MyOrderContainer;