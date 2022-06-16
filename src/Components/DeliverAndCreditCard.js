import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors,fonts} from '../Utils/theme';
import UnCheckedCircleIcon from '../Assests/Svgs/UnCheckedCircleIcon';
import CheckedBlueIcon from '../Assests/Svgs/CheckedBlueIcon';
import MasterCard from '../Assests/Svgs/MasterCard';
import VisaCard from '../Assests/Svgs/VisaCard';

const DeliverAndCreditCard = ({
  item,
    children,
    selected,
    onPress,
}) => {
  return (
    <TouchableOpacity style={styles.borderContainer} onPress={onPress}>
      <View style={styles.marginContainer}>
        <View style={styles.titleHeader}>
          <Text style={styles.titleText} numberOfLines={1}>
            {item?.fullName ? item?.fullName : item?.brand}
          </Text>
         {item?.brand && (item?.brand == 'Visa' ? <VisaCard/> : <MasterCard/>)}
        </View>
        <Text style={item?.companyName? styles.companyText : styles.companyStyle} numberOfLines={1}>
           {item?.companyName ? item?.companyName : item?.name}
        </Text>
        <Text style={styles.addressText} numberOfLines={2}>
            {item?.exp_month}
            </Text>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.addressText} numberOfLines={2}>
            {item.addressLine1}
            </Text>
            <Text style={styles.addressText} numberOfLines={2}>
            {item?.addressLine2}
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
