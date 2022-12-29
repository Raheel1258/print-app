import React, { useEffect, useState } from 'react';
import { NavigationContainer, useIsFocused } from '@react-navigation/native';
import { ScaledSheet } from 'react-native-size-matters';
import { Provider, useDispatch } from 'react-redux';

import store from "./src/store/store"
import Toast from 'react-native-toast-message';
import SplashScreen from 'react-native-splash-screen';
import OneSignal from 'react-native-onesignal';
import { getAllActivity } from './src/store/actions/activitiesAction';

import { StatusBarComponent } from './src/Components';

import Routes from './src/Utils/Routes';
import linking from './src/Utils/linking';
import Storage from './src/Utils/Storage';


const App = () => {

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000)
  }, []);

  const OneSignalComponent = () => {

    const dispatch = useDispatch()
    const [animation, setAnimation] = useState(false);

    const getData = () => {
      Storage.retrieveData('token').then((token) => {
        token && dispatch(getAllActivity(setAnimation));
      });
    }

    OneSignal.setLogLevel(6, 0);

    //cb05175a-88a9-45af-af22-ec8864a4acca
    //Android id ---- fe2ee0f0-84e5-4650-b18b-1ad055d48339 -----
    //Ios ID ---- 041fb0c4-d5be-4a35-bcde-68e3be50d503 ----
    OneSignal.setAppId('cb05175a-88a9-45af-af22-ec8864a4acca');
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
        getData();
      },
    );

    //Method for handling notifications opened
    OneSignal.setNotificationOpenedHandler(notification => {
      console.log(
        'OneSignal: notification opened:',
        notification.notification?.additionalData?.route,
      );
    });
    return <></>;
  };



  return (
    <Provider store={store}>
      <StatusBarComponent padding={50} />
      <NavigationContainer linking={linking}>
        <Routes />
        <OneSignalComponent />
      </NavigationContainer>
      <Toast />
    </Provider>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
  },
});
export default App;
