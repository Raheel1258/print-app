import React, { useRef, useState, useEffect } from 'react';
import { types } from '@babel/core';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import Storage from '../Utils/Storage';

import ActivityScreen from '../Screens/ActivityScreen';
import { colors } from '../Utils/theme';

const ActivityContainer = () => {
  const [focused, setFocused] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const activityRBSheet = useRef();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data);
  };

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {

    isFocused && Storage.retrieveData('token').then((token) => {
      setUserToken(token);
      !token && activityRBSheet.current.open()
    });
  }, [isFocused])

  return (
    <View style={styles.container}>
      <ActivityScreen goBack={goBack} activityRBSheet={activityRBSheet} focused={focused} setFocused={setFocused} navigate={navigate} />
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
