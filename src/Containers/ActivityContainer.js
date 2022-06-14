import React, { useRef, useState, useEffect } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation, useIsFocused } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { getAllActivity, changeActivityStatus, allMarkToReadActivity } from '../store/actions/activitiesAction';
import { colors } from '../Utils/theme';

import Storage from '../Utils/Storage';
import ActivityScreen from '../Screens/ActivityScreen';

const ActivityContainer = () => {
  const dispatch = useDispatch();
  const activityRBSheet = useRef();
  const navigation = useNavigation();
  const isFocused = useIsFocused();

  const [animation, setAnimation] = useState(false);
  const [focused, setFocused] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const activityData = useSelector(state => state?.activitiesReducer?.activitiesDetail)

  // useEffect(() => {
  //   dispatch(getAllActivity(setAnimation));
  // }, [isFocused])

  useEffect(() => {
    isFocused && Storage.retrieveData('token').then((token) => {
      setUserToken(token);
      !token && activityRBSheet.current.open()
      token && dispatch(getAllActivity(setAnimation));
    });
  }, [isFocused])

  const navigate = (routeName, data = {}) => {
    navigation.navigate(routeName, data);
  };

  const goBack = () => {
    navigation.goBack();
  };

  const handleActivityIsRead = (id) => {
    dispatch(changeActivityStatus(id,setAnimation))
  }

  const handleAllActivityRead = () => {
    dispatch(allMarkToReadActivity(setAnimation))
  }

  return (
    <View style={styles.container}>
      <ActivityScreen
        goBack={goBack}
        activityRBSheet={activityRBSheet}
        focused={focused}
        setFocused={setFocused}
        navigate={navigate}
        activityData={activityData}
        animation={animation}
        handleActivityIsRead={handleActivityIsRead}
        handleAllActivityRead={handleAllActivityRead}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhiteColor,
  },
});

export default ActivityContainer;
