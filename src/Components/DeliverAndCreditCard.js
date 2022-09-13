import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';

import {colors,fonts} from '../Utils/theme';
import {useTranslation} from 'react-i18next';
import UnCheckedCircleIcon from '../Assests/Svgs/UnCheckedCircleIcon';
import CheckedBlueIcon from '../Assests/Svgs/CheckedBlueIcon';
import MasterCard from '../Assests/Svgs/MasterCard';
import VisaCard from '../Assests/Svgs/VisaCard';

const DeliverAndCreditCard = ({
    title,
    children,
    companyName,
    addressLineOne,
    addressLineTwo = '',
    selected,
    onPress,
    flagForRender,
    item,
    handleSelectedPrimary = () => {},
    handleSelectedPrimaryCard = () =>{}
}) => {
  const {t} = useTranslation();

  return (
    <TouchableOpacity style={styles.borderContainer} onPress={onPress}>
      {flagForRender ? <View style={styles.marginContainer}>
        <View style={styles.titleHeader}>
          <Text style={styles.titleText} numberOfLines={1}>
            {item?.fullName}
          </Text>
         {/* {children} */}
        </View>
        <Text style={item?.companyName? styles.companyText : styles.companyStyle} numberOfLines={1}>
           {item?.companyName && item?.companyName}
        </Text>
        <View style={styles.contentContainer}>
          <View>
            <Text style={styles.addressText} numberOfLines={2}>
            {/* {`${item.addressLine1}, ${item.addressLine2}, ${item.area}, ${item.district}, ${item.cityCountry}`} */}
            {`${
                item?.addressLine1
              }, ${item?.addressLine2}, ${item?.area}, ${
                item?.district
              }, ${item?.cityCountry}`}
            </Text>
            {/* <Text style={styles.addressText} numberOfLines={2}>
            {item?.addressLine2}
            </Text> */}
          </View>
          {item?.primary ? <CheckedBlueIcon /> : <UnCheckedCircleIcon />}
        </View>
      </View>
      :
      <View style={styles.marginContainer}>
        <View style={styles.titleHeader}>
          <Text style={styles.titleText} numberOfLines={1}>
            {`${item?.brand}(${item?.last4})`}
          </Text>
          {item?.brand == 'Visa' ? <VisaCard /> : <MasterCard />}
         {/* {children} */}
        </View>
        {/* <Text style={styles.companyStyle} numberOfLines={1}>
           {item?.brand}
        </Text> */}
        <View style={styles.contentContainer}>
          <View>
          <Text style={styles.addressText} numberOfLines={2}>
            {item?.name}
            </Text>
            <Text style={styles.addressText} numberOfLines={2}>
            {`${t('exp_Card_Date')}${item?.exp_month}/${item?.exp_year}`}
            </Text>
            {/* <Text style={styles.addressText} numberOfLines={2}>
            {item?.country}
            </Text> */}
          </View>
          {item?.metadata.primary == "true" ? <CheckedBlueIcon /> : <UnCheckedCircleIcon />}
        </View>
      </View>
      }
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
