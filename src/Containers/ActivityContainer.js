import React, {useRef} from 'react';
import {types} from '@babel/core';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

import ActivityScreen from '../Screens/ActivityScreen';
import {colors} from '../Utils/theme';

const ActivityContainer = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <ActivityScreen  goBack={goBack} />
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
