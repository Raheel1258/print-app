import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import LeftArrow from '../Assests/Svgs/LeftArrow';
import {colors, fonts} from '../Utils/theme';

const UploadFileComponent = ({title, onPress,Children}) => {
  return (
    <TouchableOpacity  style={Children ? styles.accountContainer :  styles.Container} onPress={onPress}>
      <View style={styles.iconContainer}>
        <View style={Children ? styles.iconWrapper : null}>
        {Children}
        </View>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
      </View>
      <View style={styles.rightArrow}>
        <LeftArrow />
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  Container: {
    height: '65@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '20@s',
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
  },
  accountContainer:{
    height: '60@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '10@s',
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
    marginTop:'5@s'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    lineHeight: '16@s',
    letterSpacing: '0.6@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  rightArrow: {
    transform: [{rotate: '180deg'}],
  },
  iconWrapper: {
    marginRight: '12@s',
  },
});

export default UploadFileComponent;
