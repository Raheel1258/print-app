import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import Stripe from 'react-native-stripe-api';

import { Api } from '../../Utils/Api'
import * as types from '../types/types';
import { t } from 'i18next';


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
export const addAddress = (setAnimation, data, addAddressRBSheet, handleAddressForBottomSheet = () => { }) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimation(true);
        axios.patch(`${Api}/user/address/add`, data, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                Toast.show({
                    type: 'success',
                    text1: t('address_add')
                })
                setAnimation(false);
                dispatch(setUserAddress(res?.data?.addresses));
                addAddressRBSheet.current.close();
                handleAddressForBottomSheet();
            })
            .catch((err) => {
                setAnimation(false);
                addAddressRBSheet.current.close();
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });
    }
}

//Remove address
export const deleteAddress = (addressid) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        axios.patch(`${Api}/user/address/delete/${addressid}`, {}, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                dispatch(setUserDetail(res?.data));
                dispatch(setUserAddress(res?.data?.addresses))
                Toast.show({
                    type: 'success',
                    text1: t('address_remove'),
                });
            })
            .catch((err) => {
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });
    }
}

//update address
export const updateUserAddress = (setAnimation, _id, data, addAddressRBSheet) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        addAddressRBSheet.current.close();
        setAnimation(true);
        axios.patch(`${Api}/user/address/update/${_id}`, data, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                Toast.show({
                    type: 'success',
                    text1: t('address_update')
                })
                setAnimation(false);
                dispatch(setUserAddress(res?.data?.addresses));
                addAddressRBSheet.current.close();
            })
            .catch((err) => {
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });
    }
}

//Get Current UserPersonal detail
export const getCurrentUserDetail = (setAnimation, setPersonalDetail, setDetailAnimation) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimation(true);
        setDetailAnimation(true);
        axios.get(`${Api}/user/find`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                setPersonalDetail({
                    firstName: res?.data?.firstName,
                    lastName: res?.data?.lastName,
                    phone: res?.data?.phone,
                    email: res?.data?.email
                })
                setAnimation(false);
                setDetailAnimation(false)
                dispatch(setUserDetail(res?.data));
                dispatch(setUserAddress(res?.data?.addresses))
            })
            .catch((err) => {
                setAnimation(false);
                setDetailAnimation(false);
                if (err?.response?.data?.statusCode === 400) {
                    Toast.show({
                        type: 'error',
                        text1: t('invalid_login_message'),
                    });
                } else
                    Toast.show({
                        type: 'error',
                        text1: t('general_message'),
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
                    text1: t('user_update'),
                });
            })
            .catch((err) => {
                setAnimationUpdateUser(false);
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });

    }
}


//Change-Password
export const changePassword = (setAnimationChangePassowrd, userData, toggleModal, navigate) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimationChangePassowrd(true);
        axios.patch(`${Api}/user/changepassword`, userData, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                setAnimationChangePassowrd(false);
                Toast.show({
                    type: 'success',
                    text1: t('change_password'),
                });
                toggleModal();
            })
            .catch((err) => {
                
                if(err?.response?.data?.statusCode === 400){
                    setAnimationChangePassowrd(false);
                    Toast.show({
                        type: 'error',
                        text1: t('change_password_invalide_message'),
                    });
                }else{
                    setAnimationChangePassowrd(false);
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });

                }
                
            });

    }
}

//makeAddressPrimary
export const makeAddressPrimary = (id, flag) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        // setAnimationChangePassowrd(true);
        axios.patch(`${Api}/user/address/${id}`, {}, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                // setAnimationChangePassowrd(false);
                dispatch(setUserDetail(res?.data));
                dispatch(setUserAddress(res?.data?.addresses))
                if (!flag) {
                    Toast.show({
                        type: 'success',
                        text1: t('address_primary'),
                    });
                }
            })
            .catch((err) => {
                // setAnimationChangePassowrd(false);
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });

    }
}


