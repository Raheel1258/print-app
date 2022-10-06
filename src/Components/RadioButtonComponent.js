import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import UnCheckedCircleIcon from '../Assests/Svgs/UnCheckedCircleIcon';
import CheckedBlueIcon from '../Assests/Svgs/CheckedBlueIcon';
import MasterCard from '../Assests/Svgs/MasterCard';
import VisaCard from '../Assests/Svgs/VisaCard';
import { colors, fonts } from '../Utils/theme';
[];
const RadioButtonComponent = ({
  title,
  description,
  description1,
  secondTitle,
  secondDescription,
  thirdDescription,
  onPress,
  radioButtonStatus,
  setRadioButtonStatus,
  toggleModal = () => { },
  handleCheckedOne,
  handleCheckedTwo,
  openfun = () => { },
  addressRadio,
}) => {
  const { t } = useTranslation();
  return (
    <View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.radioButtonWrapper}
          onPress={() => {
            setRadioButtonStatus(true);
            handleCheckedOne();
            openfun();
          }}>
          {radioButtonStatus ? <CheckedBlueIcon /> : <UnCheckedCircleIcon />}
        </TouchableOpacity>
        {description !== 'No' && addressRadio && (
          <View>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.deliveryText}>{title}</Text>
              <Text style={styles.deliveryDescription}>{t('deviver_to')}</Text>
              <Text
                numberOfLines={4}
                style={styles.localDeliveryDescription}>{`${description?.fullName
                  }, ${description?.companyName && description?.companyName}\n${description?.addressLine1
                  }, ${description?.addressLine2}\n${description?.area}, ${description?.district
                  }, ${description?.cityCountry}`}</Text>
            </TouchableOpacity>
          </View>
        )}
        {description === 'No' && (
          <View>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.deliveryText}>{title}</Text>
              <Text style={styles.deliveryDescription}>
                {t('select_address_state')}
              </Text>
            </TouchableOpacity>
          </View>
        )}

        {!addressRadio && description !== 'Noo' && (
          <View>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.deliveryText}>{title}</Text>
              <Text style={styles.deliveryDescription}>
                {description?.name}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingLeft: 10,
                }}>
                {description?.brand == 'Visa' ? <VisaCard /> : <MasterCard />}
                <Text style={{ ...styles.deliveryDescription, paddingTop: 2 }}>
                  {description?.brand} ({description?.last4})
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {description === 'Noo' && (
          <View>
            <TouchableOpacity onPress={onPress}>
              <Text style={styles.deliveryText}>{title}</Text>
              <Text style={styles.deliveryDescription}>{t('Select card')}</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
      <View style={styles.borderBottom} />
      <View style={styles.container}>
        <TouchableOpacity
          style={
            secondTitle === 'Bank Transfer / Cheque'
              ? styles.radiostyling
              : styles.radioButtonWrapper
          }
          onPress={() => {
            setRadioButtonStatus(false);
            toggleModal();
            handleCheckedTwo();
          }}>
          {!radioButtonStatus ? <CheckedBlueIcon /> : <UnCheckedCircleIcon />}
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.deliveryText}>{secondTitle}</Text>
          <Text style={styles.deliveryDescription}>{secondDescription}</Text>
          <Text style={styles.selfDeliveryDescription}>{thirdDescription}</Text>
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
    lineHeight: '18@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    marginLeft: '10@s',
    marginBottom: '6@s',
  },
  deliveryDescription: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '18@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginLeft: '10@s',
    width: '280@s',
  },
  selfDeliveryDescription: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '18@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginLeft: '10@s',
    width: '280@s',
    marginTop: '3@s',
  },
  localDeliveryDescription: {
    fontFamily: fonts.avenir_light,
    fontSize: '12@s',
    fontStyle: 'normal',
    lineHeight: '17@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.lightBlackColor,
    marginLeft: '10@s',
    width: '280@s',
    marginTop: '3@s',
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderBottomColor: colors.innerBorderColor,
    marginHorizontal: '20@s',
  },
  radioButtonWrapper: {
    padding: '5@s',
  },
  radiostyling: {
    marginBottom: '13@s',
    padding: '5@s',
  },
});

export default RadioButtonComponent;
