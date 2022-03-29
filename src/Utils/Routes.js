import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {ScaledSheet} from 'react-native-size-matters';
import {Text, View} from 'react-native';

import {
  SigninContainer,
  HomeContainer,
  CartContainer,
  SignupContainer,
  ForgotPasswordContainer,
} from '../Containers';
import {colors} from './theme';
import BrowseActiveIcon from '../Assests/Svgs/BrowseActiveIcon';
import BrowseIcon from '../Assests/Svgs/BrowseIcon';
import CartActiveIcon from '../Assests/Svgs/CartActiveIcon';
import CartIcon from '../Assests/Svgs/CartIcon';
import OrderActiveIcon from '../Assests/Svgs/OrdersActiveIcon';
import ActivityActiveIcon from '../Assests/Svgs/ActivityIcon';
import ActivityIcon from '../Assests/Svgs/ActivityIcon';
import AccountActiveIcon from '../Assests/Svgs/AccountActiveIcon';
import AccountIcon from '../Assests/Svgs/AccountIcon';

const Stack = createStackNavigator();
const Auth = createStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="tab">
      <Stack.Screen
        name="tab"
        component={MyTabs}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="home"
        component={HomeContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="cart"
        component={CartContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Auth.Navigator initialRouteName="forgotPassword">
      <Auth.Screen
        name="signin"
        component={SigninContainer}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="signup"
        component={SignupContainer}
        options={{headerShown: false}}
      />
      <Auth.Screen
        name="forgotPassword"
        component={ForgotPasswordContainer}
        options={{headerShown: false}}
      />
      <Auth.Screen component={App} name="home" options={{headerShown: false}} />
    </Auth.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: colors.lightGreyColor,
          backgroundColor: colors.whiteColor,
          position: 'absolute',
          paddingBottom: 5,
          paddingTop: 20,
          height: Platform.OS === 'ios' ? 70 : 70,
        },
      }}>
      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused ? (
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <BrowseActiveIcon />
                  <Text style={styles.activeText}>Browse</Text>
                </View>
              ) : (
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <BrowseIcon />
                  <Text style={styles.unActiveText}>Browse</Text>
                </View>
              )}
            </View>
          ),
        }}
        name="home"
        component={HomeContainer}
      />

      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused ? (
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <CartActiveIcon />
                  <Text style={styles.activeText}>Cart</Text>
                </View>
              ) : (
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <CartIcon />
                  <Text style={styles.unActiveText}>Cart</Text>
                </View>
              )}
            </View>
          ),
        }}
        name="cart"
        component={CartContainer}
      />
    </Tab.Navigator>
  );
};

const MainScreen = createSwitchNavigator(
  {
    Auth: {
      screen: AuthStack,
    },
    Home: {
      screen: App,
    },
    Tab: {
      screen: MyTabs,
    },
  },
  {
    initialRouteName: 'Auth',
  },
);

const styles = ScaledSheet.create({
  activeText: {
    color: colors.greenColor,
    // fontFamily: 'Avenir',
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '17@s',
    letterSpacing: '0.6@s',
    textAlign: 'center',
  },
  unActiveText: {
    color: colors.greyColor,
    // fontFamily: 'Avenir',
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '17@s',
    letterSpacing: '0.6@s',
    textAlign: 'center',
  },
  tabContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});

export default createAppContainer(MainScreen);
