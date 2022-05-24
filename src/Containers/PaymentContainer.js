import React, { useState } from 'react';
import { View } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { PaymentScreen } from '../Screens';
import { StripeProvider } from '@stripe/stripe-react-native';
import { useNavigation } from '@react-navigation/native';

import { colors } from '../Utils/theme';

const PaymentContainer = () => {
    const navigation = useNavigation();
    const goBack = () => {
        navigation.goBack();
      };
    return (
        <View style={styles.container}>
            <StripeProvider
                // publishableKey={publishableKey}
                merchantIdentifier="merchant.identifier"
            >
                <PaymentScreen goBack={goBack}/>
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