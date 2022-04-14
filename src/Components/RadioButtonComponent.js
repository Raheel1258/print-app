import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import UnCheckedCircleIcon from '../Assests/Svgs/UnCheckedCircleIcon';
import CheckedBlueIcon from '../Assests/Svgs/CheckedBlueIcon';
import {colors, fonts} from '../Utils/theme';
[];
const RadioButtonComponent = ({
  title,
  description,
  secondTitle,
  secondDescription,
  thirdDescription,
  onPress,
  radioButtonStatus,
  setRadioButtonStatus,
}) => {
  const {t} = useTranslation();
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setRadioButtonStatus(true)}>
          {radioButtonStatus ? <CheckedBlueIcon /> : <UnCheckedCircleIcon />}
        </TouchableOpacity>
        <View>
          <TouchableOpacity onPress={onPress}>
            <Text style={styles.deliveryText}>{title}</Text>
            <Text style={styles.deliveryDescription}>{description}</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.borderBottom} />
      <View style={styles.container}>
        <TouchableOpacity onPress={() => setRadioButtonStatus(false)}>
          {!radioButtonStatus ? <CheckedBlueIcon /> : <UnCheckedCircleIcon />}
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.deliveryText}>{secondTitle}</Text>
          <Text style={styles.deliveryDescription}>{secondDescription}</Text>
          <Text style={styles.deliveryDescription}>{thirdDescription}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    marginVertical: '20@s',
    marginHorizontal: '15@s',
    flexDirection: 'row',
    alignItems: 'center',
  },
  deliveryText: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '14@s',
    letterSpacing: '0.5@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginLeft: '12@s',
    marginBottom: '6@s',
  },
  deliveryDescription: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '14@s',
    letterSpacing: '0.5@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginLeft: '12@s',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.innerBorderColor,
    marginHorizontal: '20@s',
  },
});

export default RadioButtonComponent;
