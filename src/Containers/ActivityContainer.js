import React, { useRef, useState, useEffect } from 'react';
import { types } from '@babel/core';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivity } from '../store/actions/activitiesAction';
import Storage from '../Utils/Storage';

import ActivityScreen from '../Screens/ActivityScreen';
import { colors } from '../Utils/theme';

const ActivityContainer = () => {
  const dispatch = useDispatch();
  const activityRBSheet = useRef();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [animation, setAnimation] = useState(false);
  const [focused, setFocused] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const activityData = useSelector(state =>  state?.activitiesReducer?.activitiesDetail)

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data);
  };

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    console.log("into use effect");
    dispatch(getAllActivity(setAnimation));
  },[])


  useEffect(() => {
    isFocused && Storage.retrieveData('token').then((token) => {
      setUserToken(token);
      // token &&  dispatch(getAllActivity(setAnimation));
      !token && activityRBSheet.current.open()
    });
  }, [isFocused])

  return (
    <View style={styles.container}>
      <ActivityScreen
      goBack={goBack} 
      activityRBSheet={activityRBSheet} 
      focused={focused} 
      setFocused={setFocused} 
      navigate={navigate} 
      activityData={activityData}
      animation={animation} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhiteColor,
  },
});

export default ActivityContainer;
