import axios from 'axios';
import Storage from '../../Utils/Storage';
import Toast from 'react-native-toast-message';
import Stripe from 'react-native-stripe-api';

import { Api } from '../../Utils/Api'
import * as types from '../types/types';


export const genToken = (values, navigate, amount, setAnimation, orderObj) => {
    return async (dispatch) => {
        setAnimation(true);
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
            console.log("into valid card");
            //Valid Token Hit BE Api's for payment
            const accessToken = await Storage.retrieveData('token')
            axios
                .post(`${Api}/order/charge`, { amount: amount, paymentMethodId: stripeToken?.id }, { headers: { "Authorization": `Bearer ${accessToken}` } })
                .then(async (res) => {
                    console.log("into charge api stripe" , res);
                    setAnimation(false);
                    Toast.show({
                        type: 'success',
                        text1: 'Payment is successfully completed'
                    });

                    //Place order Now payment integrated
                    axios
                    .post(`${Api}/order/add`, orderObj, {headers: { "Authorization": `Bearer ${accessToken}`}})
                    .then(async (res) => {
                        console.log("res from order" , res);
                        setAnimation(false);
                        setTimeout(() => {
                            Toast.show({
                                type: 'success',
                                text1: 'Place Order is successfully completed'
                            });
                          }, 1000)
                        //Place order Now payment integrated
                        navigate("orderReceived");
                     
                    })
                    .catch((err) => {
                        console.log("res from order err", err?.response);
                        setAnimation(false);
                        Toast.show({
                            type: 'error',
                            text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                        });
                    });

                    //Ended Place order api
                })
                .catch((err) => {
                    console.log("error charge" , err?.response);
                    setAnimation(false);
                    Toast.show({
                        type: 'error',
                        text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                    });
                });
            // stripeToken?.id
        }
        else {
            console.log("into stripe card error")
            Toast.show({
                type: 'error',
                text1: stripeToken?.error?.message ? stripeToken?.error?.message : 'Network Error',
            });
        }

    }
}