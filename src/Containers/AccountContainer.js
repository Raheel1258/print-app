import React, {useRef, useState, useEffect} from 'react';
import {View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useNavigation, useIsFocused} from '@react-navigation/native';
import {useDispatch} from 'react-redux';
import Storage from '../Utils/Storage';

import {logout} from '../store/actions/auth';
import AccountScreen from '../Screens/AccountScreen';
import {colors} from '../Utils/theme';

const AccountContainer = () => {
  const refRBSheet = useRef();
  const accountRBSheet = useRef();
  const [focused, setFocused] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [animation, setAnimation] = useState(false);

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data);
  };
  const goBack = () => {
    navigation.goBack();
  };

  const logoutHandler = () => {
    dispatch(logout(navigation, setAnimation));
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    isFocused &&
      Storage.retrieveData('token').then(token => {
        setUserToken(token);
        !token && accountRBSheet.current.open();
      });
  }, [isFocused]);

  return (
    <View style={styles.container}>
      <AccountScreen
        navigate={navigate}
        goBack={goBack}
        refRBSheet={refRBSheet}
        logoutHandler={logoutHandler}
        accountRBSheet={accountRBSheet}
        focused={focused}
        setFocused={setFocused}
        toggleModal={toggleModal}
        isModalVisible={isModalVisible}
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

export default AccountContainer;
