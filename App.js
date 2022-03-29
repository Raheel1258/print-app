import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
import {Provider} from 'react-redux';
import store from "./src/store/store"
import Toast from 'react-native-toast-message';

import Routes from './src/Utils/Routes';

const App = () => {
  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
        <Toast/>
    </SafeAreaView>
    </Provider>
  );
};

const styles = ScaledSheet.create({
  container:{
    flex:1,
  },
});
export default App;
