import React, {useState} from "react";
import { View, Text } from 'react-native';
import { ScaledSheet } from 'react-native-size-matters';
import { useNavigation } from '@react-navigation/native';
import { colors } from '../Utils/theme';
import { PaymentScreen } from "../Screens";
import Stripe from 'react-native-stripe-api';


const PaymentContainer = () => {
    const navigation = useNavigation();
    const [animation, setAnimation] = useState(false);
    const [creditCardState, setCreditCardState] = useState({
        cardNumber: '',
        cardName: '',
        expiryMonth: '',
        expiryYear: '',
        cvc:'',
    })

    const genToken = async (values) => {
        const apiKey =
            'pk_test_51KyFHhGeGlEJDOmcCqL8AVqDcShNxk8mTWBBvKDkMqR102d6epu3RY7Zzny8NBbn0D9O3EPm0n7GcgucKBseRue6001dM1qnAu';
        const client = new Stripe(apiKey);

        const token = await client.createToken({
            number: values?.cardNumber,
            name: values?.cardName ?? "",
            exp_month: values?.expiryMonth,
            exp_year: values?.expiryYear,
            cvc: values?.cvc,
        });

        console.log("tttttoken", token);

        if (token.id) {
            console.log("token", token.id)
        } else {
            console.log("no token")
        }
    };

    const handleCreditCard = (values) => {
        console.log("values from creditCard", values);
        genToken(values);

    }

    const goBack = () => {
        navigation.goBack();
    };

    const navigate = (routeName, data = {}) => {
        navigation.navigate(routeName, data)
    }
    return (
        <View style={styles.container}>
            <PaymentScreen goBack={goBack} 
            animation={animation} 
            handleCreditCard={handleCreditCard} 
            navigate={navigate}
            creditCardState={creditCardState}/>
        </View>
    )
}


const styles = ScaledSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.whiteColor,
    },
});


export default PaymentContainer;