//getAllCard
export const getAllCards = (setAnimation) => {
    return async (dispatch) => {
        setAnimation(true);
        const accessToken = await Storage.retrieveData('token')
        axios.get(`${Api}/stripe/getAllCards/`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                setAnimation(false);
                dispatch(setUserCard(res?.data?.data))
            })
            .catch((err) => {
                // setAnimationChangePassowrd(false);
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });

    }
}
//
export const addCards = (values, setCardAddAnimation, addCardetCardRBSheet, handleCardsForBottomSheet) => {
    return async (dispatch) => {
        setCardAddAnimation(true);
        const apiKey =
            'pk_test_51Ke9OxBzWQiqU8xNrVvMRjEHD4ul3qrt1MaG0EgC4cDHq1uRDr5CJZmo8DJHdKY5TayeR0bfviJHNDudSQibSkfL00P4qLA4nz';
        // const apiKey =
        //     'pk_test_51KyFHhGeGlEJDOmcCqL8AVqDcShNxk8mTWBBvKDkMqR102d6epu3RY7Zzny8NBbn0D9O3EPm0n7GcgucKBseRue6001dM1qnAu';
        const client = new Stripe(apiKey);
        const stripeToken = await client.createToken({
            number: values?.cardNumber,
            name: values?.cardName ?? "",
            exp_month: values?.expiryMonth,
            exp_year: values?.expiryYear,
            cvc: values?.cvc,
        });
        if (stripeToken?.id) {
            const accessToken = await Storage.retrieveData('token')
            axios.post(`${Api}/stripe/createCard/${stripeToken?.id}`, {}, { headers: { "Authorization": `Bearer ${accessToken}` } })
                .then(async (res) => {
                    setCardAddAnimation(false);
                    Toast.show({
                        type: 'success',
                        text1: t('card_added_message')
                    });
                    addCardetCardRBSheet.current.close();
                    dispatch(getAllCards(setCardAddAnimation))
                    handleCardsForBottomSheet()
                })
                .catch((err) => {
                    addCardetCardRBSheet.current.close();
                    setCardAddAnimation(false);
                    Toast.show({
                        type: 'error',
                        text1: t('general_message'),
                    });
                });

        } else {
            addCardetCardRBSheet.current.close();
            setCardAddAnimation(false);
            Toast.show({
                type: 'error',
                text1: stripeToken?.error?.message ? stripeToken?.error?.message : t('general_message'),
            });
        }

    }
}


//deleteCard

export const deleteCard = (id, setAnimation) => {
    return async (dispatch) => {
        setAnimation(true);
        const accessToken = await Storage.retrieveData('token')
        axios.delete(`${Api}/stripe/deleteCard/${id}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                setAnimation(false);
                Toast.show({
                    type: 'success',
                    text1: t('card_delete_message')
                });
                dispatch(getAllCards(setAnimation));
            })
            .catch((err) => {
                // setAnimationChangePassowrd(false);
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });
    }
}

//updateCards


export const updateCardStripe = (id, updateData, setAnimation, addCardetCardRBSheet) => {
    return async (dispatch) => {
        setAnimation(true);
        const accessToken = await Storage.retrieveData('token')
        axios.patch(`${Api}/stripe/updateCard/${id}`, updateData, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                setAnimation(false);
                Toast.show({
                    type: 'success',
                    text1: t('update_card_message')
                });
                addCardetCardRBSheet.current.close();
                dispatch(getAllCards(setAnimation));
            })
            .catch((err) => {
                // setAnimationChangePassowrd(false);
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });
    }
}



export const makeCardPrimary = (id, prevId, setAnimation) => {
    return async (dispatch) => {
        setAnimation(true);
        const accessToken = await Storage.retrieveData('token')
        axios.patch(`${Api}/stripe/makePrimaryCard/${id}/${prevId}`, {}, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                setAnimation(false);
                Toast.show({
                    type: 'success',
                    text1: t('update_card_message')
                });
                dispatch(getAllCards(setAnimation));
            })
            .catch((err) => {
                // setAnimationChangePassowrd(false);
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });
    }
}