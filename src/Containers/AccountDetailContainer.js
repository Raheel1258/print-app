import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserDetail, updateCurrentUserDetail, deleteAddress, makeAddressPrimary, getAllCards } from "../store/actions/userPersonalDetailAction"

import AccountDetailScreen from '../Screens/AccountDetailScreen';
import { colors } from '../Utils/theme';


const AccountDetailContainer = () => {
  const addAddressRBSheet = useRef();
  const addCardetCardRBSheet = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState(false);
  const [animationUpdateUser, setAnimationUpdateUser] = useState(false);
  const userAddresses = useSelector(state => state?.userPersonalDetailReducer?.userAddress);
  const userDetails = useSelector(state => state?.userPersonalDetailReducer?.user);
  const userCardsDetails = useSelector(state => state?.userPersonalDetailReducer?.userCard);


  const [personalDetail, setPersonalDetail] = useState({
    firstName: 'Peter',
    lastName: 'Peter',
    phone: '23234234',
    email: 'peter@gmail.com'
  });

 

  console.log("usercards3232" ,userCardsDetails);


  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(getCurrentUserDetail(setAnimation, setPersonalDetail));
    dispatch(getAllCards()) 
  }, [])


  const handleUpdatedPersonalDetail = (values) => {
    dispatch(updateCurrentUserDetail(setAnimationUpdateUser, values));
  }

  const handleUserAddressRemove = (addressId) => {
    dispatch(deleteAddress(addressId));
  }

  const handleMakePrimary = (id) => {
    dispatch(makeAddressPrimary(id));
  }

 

  return (
    <View style={styles.container}>
      <AccountDetailScreen
        makePrimary={handleMakePrimary}
        navigate={navigate}
        goBack={goBack}
        addAddressRBSheet={addAddressRBSheet}
        addCardetCardRBSheet={addCardetCardRBSheet}
        animation={animation}
        personalDetail={personalDetail}
        handleUpdatedPersonalDetail={handleUpdatedPersonalDetail}
        userAddresses={userAddresses}
        animationUpdateUser={animationUpdateUser}
        handleUserAddressRemove={handleUserAddressRemove}
        userCardsDetails={userCardsDetails}
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
