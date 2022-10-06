import React, { useRef, useState, useEffect } from 'react';
import { View } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import i18n from 'i18next';

import AccountScreen from '../Screens/AccountScreen';
import { logout } from '../store/actions/auth';

import Storage from '../Utils/Storage';
import { colors } from '../Utils/theme';

const AccountContainer = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const refRBSheet = useRef();
  const accountRBSheet = useRef();

  const [focused, setFocused] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [animation, setAnimation] = useState(false);
  const [languageToggle, setLanguageToggle] = useState(true);

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data);
  };
  const goBack = () => {
    navigation.goBack();
  };

  const changeLanguageHandler = (lang) => {
    i18n.changeLanguage(lang)
    refRBSheet.current.close();
  }

  const logoutHandler = () => {
    userToken && dispatch(logout(navigation, setAnimation));
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
        changeLanguageHandler={changeLanguageHandler}
        languageToggle={languageToggle}
        setLanguageToggle={setLanguageToggle}
        userToken={userToken}
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
