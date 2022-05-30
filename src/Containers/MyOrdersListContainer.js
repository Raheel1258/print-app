import React from 'react';
import {View, Text} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';

import MyOrdersListScreen from '../Screens/MyOrdersListScreen';
import { colors } from '../Utils/theme';

const MyOrdersListContainer = ({route}) => {
  const {item} = route.params;
  console.log("item order from navigation" , item);
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
        <MyOrdersListScreen goBack={goBack} orderData={item}/>
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