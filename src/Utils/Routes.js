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
  RouteCheckingContainer,
  ProductsListingContainer,
  SingleProductContainer,
  AccountContainer,
  AccountDetailContainer,
  OrderReceivedContainer,
  EmptyCartContainer,
  MyOrderContainer
} from '../Containers';
import {colors, fonts} from './theme';
import BrowseActiveIcon from '../Assests/Svgs/BrowseActiveIcon';
import BrowseIcon from '../Assests/Svgs/BrowseIcon';
import CartActiveIcon from '../Assests/Svgs/CartActiveIcon';
import CartIcon from '../Assests/Svgs/CartIcon';
import OrderActiveIcon from '../Assests/Svgs/OrdersActiveIcon';
import OrdersIcon from '../Assests/Svgs/OrderIcon';
import ActivityActiveIcon from '../Assests/Svgs/ActivityIcon';
import ActivityIcon from '../Assests/Svgs/ActivityIcon';
import AccountActiveIcon from '../Assests/Svgs/AccountActiveIcon';
import AccountIcon from '../Assests/Svgs/AccountIcon';

const Stack = createStackNavigator();
const Auth = createStackNavigator();
const Home = createStackNavigator();
const Account = createStackNavigator();

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
      <Stack.Screen
        name="signin"
        component={SigninContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="productsListing"
        component={ProductsListingContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="singleProduct"
        component={SingleProductContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="account"
        component={AccountContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="accountDetail"
        component={AccountDetailContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="orderReceived"
        component={OrderReceivedContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="emptyCart"
        component={EmptyCartContainer}
        options={{headerShown: false}}
      />
            <Stack.Screen
        name="myOrder"
        component={MyOrderContainer}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Auth.Navigator initialRouteName="signin">
      <Auth.Screen
        name="RouteChecking"
        component={RouteCheckingContainer}
        options={{headerShown: false}}
      />
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

const HomeStack = () => {
  return (
    <Home.Navigator initialRouteName="home">
      <Home.Screen
        name="home"
        component={HomeContainer}
        options={{headerShown: false}}
      />
      <Home.Screen
        name="productsListing"
        component={ProductsListingContainer}
        options={{headerShown: false}}
      />
      <Home.Screen
        name="singleProduct"
        component={SingleProductContainer}
        options={{headerShown: false}}
      />
    </Home.Navigator>
  );
};

const AccountStack = () => {
  return (
    <Account.Navigator initialRouteName="account">
      <Account.Screen
        name="account"
        component={AccountContainer}
        options={{headerShown: false}}
      />
      <Account.Screen
        name="accountDetail"
        component={AccountDetailContainer}
        options={{headerShown: false}}
      />
    </Account.Navigator>
  );
};

const MyTabs = () => {
  return (
    <Tab.Navigator
      initialRouteName="myorder"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: colors.lightGreyColor,
          backgroundColor: colors.whiteColor,
          position: 'absolute',
          paddingBottom: 5,
          paddingTop: 20,
          height: Platform.OS === 'ios' ? 62 : 62,
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
        name="homeStack"
        component={HomeStack}
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

<Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused ? (
                <View style={{flexDirection: 'column', alignItems: 'center',marginTop:6}}>
                  <OrderActiveIcon />
                  <Text style={styles.activeText}>Order</Text>
                </View>
              ) : (
                <View style={{flexDirection: 'column', alignItems: 'center',marginTop:6}}>
                  <OrdersIcon />
                  <Text style={styles.unActiveText}>Order</Text>
                </View>
              )}
            </View>
          ),
        }}
        name="myorder"
        component={MyOrderContainer}
      />

      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused ? (
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <AccountActiveIcon />
                  <Text style={styles.activeText}>Account</Text>
                </View>
              ) : (
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <AccountIcon />
                  <Text style={styles.unActiveText}>Account</Text>
                </View>
              )}
            </View>
          ),
        }}
        name="signin"
        component={SigninContainer}
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
    fontFamily: fonts.avenir_regular,
    color: colors.greenColor,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '17@s',
    letterSpacing: '0.6@s',
    textAlign: 'center',
  },
  unActiveText: {
    fontFamily: fonts.avenir_regular,
    color: colors.greyColor,
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
