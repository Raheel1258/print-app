import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';

import MasterCard from '../Assests/Svgs/MasterCard';
import VisaCard from '../Assests/Svgs/VisaCard';
import { colors, fonts } from '../Utils/theme';
import {useTranslation} from 'react-i18next';

const MyAddresses = ({ description, address, card, handleUserAddressRemove, refRBSheet, setUpdatedAddress, makePrimary, title }) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      {address &&
        <>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{title ?? address?.fullName}</Text>
            {address?.primary == true && <Text style={styles.headerPrimary}>{t('show_address_primary')}</Text>}
          </View>
          <View>
            <Text style={styles.addressText}>{address?.addressLine1}</Text>
            <Text style={styles.addressText}>{address?.addressLine2}</Text>
          </View>
          <View style={styles.editableContainer}>
            <TouchableOpacity onPress={() => { refRBSheet.current.open(), setUpdatedAddress(address) }} style={styles.paddingWrapper}><Text style={styles.editableText}>{t('edit_product')}</Text></TouchableOpacity>
            {address?.primary == false && <TouchableOpacity onPress={() => makePrimary(address?._id)} style={styles.paddingWrapper}><Text style={styles.editableText}>{t('make_address_primary')}</Text></TouchableOpacity>}
            <TouchableOpacity onPress={() => handleUserAddressRemove(address?._id)} style={styles.paddingWrapper}><Text style={styles.editableText}>{t('remove_product')}</Text></TouchableOpacity>
          </View>

        </>}
        {card &&
        <>
          <View style={styles.header}>
            <Text style={styles.headerTitle}>{card?.name}</Text>
            {card?.metadata?.primary === "true" && <Text style={styles.headerPrimary}>{t('show_address_primary')}</Text>}
          </View>
          <View>
            <View style={styles.cardPrivacyContainer}>
              <Text style={styles.cardNumText}>{t('card_number')}:</Text>
              <Text style={styles.masterCardText}>{card?.brand}</Text>
             {card?.brand == "Visa" ? <VisaCard/>:<MasterCard /> }
            </View>
            <View style={styles.cardPrivacyContainer}>
              <Text style={styles.cardNumText}>{t('expiry_month')}:</Text>
              <Text style={styles.cardNumText}>{card?.exp_month} / {card?.exp_year}</Text>
            </View>
            <View style={styles.cardPrivacyContainer}>
              <Text style={styles.cardNumText}>CVC:</Text>
              <Text style={styles.cardNumText}>***</Text>
            </View>
          </View>
          <View style={styles.editableContainer}>
            <TouchableOpacity onPress={() => {refRBSheet.current.open(), setUpdatedAddress(card)}} style={styles.paddingWrapper}><Text style={styles.editableText}>{t('edit_product')}</Text></TouchableOpacity>
            {card.metadata.primary === "false" && <TouchableOpacity onPress={() => makePrimary(card?.id)} style={styles.paddingWrapper}><Text style={styles.editableText}>{t('make_address_primary')}</Text></TouchableOpacity>}
            <TouchableOpacity onPress={() => handleUserAddressRemove(card?.id)} style={styles.paddingWrapper} ><Text style={styles.editableText}>{t('remove_product')}</Text></TouchableOpacity>
          </View>
        </>}
    </View>


  );
};

const styles = ScaledSheet.create({
  container: {
    marginHorizontal: '15@s',
    marginTop: '20@s',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: '7@s',
  },
  headerTitle: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontStyle: 'normal',
    lineHeight: '12@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
  },
  headerPrimary: {
    fontFamily: fonts.avenir_bold,
    fontSize: '12@s',
    fontStyle: 'normal',
    fontStyle: 'normal',
    lineHeight: '12@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
  },
  editableContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '60%',
    marginTop: '7@s'
  },
  addressText: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
  },
  editableText: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.greenColor,
    marginLeft: '-2@s',
    marginRight: '5@s'
  },
  paddingWrapper: {
    padding: '3@s'
  },
  cardPrivacyContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardNumText: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    width: '110@s',
    marginTop: '2@s'
  },
  masterCardText: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '16@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginTop: '2@s',
    marginRight: '7@s'
  }
});

export default MyAddresses;
