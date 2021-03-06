import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

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
export const addAddress = (setAnimation, data, addAddressRBSheet) => {
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
        axios.patch(`${Api}/user/address/delete/${addressid}`,{} ,{ headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                dispatch(setUserDetail(res?.data));
                dispatch(setUserAddress(res?.data?.addresses))
                dispatch(setUserCard(res?.data?.cards))
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
export const updateUserAddress = (setAnimation, _id , data, addAddressRBSheet) => {
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
                dispatch(setUserCard(res?.data?.cards))
            })
            .catch((err) => {
                setAnimation(false);
                if(err?.response?.data?.statusCode === 400){
                    Toast.show({
                        type: 'error',
                        text1: t('invalid_login_message'),
                    });
                }else
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
                dispatch(setUserCard(res?.data?.cards))
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
export const changePassword = (setAnimationChangePassowrd, userData, toggleModal) => {
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
                setAnimationChangePassowrd(false);
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
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
                    text1: t('address_primary'),
                });
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