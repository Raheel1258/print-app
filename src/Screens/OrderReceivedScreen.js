import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import ThankyouIcon from '../Assests/Svgs/ThankyouIcon';
import {CartNotifyComponent} from '../Components';
import {colors, fonts} from '../Utils/theme';

const OrderReceivedScreen = ({welcome, orderId}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.orderReceived}>Order Received</Text>
      </View>
      {welcome ? <CartNotifyComponent
        emptyScreen={false}
        title={t('thankyou_text')}
        order={orderId}
        description={t('description_with_offline_orderPlace')}
        description1={t('description1_for_upload_artwork')} 
        description2={t('description2_for_thankyou')}
        childern={<ThankyouIcon/>}
        /> : <CartNotifyComponent
        emptyScreen={false}
        title={t('thankyou_text')}
        order={orderId}
        description={t('description_with_online_orderPlace')}
        description1={t('description1_for_upload_artwork')} 
        description2={t('description2_for_thankyou')}
        childern={<ThankyouIcon/>}
        />}
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

export default OrderReceivedScreen;
