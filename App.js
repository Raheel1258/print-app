import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
import {Provider} from 'react-redux';

import Routes from './src/Utils/Routes';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = ScaledSheet.create({
  container:{
    flex:1,
  },
});
export default App;
