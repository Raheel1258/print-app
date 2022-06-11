import React, { useRef, useState, useEffect } from 'react';
import { View, Text} from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import Storage from '../Utils/Storage';
import i18n from 'i18next';
import { WebView } from 'react-native-webview';

import { logout } from '../store/actions/auth';
import AccountScreen from '../Screens/AccountScreen';
import { colors } from '../Utils/theme';

const AccountContainer = () => {
  const refRBSheet = useRef();
  const accountRBSheet = useRef();
  const [focused, setFocused] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const navigation = useNavigation();
  const isFocused = useIsFocused();
  const dispatch = useDispatch();
  const [animation, setAnimation] = useState(false);
  const [languageToggle, setLanguageToggle] = useState(true);
  const [faqsFlaq, setFaqsFlag] = useState(false);

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data);
  };
  const goBack = () => {
    navigation.goBack();
  };

  const changeLanguageHandler = (lang) =>
  {
    i18n.changeLanguage(lang)
    refRBSheet.current.close();
  }

  const logoutHandler = () => {
    dispatch(logout(navigation, setAnimation));
  };

  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // const handleFaq = () => {
  //   console.log("into faq");
  //   <WebView
  //   source={{
  //     uri: 'https://pri.cxstaging.com/faqs/'
  //   }}
  // />
  // }

  useEffect(() => {
    isFocused &&
      Storage.retrieveData('token').then(token => {
        setUserToken(token);
        !token && accountRBSheet.current.open();
      });
  }, [isFocused]);

  return (
    <View style={styles.container}>
      {!faqsFlaq ? <AccountScreen
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
        faqsFlaq={faqsFlaq} 
        setFaqsFlag={setFaqsFlag}
      />:<WebView
      source={{
      uri: 'https://pri.cxstaging.com/en/faqs/'}}
      
/>}
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
