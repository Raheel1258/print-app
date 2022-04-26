import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import { Api } from '../../Utils/Api'
import * as types from '../types/types';


function setUserLogin(loginData) {
    return {
        type: types.USER_LOGIN,
        loginData,
    };
}

function setUserSignup(signupData) {
    return {
        type: types.USER_SIGNUP,
        signupData,
    };
}

function setUserAddress(userAddress) {
    return {
        type: types.USER_SIGNUP,
        userAddress,
    };
}

//Login Api Action
export const login = (data, navigation, setAnimation) => {
    return async (dispatch) => {
        setAnimation(true);
        axios.post(`${Api}/user/login`, data)
            .then(async (res) => {
                Toast.show({
                    type: 'success',
                    text1: 'You are successfully logged in',
                });
                setAnimation(false);
                await Storage.storeData('token', res?.data?.accessToken);
                navigation.reset({
                    index: 0,
                    routes: [{
                        name: 'home'
                    }],
                });
                dispatch(setUserLogin(res));
            })
            .catch((err) => {
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });
    }
};



//SignUp Api Action
export const signup = (data, navigation, setAnimation) => {
    return async (dispatch) => {
        const newData = { ...data, role: 'USER' }
        setAnimation(true);
        axios.post(`${Api}/user/signup`, newData)
            .then(async (res) => {
                Toast.show({
                    type: 'success',
                    text1: 'You are successfully signed up'
                })
                navigation.navigate('home')
                dispatch(setUserSignup(res));
                await Storage.storeData('token', res?.data?.accessToken);
            })
            .catch((err) => {
                setAnimation(false);
                console.log('signup err', err.response)
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });
    }
}

//forgot Password
export const forgotPassword = (data, navigation, setAnimation) => {
    return (dispatch) => {
        navigation.navigate('verificationCode');
        //setAnimation(true);
        // axios
        // 	.post(`${Api}/user/forgetPassword`, data)
        // 	.then(async (res) => {
        // 		Toast.show({
        // 			type: 'success',
        // 			text1: 'You are successfully sent email'
        // 		})
        //        dispatch(loading(false));
        // 	})
        // 	.catch((err) => {
        // 		console.log('forgot password', err)
        //      dispatch(loading(false))
        // 		Toast.show({
        // 			type: 'error',
        // 			text1: err?.response?.data?.errorMessage ? err?.response?.data?.errorMessage : 'Network Error',
        // 		});
        // 	});

    }
}

//VerificationOptCode
export const verificationOptCode = (data, navigation, setAnimation) => {
    return (dispatch) => {
        console.log("optCode", data);
        navigation.navigate('resetPassword');
        //setAnimation(true);
        // axios
        // 	.post(`${Api}/user/forgetPassword`, data)
        // 	.then(async (res) => {
        // 		Toast.show({
        // 			type: 'success',
        // 			text1: 'You are successfully sent email'
        // 		})
        //        dispatch(loading(false));
        // 	})
        // 	.catch((err) => {
        // 		console.log('forgot password', err)
        //      dispatch(loading(false))
        // 		Toast.show({
        // 			type: 'error',
        // 			text1: err?.response?.data?.errorMessage ? err?.response?.data?.errorMessage : 'Network Error',
        // 		});
        // 	});

    }
}

//ResetPasswordAction
export const resetPasswordAction = (data, navigation, setAnimation, toggleModal) => {
    return (dispatch) => {
        console.log("new password", data);
        toggleModal();

        //navigation.navigate('verificationCode');
        //setAnimation(true);
        // axios
        // 	.post(`${Api}/user/forgetPassword`, data)
        // 	.then(async (res) => {
        // 		Toast.show({
        // 			type: 'success',
        // 			text1: 'You are successfully sent email'
        // 		})
        //        dispatch(loading(false));
        // 	})
        // 	.catch((err) => {
        // 		console.log('forgot password', err)
        //      dispatch(loading(false))
        // 		Toast.show({
        // 			type: 'error',
        // 			text1: err?.response?.data?.errorMessage ? err?.response?.data?.errorMessage : 'Network Error',
        // 		});
        // 	});

    }
}

//Logout API Action
export const logout = (navigation, setAnimation) => {
    console.log("logout")
    return async (dispatch) => {
        setAnimation(true);
        await Storage.removeData('token');
        Toast.show({
            type: 'success',
            text1: 'You are logged out',
        });
        navigation.navigate('auth', { next: 'signin' });
        setAnimation(false);
        dispatch(setUserSignup(data));

    }
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
                dispatch(setUserAddress(res?.data));
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


