import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';

import { Api } from '../../Utils/Api'
import * as types from '../types/types';
import { t } from 'i18next';
import {setActivityLength} from '../actions/activitiesAction'
import {setCartLength} from '../actions/cartAction'


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

function setAddToCart(item) {
    return {
        type: types.ADD_TO_CART,
        item,
    }
}


//Login Api Action
export const login = (data, navigation, setAnimation, obj) => {
    return async (dispatch) => {
        setAnimation(true);
        axios.post(`${Api}/user/login`, data)
            .then(async (res) => {
                Toast.show({
                    type: 'success',
                    text1: t('login_correct'),
                });
                setAnimation(false);
                await Storage.storeData('token', res?.data?.accessToken);
                dispatch(setUserLogin(res));
                if(obj !== "false"){
                    dispatch(addToCartWithToken(obj))
                    navigation.navigate('cartStack', {next:'cart'});
                }
                else{
                    navigation.reset({
                        index: 0,
                        routes: [{
                            name: 'home'
                        }],
                    });

                }
            })
            .catch((err) => {
                console.log("log in error" , err.response);
                setAnimation(false);
                if(err?.response?.data?.statusCode === 400){
                    Toast.show({
                        type: 'error',
                        text1: t('invalid_login_message'),
                    });
                }else{
                    Toast.show({
                        type: 'error',
                        text1: t('general_message'),
                    });
                }
               
            });
    }
};



//SignUp Api Action
export const signup = (data, navigation, setAnimation, obj) => {
    return async (dispatch) => {
        const newData = { ...data, role: 'USER' }
        setAnimation(true);
        axios.post(`${Api}/user/signup`, newData)
            .then(async (res) => {
                dispatch(setUserSignup(res));
                await Storage.storeData('token', res?.data?.accessToken);
                Toast.show({
                    type: 'success',
                    text1: t('login')
                })
                if(obj !== "false"){
                    dispatch(addToCartWithToken(obj))
                    console.log("iiiii" , obj);
                    navigation.navigate('cartStack', {next:'cart'});
                }else{
                    navigation.reset({
                        index: 0,
                        routes: [{
                            name: 'home'
                        }],
                    });

                }
                
                // navigation.navigate('home')
            })
            .catch((err) => {
                setAnimation(false);
                if(err?.response?.data?.statusCode == 400){
                    Toast.show({
                        type: 'error',
                        text1: t('user_already_exit_message'),
                    });
                }else {     
                    Toast.show({
                        type: 'error',
                        text1: t('general_message'),
                    });
                }
               
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
        			text1: t('otp_send')
        		})
                setAnimation(false);
               navigate('verificationCode');
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
                if(err?.response?.data?.statusCode === 400){
                    Toast.show({
                        type: 'error',
                        text1: t('invalid_otp'),
                    });
                }else
        		Toast.show({
        			type: 'error',
        			text1: t('general_message'),
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
        			text1:  t('reset_password_message')
        		})
               setAnimation(false);
               navigate("signin");
        	})
        	.catch((err) => {
                setAnimation(false);
        		Toast.show({
        			type: 'error',
        			text1: t('network_error'),
        		});
        	});

    }
}

//Logout API Action
export const logout = (navigation, setAnimation) => {
    return async (dispatch) => {
        setAnimation(true);
        await Storage.removeData('token');
        await Storage.removeData('lengthActivity');
        await Storage.removeData('lengthCart');
        Toast.show({
            type: 'success',
            text1: t('logout'),
        });
        dispatch(setCartLength(0));
        dispatch(setActivityLength(0))
        navigation.reset({
            index: 0,
            routes: [{
                name: 'homeStack'
            }],
        });
        setAnimation(false);
        dispatch(setUserSignup(data));

    }
}


export const addToCartWithToken = (data) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        axios.patch(`${Api}/cart/product/add`, data, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                await Storage.storeData('lengthCart', res?.data?.products?.length);
                dispatch(setCartLength(res?.data?.products?.length)) 
                dispatch(setAddToCart(res?.data?.products));
                // Toast.show({
                //     type: 'success',
                //     text1: 'Item added to cart successfully',
                // });
                // navigate("cartStack");
            })
            .catch((err) => {
                console.log("Error data cart Api call" , err);
                if (err?.response?.status == 401) {
                    Toast.show({
                        type: 'error',
                        text1: "User is not logged in"
                    });
                } else
                    Toast.show({
                        type: 'error',
                        text1: t('general_message'),
                    });
            });

    }
}



