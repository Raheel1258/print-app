import React from 'react';
import {View} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import MyOrdersListScreen from '../Screens/MyOrdersListScreen';
import { colors } from '../Utils/theme';

const MyOrdersListContainer = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
        <MyOrdersListScreen goBack={goBack}/>
    </View>
  );
};

const styles = ScaledSheet.create ({
  container:{
    flex:1,
    backgroundColor: colors.whiteColor,
  },
});

export default MyOrdersListContainer;