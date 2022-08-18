import React, { useEffect, useRef, useState } from 'react';
import { View } from 'react-native';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentUserDetail, updateCurrentUserDetail, deleteAddress, makeAddressPrimary, getAllCards, deleteCard, makeCardPrimary } from "../store/actions/userPersonalDetailAction"
import { Toast } from 'react-native-toast-message/lib/src/Toast';

import AccountDetailScreen from '../Screens/AccountDetailScreen';
import { colors } from '../Utils/theme';
import { t } from 'i18next';

const AccountDetailContainer = () => {
  const addAddressRBSheet = useRef();
  const addCardetCardRBSheet = useRef();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();


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
  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data)
  }

  const goBack = () => {
    navigation.goBack();
  };

  useEffect(() => {
    dispatch(getCurrentUserDetail(setAnimation, setPersonalDetail));
    dispatch(getAllCards(setAnimation))
  }, [isFocused])


  const handleUpdatedPersonalDetail = (values) => {
    dispatch(updateCurrentUserDetail(setAnimationUpdateUser, values));
  }

  const handleUserAddressRemove = (addressId) => {
    const getLastPrimary = userAddresses?.filter(item => item?.primary == true);

    if (addressId == getLastPrimary[0]?._id) {
      Toast.show({
        type: 'error',
        text1: t('alter_message_for_primary_address'),
      });
    } else {
      dispatch(deleteAddress(addressId));
    }
  }

  const handleMakePrimary = (id) => {
    dispatch(makeAddressPrimary(id, false));
  }

  const handleMakePrimaryCard = (id) => {
    const getLastPrimary = userCardsDetails?.filter(item => item.metadata.primary === "true");
    dispatch(makeCardPrimary(id, getLastPrimary[0].id, setAnimation));
  }

  const handleUserCardRemove = (id) => {
    const getLastPrimary = userCardsDetails?.filter(item => item.metadata.primary === "true");

    if (id == getLastPrimary[0]?.id) {
      Toast.show({
        type: 'error',
        text1: t('alter_message_for_primary_card'),
      });
    } else {
      dispatch(deleteCard(id, setAnimation));
    }
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
        handleUserCardRemove={handleUserCardRemove}
        handleMakePrimaryCard={handleMakePrimaryCard}
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
