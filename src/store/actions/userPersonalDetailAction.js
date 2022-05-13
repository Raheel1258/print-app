import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import { Api } from '../../Utils/Api'
import * as types from '../types/types';


function setUserAddress(userAddress) {
    return {
        type: types.USER_ADDRESS,
        userAddress,
    };
}

//Add Address
export const addAddress = (setAnimation, data,addAddressRBSheet) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimation(true);
        axios.patch(`${Api}/user/address/add`, data, { headers: {"Authorization" : `Bearer ${accessToken}`} })
            .then(async (res) => {
                console.log("address api response", res);
                Toast.show({
                    type: 'success',
                    text1: 'You are successfully added your address'
                })
                setAnimation(false);
                // dispatch(setUserAddress(res?.data));
                addAddressRBSheet.current.close();       
            })
            .catch((err) => {
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message,
                });
            });

    }
}


//Get Current UserPersonal detail
export const getCurrentUserDetail = (setAnimation, setPersonalDetail) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimation(true);
        axios.get(`${Api}/user/find`,{ headers: {"Authorization" : `Bearer ${accessToken}`} })
            .then(async (res) => {
                console.log("personal detail", res);
                setPersonalDetail({
                    firstName: res?.data?.firstName, 
                    lastName: res?.data?.lastName,
                    mobile: res?.data?.phone,
                    email: res?.data?.email
                  })
                setAnimation(false);
                dispatch(setUserAddress(res?.data?.addresses));   
            })
            .catch((err) => {
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message,
                });
            });

    }
}