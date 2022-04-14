import React from 'react';
import {View, Text, useWindowDimensions} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

import { BackArrowHeader } from '../Components';
import {colors, fonts} from '../Utils/theme';


const FirstRoute = () => 
<View style={{flex: 1, backgroundColor: '#ff4081'}} />;
const SecondRoute = () => (
<View style={{flex: 1, backgroundColor: '#673ab7'}} />
);

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
});

const MyOrderScreen = () => {
  const {t} = useTranslation();
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'Active'},
    {key: 'second', title: 'Completed'},
  ]);

  const renderTabBar = props => (
    <TabBar
      {...props}
      indicatorStyle={styles.indicatorStyle}
      style={styles.tabsBackground}
      activeColor={colors.blackColor}
      inactiveColor={colors.cardBorderColor}
      pressOpacity="0"
      pressColor={colors.offWhiteColor}
      labelStyle={styles.labelStyle}
    />
  );

  return (
    <View style={styles.container}>
      <BackArrowHeader title={t('my_orders')} borderBottomWidth={0}/>
      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  labelStyle: {
    fontFamily: fonts.avenir_bold,
    marginTop: '12@s',
    fontSize: '15@s',
    fontStyle: 'normal',
    fontStyle: 'normal',
    lineHeight: '15@s',
    letterSpacing: '0.5@s',
    color: colors.greenColor,
    textTransform: 'capitalize',
  },
  tabsBackground: {
    backgroundColor: colors.offWhiteColor,
    padding: '5@s',
    height: '72@s',
  },
  indicatorStyle: {
    borderColor: colors.greenColor,
    borderWidth: 2,
    width: '100@s',
    marginLeft: '38@s',
    marginBottom: '20@s',
  },
});

export default MyOrderScreen;
