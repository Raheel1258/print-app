import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import AuthenticationLogo from '../Assests/Svgs/AuthenticationLogo';
import { BackArrowHeader, NotificationActivity, BottomSheetComponent, GreenButton } from '../Components';
import { colors, fonts } from '../Utils/theme';

const DATA = [
  {
    id: '1',
    date: 'Today',
    readMark: 'Mark as all read',
  },
  {
    id: '2',
    date: '2 March 2022',
  },
  {
    id: '3',
    date: '1 March 2022',
  },
];

const ActivityScreen = ({ goBack, focused, setFocused, activityRBSheet, navigate }) => {
  const { t } = useTranslation();
  const renderItem = ({ item }) => <NotificationActivity date={item.date} readMark={item.readMark} />;
  return (
    <View style={styles.container}>
      <BackArrowHeader arrow={false} goBack={goBack} title={t('activity_text')} borderBottomWidth={0} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatlistContainer}
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
                  activityRBSheet.current.close();
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
                  activityRBSheet.current.close();
                  navigate('auth', { next: 'signin' });
                  setFocused(false);
                }}
              />
            </View>
          </>
        }
        languageTitle={t('Signup_today')}
        note={false}
        refRBSheet={activityRBSheet}
        height={420}
        onClose={false}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhiteColor,
  },
  flatlistContainer: {
    paddingBottom: '60@s'
  },
  logoWrapper: {
    alignItems: 'center',
    marginVertical: '15@s'
  },
  signinButtonWrapper: {
    marginTop: '20@s'
  },

});

export default ActivityScreen;
