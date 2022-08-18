import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import AuthenticationLogo from '../Assests/Svgs/AuthenticationLogo';
import { BackArrowHeader, NotificationActivity, BottomSheetComponent, GreenButton } from '../Components';
import { colors, fonts } from '../Utils/theme';

const ActivityScreen = ({ goBack, focused, setFocused, activityRBSheet, navigate, activityData, animation, handleActivityIsRead, handleAllActivityRead, userToken }) => {
  var sortedArray = activityData?.sort((a, b) => Date.parse(new Date(a._id)) - Date.parse(new Date(b._id)));
  const { t } = useTranslation();
  const renderItem = ({ item }) => {

    return (<>
      <NotificationActivity item={item} readMark={activityData[0]._id} handleActivityIsRead={handleActivityIsRead} handleAllActivityRead={handleAllActivityRead} />
    </>)
  };
  return (
    <>
      <View style={styles.container}>
        {
          animation ?
            <View style={styles.loaderContainer}>
              <ActivityIndicator size="small" color="#000" animating={true} />
            </View>
            : <>
              <BackArrowHeader arrow={false} goBack={goBack} title={t('activity_text')} borderBottomWidth={0} />
              {(activityData?.length > 0 && userToken) ? <FlatList
                data={sortedArray?.reverse()}
                renderItem={renderItem}
                keyExtractor={item => item.id}
                contentContainerStyle={styles.flatlistContainer}
              /> : <View style={styles.message}><Text style={{ color: 'black' }}>No Data</Text></View>}
            </>

        }
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
          // note={false}
          refRBSheet={activityRBSheet}
          height={420}
        // onClose={false}
        />
      </View>
    </>
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
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  message: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.blackColor,
    fontFamily: fonts.avenir_bold,
    fontSize: '14@s',
    fontStyle: 'normal',
    lineHeight: '22@s',
  }


});

export default ActivityScreen;
