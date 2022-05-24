import React, { useState } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { PaymentScreen } from '../Screens';
import { StripeProvider } from '@stripe/stripe-react-native';
import { useNavigation } from '@react-navigation/native';
import { useConfirmPayment } from '@stripe/stripe-react-native';

import { colors } from '../Utils/theme';

const PaymentContainer = () => {
    const {confirmPayment, loading} = useConfirmPayment();
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
      };

      const handlePayPress = async() => {
        console.log("");
      }

    return (
        <View style={styles.container}>
            <StripeProvider
                publishableKey={"pk_test_51KyFHhGeGlEJDOmcCqL8AVqDcShNxk8mTWBBvKDkMqR102d6epu3RY7Zzny8NBbn0D9O3EPm0n7GcgucKBseRue6001dM1qnAu"}
                merchantIdentifier="merchant.identifier"
            >
                <PaymentScreen goBack={goBack} handlePayPress={handlePayPress} loading={loading}/>
            </StripeProvider>
        </View>
    );
};

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
});

export default PaymentContainer;