import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import { Api } from '../../Utils/Api'
import * as types from '../types/types';


function setUserAddress(userAddress) {
    console.log("address" , userAddress)
    return {
        type: types.USER_ADDRESS,
        userAddress,
    };
}

function setUserDetail(user) {
    console.log("user detail" , user);
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
                dispatch(setUserCard(res?.data?.cards))
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
                    text1: 'You are successfully added your address'
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
export const getCurrentUserDetail = (setAnimation=()=>{}, setPersonalDetail=()=>{}) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimation(true);
        axios.get(`${Api}/user/find`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then((res) => {
                setPersonalDetail({
                    firstName: res?.data?.firstName,
                    lastName: res?.data?.lastName,
                    phone: res?.data?.phone,
                    email: res?.data?.email
                })
                setAnimation(false);
                dispatch(setUserDetail(res?.data));
                dispatch(setUserAddress(res?.data?.addresses));
                dispatch(setUserCard(res?.data?.cards));
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
                dispatch(setUserCard(res?.data?.cards))
                Toast.show({
                    type: 'success',
                    text1: 'user updated successfully',
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