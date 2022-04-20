import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {ScaledSheet} from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
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
  MyOrderContainer,
  MyOrdersListContainer,
  VerificationCodeContainer,
  ResetPasswordContainer,
  ChangePasswordContainer,
  ActivityContainer,
} from '../Containers';
import {colors, fonts} from './theme';
import BrowseActiveIcon from '../Assests/Svgs/BrowseActiveIcon';
import BrowseIcon from '../Assests/Svgs/BrowseIcon';
import CartActiveIcon from '../Assests/Svgs/CartActiveIcon';
import CartIcon from '../Assests/Svgs/CartIcon';
import OrderActiveIcon from '../Assests/Svgs/OrdersActiveIcon';
import OrdersIcon from '../Assests/Svgs/OrderIcon';
import ActivityActiveIcon from '../Assests/Svgs/ActivityActiveIcon';
import ActivityIcon from '../Assests/Svgs/ActivityIcon';
import AccountActiveIcon from '../Assests/Svgs/AccountActiveIcon';
import AccountIcon from '../Assests/Svgs/AccountIcon';
import EmptyCartScreen from '../Screens/EmptyCartScreen';

const Stack = createStackNavigator();
const Auth = createStackNavigator();
const Home = createStackNavigator();
const Account = createStackNavigator();
const Order = createStackNavigator();
const Cart = createStackNavigator();

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <Stack.Navigator initialRouteName="tab">
      <Stack.Screen
        name="tab"
        component={MyTabs}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="home"
        component={HomeContainer}
        options={{headerShown: false}}
      /> */}
      <Stack.Screen
        name="cart"
        component={CartContainer}
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
      <Stack.Screen
        name="myOrdersList"
        component={MyOrdersListContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="changePassword"
        component={ChangePasswordContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="activity"
        component={ActivityContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="auth"
        component={AuthStack}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const AuthStack = (props) => {
  const r = props?.route?.params?.next;
  return (
    <Auth.Navigator initialRouteName={r? r: "routeChecking"}>
      <Auth.Screen
        name="routeChecking"
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
      <Stack.Screen
        name="verificationCode"
        component={VerificationCodeContainer}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="resetPassword"
        component={ResetPasswordContainer}
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
       <Home.Screen
        name="authTest"
        component={AuthStack}
        options={{headerShown: false}}
      />
    </Home.Navigator>
  );
};


const OrderStack = () => {
  return (
    <Order.Navigator initialRouteName="myOrder">
      <Order.Screen
        name="myOrder"
        component={MyOrderContainer}
        options={{headerShown: false}}
      />
      <Order.Screen
        name="myOrdersList"
        component={MyOrdersListContainer}
        options={{headerShown: false}}
      />
    <Order.Screen
        name="Home"
        component={App}
        options={{headerShown: false}}
      />
    </Order.Navigator>
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
      <Account.Screen
        name="Home"
        component={App}
        options={{headerShown: false}}
      />
    </Account.Navigator>
  );
};

const CartStack = () => {
  return (
    <Cart.Navigator initialRouteName="cart">
      <Cart.Screen
        name="cart"
        component={CartContainer}
        options={{headerShown: false}}
      />
      <Cart.Screen
        name="orderReceived"
        component={OrderReceivedContainer}
        options={{headerShown: false}}
      />
            <Cart.Screen
        name="emptyCart"
        component={EmptyCartScreen}
        options={{headerShown: false}}
      />
      <Cart.Screen
        name="Home"
        component={App}
        options={{headerShown: false}}
      />
    </Cart.Navigator>
  );
};

const MyTabs = () => {
  const {t} = useTranslation();
  return (
    <Tab.Navigator
      initialRouteName="homeStack"
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
                  <Text style={styles.activeText}>{t('browse_text')}</Text>
                </View>
              ) : (
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <BrowseIcon />
                  <Text style={styles.unActiveText}>{t('browse_text')}</Text>
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
                  <Text style={styles.activeText}>{t('cart_text')}</Text>
                </View>
              ) : (
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <CartIcon />
                  <Text style={styles.unActiveText}>{t('cart_text')}</Text>
                </View>
              )}
            </View>
          ),
        }}
        name="cartStack"
        component={CartStack}
      />

      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused ? (
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 6,
                  }}>
                  <OrderActiveIcon />
                  <Text style={styles.activeText}>{t('order_text')}</Text>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                    marginTop: 6,
                  }}>
                  <OrdersIcon />
                  <Text style={styles.unActiveText}>{t('order_text')}</Text>
                </View>
              )}
            </View>
          ),
        }}
        name="orderStack"
        component={OrderStack}
      />

      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused ? (
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <ActivityActiveIcon />
                  <Text style={styles.activeText}>{t('activity_text')}</Text>
                </View>
              ) : (
                <View
                  style={{
                    flexDirection: 'column',
                    alignItems: 'center',
                  }}>
                  <ActivityIcon />
                  <Text style={styles.unActiveText}>{t('activity_text')}</Text>
                </View>
              )}
            </View>
          ),
        }}
        name="activity"
        component={ActivityContainer}
      />

      <Tab.Screen
        options={{
          title: '',
          tabBarIcon: ({focused, color}) => (
            <View>
              {focused ? (
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <AccountActiveIcon />
                  <Text style={styles.activeText}>{t('account_text')}</Text>
                </View>
              ) : (
                <View style={{flexDirection: 'column', alignItems: 'center'}}>
                  <AccountIcon />
                  <Text style={styles.unActiveText}>{t('account_text')}</Text>
                </View>
              )}
            </View>
          ),
        }}
        name="accountStack"
        component={AccountStack}
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
    lineHeight: '17@s',
    letterSpacing: '0.6@s',
    textAlign: 'center',
  },
  unActiveText: {
    fontFamily: fonts.avenir_regular,
    color: colors.greyColor,
    fontSize: '12@s',
    fontStyle: 'normal',
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
