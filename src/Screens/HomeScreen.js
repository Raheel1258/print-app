import React, { useEffect, useState } from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import { useSelector } from 'react-redux'
import Storage from '../Utils/Storage';

import { colors } from '../Utils/theme';

const HomeScreen = () => {
  const data = useSelector(state => console.log(state)); 
  const [userToken , setUserToken] = useState();
  const fun = async () => {
    const newToken = await Storage.retrieveData('token');
    console.log(newToken);
    setUserToken(newToken);

  }
  useEffect (()=> {
    
fun();

  },[])
  return (
    <View style={styles.container}>
      <Text>Home { userToken }</Text>
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
