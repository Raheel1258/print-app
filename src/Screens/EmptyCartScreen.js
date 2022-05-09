import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useTranslation } from 'react-i18next';

import EmptyIcon from '../Assests/Svgs/EmptyIcon';
import { CartNotifyComponent } from '../Components';
import { colors, fonts } from '../Utils/theme';

const EmptyCartScreen = () => {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.orderReceived}>{t('cart_text')}</Text>
      </View>
      <CartNotifyComponent
        title={t('empty_cart')}
        description='Vivamus suscipit tortor eget felis porttitor volutpat. Donec sollicitudin molestie malesuada. Cras ultricies ligula sed magna dictum porta.'
        childern={<EmptyIcon />}
      />
    </View>
  );
};

const styles = ScaledSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.whiteColor,
  },
  header: {
    borderBottomWidth: 10,
    borderBottomColor: colors.innerBorderColor,
    marginTop: '7@s',
  },
  orderReceived: {
    fontFamily: fonts.avenir_next,
    fontSize: '18@s',
    fontStyle: 'normal',
    lineHeight: '18@s',
    letterSpacing: '0.2@s',
    textAlign: 'left',
    color: colors.blackColor,
    textAlign: 'center',
    marginBottom: '12@s',
  },
});

export default EmptyCartScreen;
