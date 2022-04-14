import {types} from '@babel/core';
import React from 'react';
import {View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';

import AccountDetailScreen from '../Screens/AccountDetailScreen';
import {colors} from '../Utils/theme';

const AccountDetailContainer = () => {
  const navigation = useNavigation();
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <AccountDetailScreen goBack={goBack}/>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
});

export default AccountDetailContainer;
