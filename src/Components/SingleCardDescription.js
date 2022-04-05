import React from 'react';
import {View, Text} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors} from '../Utils/theme';

const SingleCardDescription = () => {
  return (
    <View style={styles.paddingContainer}>
      <Text style={styles.productTitle} numberOfLines={1}>
        Premium (Thick) Business Card
      </Text>
      <Text style={styles.productPrice} numberOfLines={1}>
        From HK$ 68 / 100 pc
      </Text>
      <Text style={styles.productDescription}>
        Thick, smooth and premium. The Premium Business Card is a popular choice
        for professionals.
      </Text>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryType}>Paper type:</Text>
        <Text style={styles.categoryDescription} numberOfLines={1}>
          Woodfree Card (350g)
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryType}>Lead time:</Text>
        <Text style={styles.categoryDescription} numberOfLines={1}>
          2-3 business days
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryType}>Colour:</Text>
        <Text style={styles.categoryDescription} numberOfLines={1}>
          CYMK
        </Text>
      </View>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryType}>Sizes:</Text>
        <Text style={styles.categoryDescription} numberOfLines={1}>
          3 sizes
        </Text>
      </View>
    </View>
  );
};

const styles = ScaledSheet.create({
  paddingContainer: {
    paddingHorizontal: '15@s',
    marginTop: '10@s',
  },
  productTitle: {
    // fontFamily:Avenir LT Std,
    fontSize: '18@s',
    fontStyle: 'normal',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '24@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  productPrice: {
    // fontFamily:Avenir LT Std,
    fontSize: '13@s',
    fontStyle: 'normal',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '12@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.greenColor,
    marginTop: '9@s',
  },
  productDescription: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginVertical: '6@s',
  },
  categoryType: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '800',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.blackColor,
    width: '85@s',
  },
  categoryDescription: {
    // fontFamily:Avenir LT Std,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontWeight: '400',
    fontStyle: 'normal',
    lineHeight: '13@s',
    letterSpacing: '0.4@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
  },
  categoryContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: '4@s',
  },
});

export default SingleCardDescription;