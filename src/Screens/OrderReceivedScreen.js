import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {ScaledSheet} from 'react-native-size-matters';
import {useTranslation} from 'react-i18next';

import ThankyouIcon from '../Assests/Svgs/ThankyouIcon';
import {CartNotifyComponent} from '../Components';
import {colors, fonts} from '../Utils/theme';

const OrderReceivedScreen = ({welcome}) => {
  const {t} = useTranslation();
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.orderReceived}>Order Received</Text>
      </View>
      {welcome ? <CartNotifyComponent
        emptyScreen={false}
        title={t('thankyou_text')}
        order={t('order_refrence')}
        description=" Order received! We will send you an order confirmation e-mail shortly with our bank information. We’ll begin processing your order as soon as the payment is received."
        description1="If you haven’t uploaded your artwork file, you can now e-mail it to us to order@printprint.com.hk (please quote your order reference)" 
        description2="Thank you for using PrintPrint :)"
        childern={<ThankyouIcon/>}
        /> : <CartNotifyComponent
        emptyScreen={false}
        title={t('thankyou_text')}
        order={t('order_refrence')}
        description="Order received! We will begin processing your order shortly and let you know as soon as it is ready."
        description1="If you haven’t uploaded your artwork file, you can now e-mail it to us to order@printprint.com.hk (please quote your order reference)" 
        description2="Thank you for using PrintPrint :)"
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
