import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';

import { colors, fonts } from '../Utils/theme';

const CardSizeComponent = ({
  cardStandard,
  cardDimensions,
  Childern,
  selectedSize = '',
  onPress,
  selectedCorner
}) => {
  const conditionalStyle =
    selectedSize == cardStandard || selectedCorner == cardStandard
      ? { ...styles.selected }
      : { ...styles.notSelected };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={{ ...styles.container, ...conditionalStyle }}>
      {Childern}
      <View style={styles.standardPositionContainer}>
        <Text style={styles.standardText} numberOfLines={1}>
          {cardStandard}
        </Text>
        <Text style={styles.dimensionsText} numberOfLines={1}>
          {cardDimensions}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
  container: {
    borderRadius: '10@s',
    marginLeft: '14@s',
    padding: '8@s',
    width: '156@s',
    height: '164@s',
    marginVertical: '6@s',
    position: 'relative',
  },
  selected: {
    borderWidth: 2,
    borderColor: colors.greenColor,
  },
  notSelected: {
    borderWidth: 1,
    borderColor: colors.innerBorderColor,
  },
  cardContainer: {
    borderWidth: 1.5,
    borderColor: colors.cardBorderColor,
    padding: '6@s',
    width: '117@s',
    height: '70@s',
    alignSelf: 'center',
    marginTop: '7@s',
  },
  cardTitle: {
    fontFamily: fonts.avenir_bold,
    fontSize: '9@s',
    fontStyle: 'normal',
    lineHeight: '9@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginTop: '2@s',
  },
  cardDirector: {
    fontFamily: fonts.avenir_regular,
    fontSize: '7@s',
    fontStyle: 'normal',
    lineHeight: '7@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginTop: '2@s',
  },
  contentContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  halvorsonPositionContainer: {
    position: 'absolute',
    bottom: '7@s',
    width: '100%',
    marginLeft: '5@s',
  },
  standardPositionContainer: {
    position: 'absolute',
    bottom: '10@s',
    width: '100%',
    marginLeft: '10@s',
  },
  cardGradientBorder: {
    backgroundColor: colors.gradientGreenColor,
    width: '100%',
    height: '3@s',
    borderRadius: '30@s',
    marginTop: '2@s',
  },
  cardStudio: {
    fontFamily: fonts.avenir_regular,
    fontSize: '7@s',
    fontStyle: 'normal',
    lineHeight: '8@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  cardDot: {
    backgroundColor: colors.darkGreenColor,
    width: '6@s',
    height: '6@s',
    borderRadius: '50@s',
  },
  standardText: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  dimensionsText: {
    fontFamily: fonts.avenir_regular,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '14@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginTop: '4@s',
  },
});

export default CardSizeComponent;
