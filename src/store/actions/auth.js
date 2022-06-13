import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import { Api } from '../../Utils/Api'
import * as types from '../types/types';
import { t } from 'i18next';


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
                    text1: err?.response?.data?.message ? err?.response?.data?.message : t('general_message'),
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
                    text1: t('login')
                })
                navigation.navigate('home')
                dispatch(setUserSignup(res));
                await Storage.storeData('token', res?.data?.accessToken);
            })
            .catch((err) => {
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : t('general_message'),
                });
            });
    }
}

//forgot Password
export const forgotPassword = (data, navigate, setAnimation) => {
    return (dispatch) => {
        setAnimation(true);
        axios
        	.patch(`${Api}/user/forgetpassword`, data)
        	.then(async (res) => {
        		Toast.show({
        			type: 'success',
        			text1: res?.data
        		})
                setAnimation(false);
               navigate('verificationCode');
        	})
        	.catch((err) => {
                setAnimation(false);
        		Toast.show({
        			type: 'error',
        			text1: err?.response?.data?.message ? err?.response?.data?.message : t('general_message'),
        		});
        	});

    }
}

//VerificationOptCode
export const verificationOtpCode = (data,navigate, setAnimation) => {
    return (dispatch) => {
        setAnimation(true);
        axios
        	.post(`${Api}/user/verifyotp`, {otp:data?.otpCode})
        	.then(async (res) => {
        		Toast.show({
        			type: 'success',
        			text1: t('otp_message')
        		})
                setAnimation(false);
                navigate('resetPassword', {userId:res?.data?._id});
        	})
        	.catch((err) => {
                setAnimation(false);
        		Toast.show({
        			type: 'error',
        			text1: err?.response?.data?.message ? err?.response?.data?.message : t('general_message'),
        		});
        	});

    }
}

//ResetPasswordAction
export const resetPasswordAction = (data, navigate, setAnimation) => {
    return (dispatch) => {
        setAnimation(true);
        axios
        	.patch(`${Api}/user/resetpassword`, data)
        	.then(async (res) => {
        		Toast.show({
        			type: 'success',
        			text1:  t('reset_password')
        		})
               setAnimation(false);
               navigate("signin");
        	})
        	.catch((err) => {
                setAnimation(false);
        		Toast.show({
        			type: 'error',
        			text1: err?.response?.data?.message ? err?.response?.data?.message : t('network_error'),
        		});
        	});

    }
}

//Logout API Action
export const logout = (navigation, setAnimation) => {
    return async (dispatch) => {
        setAnimation(true);
        await Storage.removeData('token');
        Toast.show({
            type: 'success',
            text1: t('logout'),
        });
        navigation.navigate('auth', { next: 'signin' });
        setAnimation(false);
        dispatch(setUserSignup(data));

    }
}



