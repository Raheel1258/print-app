import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import { Api } from '../../Utils/Api'
import * as types from '../types/types';
import Stripe from 'react-native-stripe-api';


function setUserAddress(userAddress) {
    return {
        type: types.USER_ADDRESS,
        userAddress,
    };
}

function setUserDetail(user) {

    return {
        type: types.USER_DETAIL,
        user,
    }
}

function setUserCard(userCard) {
    return {
        type: types.USER_CARD,
        userCard,
    };
}


//Add Address
export const addAddress = (setAnimation, data, addAddressRBSheet) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimation(true);
        axios.patch(`${Api}/user/address/add`, data, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                Toast.show({
                    type: 'success',
                    text1: 'You are successfully added your address'
                })
                setAnimation(false);
                dispatch(setUserAddress(res?.data?.addresses));
                addAddressRBSheet.current.close();
            })
            .catch((err) => {
                setAnimation(false);
                addAddressRBSheet.current.close();
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });
    }
}

//Remove address
export const deleteAddress = (addressid) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        axios.patch(`${Api}/user/address/delete/${addressid}`,{} ,{ headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                dispatch(setUserDetail(res?.data));
                dispatch(setUserAddress(res?.data?.addresses))
                Toast.show({
                    type: 'success',
                    text1: 'Removed Address Successfully',
                });
            })
            .catch((err) => {
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });
    }
}

//update address
export const updateUserAddress = (setAnimation, _id , data, addAddressRBSheet) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        addAddressRBSheet.current.close();
        setAnimation(true);
        axios.patch(`${Api}/user/address/update/${_id}`, data, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                Toast.show({
                    type: 'success',
                    text1: 'You are successfully updated your address'
                })
                setAnimation(false);
                dispatch(setUserAddress(res?.data?.addresses));
                addAddressRBSheet.current.close();
            })
            .catch((err) => {
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });
    }
}

//Get Current UserPersonal detail
export const getCurrentUserDetail = (setAnimation, setPersonalDetail) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimation(true);
        axios.get(`${Api}/user/find`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                setPersonalDetail({
                    firstName: res?.data?.firstName,
                    lastName: res?.data?.lastName,
                    phone: res?.data?.phone,
                    email: res?.data?.email
                })
                setAnimation(false);
                dispatch(setUserDetail(res?.data));
                dispatch(setUserAddress(res?.data?.addresses))
            })
            .catch((err) => {
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });

    }
}

//Update User Detail
export const updateCurrentUserDetail = (setAnimationUpdateUser, userData) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimationUpdateUser(true);
        axios.patch(`${Api}/user/update`, userData, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                setAnimationUpdateUser(false);
                dispatch(setUserDetail(res?.data));
                dispatch(setUserAddress(res?.data?.addresses))
                Toast.show({
                    type: 'success',
                    text1: 'User updated successfully',
                });
            })
            .catch((err) => {
                setAnimationUpdateUser(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });

    }
}


//Change-Password
export const changePassword = (setAnimationChangePassowrd, userData, toggleModal) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimationChangePassowrd(true);
        axios.patch(`${Api}/user/changepassword`, userData, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                setAnimationChangePassowrd(false);
                Toast.show({
                    type: 'success',
                    text1: 'Changed password successfully',
                });
                toggleModal();
            })
            .catch((err) => {
                setAnimationChangePassowrd(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });

    }
}

//makeAddressPrimary
export const makeAddressPrimary = (id) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        // setAnimationChangePassowrd(true);
        axios.patch(`${Api}/user/address/${id}`, {}, {headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                // setAnimationChangePassowrd(false);
                dispatch(setUserDetail(res?.data));
                dispatch(setUserAddress(res?.data?.addresses))
                Toast.show({
                    type: 'success',
                    text1: 'Primary address updated successfully',
                });
            })
            .catch((err) => {

                // setAnimationChangePassowrd(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });

    }
}

//getAllCard
export const  getAllCards = () => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        axios.get(`${Api}/stripe/getAllCards/`, {headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                console.log("res from back end for data", res?.data?.data);
                dispatch(setUserCard(res?.data?.data))
            })
            .catch((err) => {
                // setAnimationChangePassowrd(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });

    }
}

export const  addCards = (values) => {
    return async (dispatch) => {
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
        if (stripeToken?.id){
            console.log("stripe token" , stripeToken?.id);
            dispatch(getAllCards())
            Toast.show({
                type: 'success',
                text1: 'Card is added successfully',
            });
        }

    }
}