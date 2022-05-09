import React from 'react';
import { View, FlatList, useWindowDimensions } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';

import AuthenticationLogo from '../Assests/Svgs/AuthenticationLogo';
import { BackArrowHeader, OrdersComponent, BottomSheetComponent, GreenButton } from '../Components';
import { colors, fonts } from '../Utils/theme';

const activeOrder = [
  {
    id: '1',
    orderNotify: 'Order received',
  },
  {
    id: '2',
    orderNotify: 'Out for delivery',
  },
  {
    id: '3',
    orderNotify: 'Ready for pickup',
  },
  {
    id: '4',
    orderNotify: 'Cancelled',
  },
  {
    id: '5',
    orderNotify: 'Order received',
  },
  {
    id: '6',
    orderNotify: 'Printing in process',
  },
  {
    id: '7',
    orderNotify: 'Order completed',
  },
];
const completedOrder = [
  {
    id: '1',
    orderNotify: 'Order completed',
  },
  {
    id: '2',
    orderNotify: 'Order completed',
  },
  {
    id: '3',
    orderNotify: 'Order completed',
  },
  {
    id: '4',
    orderNotify: 'Order completed',
  },
  {
    id: '5',
    orderNotify: 'Order completed',
  },
  {
    id: '6',
    orderNotify: 'Order completed',
  },
  {
    id: '7',
    orderNotify: 'Order completed',
  },
];

const MyOrderScreen = ({ navigate, goBack, focused, setFocused, orderRBSheet }) => {
  const { t } = useTranslation();
  const layout = useWindowDimensions();

  const renderItem = ({ item }) => (
    <OrdersComponent navigate={navigate} orderNotify={item.orderNotify} />
  );

  const FirstRoute = () => (
    <View style={styles.activeContainer}>
      <FlatList
        data={activeOrder}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );

  const SecondRoute = () => (
    <View style={styles.activeContainer}>
      <FlatList
        data={completedOrder}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
  });

  const [index, setIndex] = React.useState(1);
  const [routes] = React.useState([
    { key: 'first', title: 'Active' },
    { key: 'second', title: 'Completed' },
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={styles.tabsBackground}
      activeColor={colors.blackColor}
      inactiveColor={colors.cardBorderColor}
      pressOpacity={0}
      pressColor={colors.offWhiteColor}
      labelStyle={styles.labelStyle}
    />
  );

  return (
    <View style={styles.container}>
      <BackArrowHeader arrow={false} goBack={goBack} title={t('my_orders')} borderBottomWidth={0} />
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
      />
      <BottomSheetComponent
        childern={
          <>
            <View style={styles.logoWrapper}>
              <AuthenticationLogo />
            </View>
            <View style={styles.signinButtonWrapper}>
              <GreenButton
                backgroundColor={focused ? colors.greenColor : colors.whiteColor}
                color={focused ? colors.whiteColor : colors.greenColor}
                borderWidth={2}
                title={t('signup_text')}
                onPress={() => {
                  orderRBSheet.current.close();
                  navigate('auth', { next: 'signup' });
                  setFocused(true);
                }}
              />
            </View>
            <View style={styles.signinButtonWrapper}>
              <GreenButton
                title={t('sheet_login_in')}
                backgroundColor={focused ? colors.whiteColor : colors.greenColor}
                color={focused ? colors.greenColor : colors.whiteColor}
                borderWidth={2}
                onPress={() => {
                  orderRBSheet.current.close();
                  navigate('auth', { next: 'signin' });
                  setFocused(false);
                }}
              />
            </View>
          </>
        }
        languageTitle={t('Signup_today')}
        note={false}
        refRBSheet={orderRBSheet}
        height={420}
        onClose={false}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  activeContainer: {
    padding: '15@s',
  },
  labelStyle: {
    fontFamily: fonts.avenir_bold,
    marginTop: '12@s',
    fontSize: '15@s',
    fontStyle: 'normal',
    fontStyle: 'normal',
    lineHeight: '15@s',
    letterSpacing: '0.2@s',
    color: colors.greenColor,
    textTransform: 'capitalize',
  },
  tabsBackground: {
    backgroundColor: colors.offWhiteColor,
    padding: '5@s',
    height: '72@s',
    marginBottom: '10@s',
  },
  indicatorStyle: {
    borderColor: colors.greenColor,
    borderWidth: 2,
    width: '100@s',
    marginLeft: '38@s',
    marginBottom: '20@s',
  },
  flatlistContainer: {
    paddingBottom: '50@s',
  },
  logoWrapper: {
    alignItems: 'center',
    marginVertical: '15@s'
  },
  signinButtonWrapper: {
    marginTop: '20@s'
  },
});

export default MyOrderScreen;
