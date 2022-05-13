import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import {getCurrentUserDetail, updateCurrentUserDetail} from "../store/actions/userPersonalDetailAction"

import AccountDetailScreen from '../Screens/AccountDetailScreen';
import { colors } from '../Utils/theme';


const AccountDetailContainer = () => {
  const addAddressRBSheet = useRef();
  const addCardetCardRBSheet = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [animation, setAnimation] = useState(false);
  const [animationUpdateUser, setAnimationUpdateUser] = useState(false);
  const userAddresses = useSelector(state => state?.userPersonalDetailReducer?.user?.addresses);
  const userDetails = useSelector(state => state?.userPersonalDetailReducer?.user);

  console.log("userAddresses",userDetails)
  const [personalDetail, setPersonalDetail] = useState({
    firstName: userDetails?.firstName ? userDetails?.firstName : 'Peter', 
    lastName: userDetails?.lastName ? userDetails?.lastName : 'Peter',
    phone: userDetails?.phone ? userDetails?.phone : '23234234' ,
    email: userDetails?.email ? userDetails?.email : 'peter@gmail.com'
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
  
  // useEffect(()=> {
  //   console.log("inside use effect" , userDetails);
  //   setPersonalDetail({
  //   firstName: userDetails?.firstName, 
  //   lastName: userDetails?.lastName,
  //   phone: userDetails?.phone,
  //   email: userDetails?.email
  //   })
  // },[userDetails])

  const handleUpdatedPersonalDetail = (values) => {
    // dispatch(updateCurrentUserDetail(setAnimation, values ))
    console.log("updated deatil" , values);
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
        animationUpdateUser={animationUpdateUser}
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
