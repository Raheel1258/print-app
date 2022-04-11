import React, {useRef} from 'react';
import {types} from '@babel/core';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

import AccountScreen from '../Screens/AccountScreen';
import {colors} from '../Utils/theme';

const AccountContainer = () => {
  const refRBSheet = useRef();
  const navigation = useNavigation();
  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data);
  };
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <AccountScreen navigate={navigate} goBack={goBack} refRBSheet={refRBSheet} />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
});

export default AccountContainer;
