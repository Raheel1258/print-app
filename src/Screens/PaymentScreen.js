import React, { useState } from 'react';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import { Button } from 'react-native';
import {
    BackArrowHeader,
    GreenButton,
  } from '../Components';


const PaymentScreen = ({goBack, handlePayPress, loading}) => {
    const { confirmPayment } = useStripe();

    return (
        <>
        <BackArrowHeader goBack={goBack} title={"Payment"}/>
        <CardField
            postalCodeEnabled={false}
            placeholders={{
                number: '4242 4242 4242 4242',
            }}
            style={{
                width: '100%',
                height: 50,
                marginVertical: 30,
            }}
            cardStyle={{
                backgroundColor:'#FFFFFF',
                borderColor: '#000000',
                borderwidth:"1",
                borderRadius: "8"
            }}
            onCardChange={(cardDetails) => {
                console.log('cardDetails', cardDetails);
            }}
            onFocus={(focusedField) => {
                console.log('focusField', focusedField);
            }}
            />
            <Button title={"Pay"} onPress={handlePayPress} disabled={loading}/>
            </>
    );
}

export default PaymentScreen;