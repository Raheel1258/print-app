import axios from 'axios';
import Storage from '../../Utils/Storage';
import Toast from 'react-native-toast-message';
import Stripe from 'react-native-stripe-api';

import { Api } from '../../Utils/Api'
import * as types from '../types/types';


export const genToken = (values) => {
    return async(dispatch) => {
        const apiKey =
            'pk_test_51KyFHhGeGlEJDOmcCqL8AVqDcShNxk8mTWBBvKDkMqR102d6epu3RY7Zzny8NBbn0D9O3EPm0n7GcgucKBseRue6001dM1qnAu';
        const client = new Stripe(apiKey);
        const stripeToken = await client.createToken({
            number: values?.cardNumber,
            name: values?.cardName ?? "",
            exp_month: values?.expiryMonth,
            exp_year: values?.expiryYear,
            cvc: values?.cvc,
        });

        if (stripeToken?.id) {
            console.log("stripe_Token" , stripeToken?.id);
            const accessToken = await Storage.retrieveData('token')
            axios
        	.post(`${Api}/order/charge`, {amount:"1200" , paymentMethodId:stripeToken?.id} ,{ headers: { "Authorization": `Bearer ${accessToken}` } })
        	.then(async (res) => {
                console.log("res for payment" , res);
        		Toast.show({
        			type: 'success',
        			text1: 'Payment is successfully completed'
        		})
        	})
        	.catch((err) => {
                console.log("res for payment error" , err?.response);
        		Toast.show({
        			type: 'error',
        			text1: err?.response?.data?.errorMessage ? err?.response?.data?.errorMessage : 'Network Error',
        		});
        	});
            // stripeToken?.id
        }
        else {
            Toast.show({
                type: 'error',
                text1: stripeToken?.error?.message ? stripeToken?.error?.message : 'Network Error',
            });
        }
        
    }
}