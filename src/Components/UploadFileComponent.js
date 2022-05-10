import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import LeftArrow from '../Assests/Svgs/LeftArrow';
import { colors, fonts } from '../Utils/theme';

const UploadFileComponent = ({ title, onPress, Children, selection, isSelected = false }) => {
  const borderStyle = { 
    borderBottomWidth: isSelected ? 2 : 1 ,
    borderBottomColor: isSelected ? null : colors.inputBorderColor,
    borderWidth: isSelected ? 2 : 0,
    borderColor: isSelected ? colors.greenColor : 0,
  }

  return (
    <TouchableOpacity
      style={Children ? styles.accountContainer : 
        { ...styles.Container, ...borderStyle }}
      onPress={onPress}>
      <View style={styles.iconContainer}>
        <View style={Children ? styles.iconWrapper : null}>
          {Children}
        </View>
        <View style={styles.infoConatiner}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Text style={styles.desText}>{selection}</Text>
        </View>
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

    // borderBottomWidth: 1,
    borderWidth: 2,
    borderColor: colors.greenColor,
  },
  accountContainer: {
    height: '60@s',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: '10@s',
    borderBottomWidth: 1,
    borderBottomColor: colors.inputBorderColor,
    marginTop: '5@s'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width:'97%'
  },
  title: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    // fontWeight: '400',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    width: '90@s',
    color: colors.blackColor,
  },
  rightArrow: {
    transform: [{ rotate: '180deg' }],
  },
  iconWrapper: {
    marginRight: '12@s',
  },
  infoConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  desText: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginLeft: '10@s'
  }
});

export default UploadFileComponent;
