import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import {getCurrentUserDetail} from "../store/actions/auth"

import AccountDetailScreen from '../Screens/AccountDetailScreen';
import { colors } from '../Utils/theme';

const AccountDetailContainer = () => {
  const addAddressRBSheet = useRef();
  const addCardetCardRBSheet = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState(false);
  const userAddresses = useSelector(state => state?.auth?.userAddress);
  const [personalDetail, setPersonalDetail] = useState({
    firstName: 'Peter', 
    lastName: 'Park',
    mobile: '93542554',
    email: 'peterchung@gmail.com'
  });


  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(()=> {
    dispatch(getCurrentUserDetail(setAnimation, setPersonalDetail));

  },[])

  const handleUpdatedPersonalDetail = (values) => {
    console.log("updated deatil");
  }

  

  return (
    <View style={styles.container}>
      <AccountDetailScreen
        navigate={navigate}
        goBack={goBack}
        addAddressRBSheet={addAddressRBSheet}
        addCardetCardRBSheet={addCardetCardRBSheet}
        animation={animation}
        personalDetail={personalDetail}
        handleUpdatedPersonalDetail={handleUpdatedPersonalDetail}
        userAddresses={userAddresses}
      />
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
