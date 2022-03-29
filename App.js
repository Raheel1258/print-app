import React from 'react';
import {SafeAreaView, StatusBar,View} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
import {Provider} from 'react-redux';

import Routes from './src/Utils/Routes';

const App = () => {
  return (
    <View style={styles.container}>
        <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
    </View>
  );
};

const styles = ScaledSheet.create({
  container:{
    flex:1,
  },
});
export default App;
