import React from 'react';
import { Platform, StatusBar, View, Appearance } from 'react-native';


const StatusBarComponent = ({ padding = 0, color = null, extraPadding = 0 }) => {
  console.log(Appearance.getColorScheme());
  return (
    <View style={{ marginTop: 0, backgroundColor: '#fff' }}>
      <View style={{ marginTop: Platform.OS === "ios" ? 50 : 10 }} />
      <StatusBar backgroundColor={"white"} barStyle={'dark-content'} />
    </View>
  );
};

export default StatusBarComponent;