import React from 'react';
import {View, Text,FlatList} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import {BackArrowHeader, NotificationActivity} from '../Components';
import {colors, fonts} from '../Utils/theme';

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

const ActivityScreen = () => {
  const {t} = useTranslation();
  const renderItem = ({item}) => <NotificationActivity date={item.date} readMark={item.readMark} />;
  return (
    <View style={styles.container}>
      <BackArrowHeader title={t('activity_text')} borderBottomWidth={0} />
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        contentContainerStyle={styles.flatlistContainer}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.offWhiteColor,
  },
  flatlistContainer:{
    paddingBottom:'60@s'
  }
});

export default ActivityScreen;
