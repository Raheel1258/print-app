import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import LeftArrow from '../Assests/Svgs/LeftArrow';
import {colors} from '../Utils/theme';

const UploadFileComponent = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.Container} onPress={onPress}>
      <Text style={styles.title} numberOfLines={1}>{title}</Text>
      <View style={styles.rightArrow}>
<LeftArrow/>
</View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  Container: {
    width: '100%',
    height: '65@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '25@s',
    borderBottomWidth: 1,
    borderBottomColor: colors.offWhiteColor,
  },
  title: {
    // fontFamily: Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: '16@s',
    letterSpacing: '0.6@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  rightArrow:{
transform:[{rotate:'180deg'}]
  }
});

export default UploadFileComponent;
