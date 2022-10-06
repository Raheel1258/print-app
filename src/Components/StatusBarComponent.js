import { Platform, StatusBar, View,Appearance } from 'react-native';

// import DeviceInfo from 'react-native-device-info';
import React from 'react';

const StatusBarComponent = ({ padding = 0, color = null, extraPadding = 0 }) => {
//   const getPadding = () => {
//     if (DeviceInfo.hasNotch() || Platform.OS === 'android') {
//       return padding;
//     } else if (Platform.OS === 'ios') {
//       return 20 + extraPadding;
//     }
//   };
  console.log(Appearance.getColorScheme());
  return (
    <View style={{ marginTop: 0, backgroundColor: '#fff' }}>
        <View style={{marginTop: Platform.OS === "ios" ? 50:10}}/>
      <StatusBar backgroundColor={"white"} barStyle={'dark-content'} />
    </View>
  );
};

export default StatusBarComponent;