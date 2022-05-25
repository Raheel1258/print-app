import React from "react";
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { colors } from '../Utils/theme';
import { useTranslation } from 'react-i18next';
import {BackArrowHeader,AddNewCreditCardForm} from '../Components';


const PaymentScreen = ({ goBack, handleCreditCard, animation, creditCardState, navigate }) => {
    const { t } = useTranslation();
    return (
        <View style={styles.container}>
            <BackArrowHeader goBack={goBack} title={t("payment")} />
            <AddNewCreditCardForm handleCreditCard={handleCreditCard} animation={animation} creditCardState={creditCardState} />
        </View>
    )
}

const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
});

export default PaymentScreen;