import React,{useRef} from 'react';
import {View} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {ScaledSheet} from 'react-native-size-matters';

import AccountDetailScreen from '../Screens/AccountDetailScreen';
import {colors} from '../Utils/theme';

const AccountDetailContainer = () => {
  const addAddressRBSheet = useRef();
  const addCardetCardRBSheet = useRef();
  const navigation = useNavigation();
  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }
  const goBack = () => {
    navigation.goBack();
  };
  return (
    <View style={styles.container}>
      <AccountDetailScreen navigate={navigate} goBack={goBack} addAddressRBSheet={addAddressRBSheet} addCardetCardRBSheet={addCardetCardRBSheet}/>
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
