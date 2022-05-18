import React, { useState } from 'react';
import { CardField, useStripe } from '@stripe/stripe-react-native';
import {
    BackArrowHeader,
    GreenButton,
  } from '../Components';


const PaymentScreen = ({goBack}) => {
    const { confirmPayment } = useStripe();

    return (
        <>
        <BackArrowHeader goBack={goBack} title={"Payment"}/>
        <CardField
            postalCodeEnabled={true}
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
            <GreenButton title={"Pay"}/>
            </>
    );
}

export default PaymentScreen;