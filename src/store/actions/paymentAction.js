import { t } from 'i18next';
import axios from 'axios';
import Stripe from 'react-native-stripe-api';
import Toast from 'react-native-toast-message';

import { setActivityLength } from '../actions/activitiesAction'

import Storage from '../../Utils/Storage';
import { Api } from '../../Utils/Api'

export const genToken = (values, navigate, amount, setAnimation, orderObj) => {
    return async (dispatch) => {
        setAnimation(true);
        // const apiKey =
            // 'pk_test_51Ke9OxBzWQiqU8xNrVvMRjEHD4ul3qrt1MaG0EgC4cDHq1uRDr5CJZmo8DJHdKY5TayeR0bfviJHNDudSQibSkfL00P4qLA4nz';
            const apiKey = "pk_live_51Ke9OxBzWQiqU8xN7NevhQVgz2EI79p7KM92uIZqAdxLQyPv7QOtleZFjefZm3ZTXteBrboIrZPtNVkeGeQ1wDI4005oJxc2ny";
        const client = new Stripe(apiKey);
        const stripeToken = await client.createToken({
            number: values?.cardNumber,
            name: values?.cardName ?? "",
            exp_month: values?.expiryMonth,
            exp_year: values?.expiryYear,
            cvc: values?.cvc,
        });

        if (stripeToken?.id) {
            //Valid Token Hit BE Api's for payment
            const accessToken = await Storage.retrieveData('token')
            axios
                .post(`${Api}/order/charge`, { amount: amount, paymentMethodId: stripeToken?.id }, { headers: { "Authorization": `Bearer ${accessToken}` } })
                .then(async (res) => {
                    let activityLength = await Storage.retrieveData('lengthActivity');
                    axios
                        .post(`${Api}/order/add`, orderObj, { headers: { "Authorization": `Bearer ${accessToken}` } })
                        .then(async (res) => {
                            setAnimation(false);
                            setTimeout(() => {
                                Toast.show({
                                    type: 'success',
                                    text1: t('order_message_payment')
                                });
                            }, 1000)
                            //Place order Now payment integrated
                            activityLength = activityLength + 1
                            dispatch(setActivityLength(activityLength))
                            await Storage.storeData('lengthActivity', activityLength);
                            navigate("orderReceived", { welcome: false, orderId: res?.data?.orderRefrence });

                        })
                        .catch((err) => {
                            setAnimation(false);
                            Toast.show({
                                type: 'error',
                                text1: t('general_message'),
                            });
                        });

                    //Ended Place order api
                })
                .catch((err) => {
                    setAnimation(false);
                    Toast.show({
                        type: 'error',
                        text1: t('general_message'),
                    });
                });
        }
        else {
            Toast.show({
                type: 'error',
                text1: stripeToken?.error?.message ? stripeToken?.error?.message : t('general_message'),
            });
        }

    }
}