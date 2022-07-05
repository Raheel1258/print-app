import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors,fonts} from '../Utils/theme';
import UnCheckedCircleIcon from '../Assests/Svgs/UnCheckedCircleIcon';
import CheckedBlueIcon from '../Assests/Svgs/CheckedBlueIcon';

const DeliverAndCreditCard = ({
    title,
    children,
    companyName,
    addressLineOne,
    addressLineTwo = '',
    selected,
    onPress,
    handleSelectedPrimary
}) => {
  // const new="sdsdfs";
  return (
    <TouchableOpacity style={styles.borderContainer} onPress={onPress}>
      <View style={styles.marginContainer}>
        <View style={styles.titleHeader}>
          <Text style={styles.titleText} numberOfLines={1}>
            {title}
          </Text>
         {children}
        </View>
        <Text style={companyName? styles.companyText : styles.companyStyle} numberOfLines={1}>
           {companyName}
        </Text>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.addressText} numberOfLines={2}>
            {addressLineOne}
            </Text>
            <Text style={styles.addressText} numberOfLines={2}>
            {addressLineTwo}
            </Text>
          </View>
          {selected ? <CheckedBlueIcon /> : <UnCheckedCircleIcon />}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = ScaledSheet.create({
    marginContainer: {
        marginHorizontal: '8@s',
      },
      titleText: {
        fontFamily: fonts.avenir_bold,
        fontSize: '12@s',
        fontStyle: 'normal',
        lineHeight: '13@s',
         letterSpacing: '0.2@s',
        textAlign: 'left',
        color: colors.blackColor,
        marginRight:'7@s'
      },
      contentContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginRight: '8@s',
        marginBottom: '20@s',
      },
      borderContainer: {
        borderBottomColor: colors.cardBorderColor,
        borderBottomWidth: 1,
        marginBottom:'10@s'
      },
      addressText: {
        fontFamily: fonts.avenir_light,
        fontSize: '12@s',
        fontStyle: 'normal',
        lineHeight: '17@s',
         letterSpacing: '0.2@s',
        textAlign: 'left',
        color: colors.lightBlackColor,
        width: '250@s',
      },
      companyText: {
        fontFamily: fonts.avenir_light,
        fontSize: '12@s',
        fontStyle: 'normal',
        lineHeight: '13@s',
         letterSpacing: '0.2@s',
        textAlign: 'left',
        color: colors.blackColor,
        marginTop: '5@s',
        marginBottom: '10@s',
      },
      titleHeader:{
        flexDirection:'row',
        alignItems:'center',
        marginTop:'10@s'
      },
      companyStyle:{
        marginBottom:-8
      }
});

export default DeliverAndCreditCard;
