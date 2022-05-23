import React, { useEffect } from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
import {Provider} from 'react-redux';
import store from "./src/store/store"
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import OneSignal from 'react-native-onesignal';

import Routes from './src/Utils/Routes';

const OneSignalComponent = () => {
  //OneSignal Init Code
  OneSignal.setLogLevel(6, 0);
  //Android id ---- ? -----
  //Ios ID ---- 041fb0c4-d5be-4a35-bcde-68e3be50d503 ----
  OneSignal.setAppId('041fb0c4-d5be-4a35-bcde-68e3be50d503');
  //END OneSignal Init Code

  //Prompt for push on iOS
  OneSignal.promptForPushNotificationsWithUserResponse(response => {
    console.log('Prompt response:', response);
  });

  //Method for handling notifications received while app in foreground
  OneSignal.setNotificationWillShowInForegroundHandler(
    notificationReceivedEvent => {
      console.log(
        'OneSignal: notification will show in foreground:',
        notificationReceivedEvent,
      );
      let notification = notificationReceivedEvent.getNotification();
      console.log('notification: ', notification);
      const data = notification.additionalData;
      console.log('additionalData: ', data);
      // Complete with null means don't show a notification.
      notificationReceivedEvent.complete(notification);
    },
  );

  //Method for handling notifications opened
  OneSignal.setNotificationOpenedHandler(notification => {
    console.log(
      'OneSignal: notification opened:',
      notification.notification?.additionalData?.route,
    );
    // Linking.openURL(
    //   `demo://${notification.notification?.additionalData?.route}`,
    // );
  });
  return <></>;
};

const App = () => {

  useEffect(() => {
    SplashScreen.hide();
  }, []);
  

  return (
    <Provider store={store}>
    <SafeAreaView style={styles.container}>
        <StatusBar backgroundColor={"white"} barStyle={"dark-content"} />
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
        <Toast/>
        <OneSignalComponent/>
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
