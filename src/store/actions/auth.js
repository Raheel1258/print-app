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


export const login = (data, navigation, setAnimation) => {
    return async (dispatch) => {
        console.log("Login", data);
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
        			text1: err?.response?.data?.message,
        		});
        	});
    }
};




export const signup = (data, navigation, setAnimation) => {
    return  async(dispatch) => {
        console.log("signup", data);
        setAnimation(true);
        // await Storage.storeData('token', "123");
        // Toast.show({
        //     type: 'success',
        //     text1: 'You are successfully signup in',
        // });
        // navigation.reset({
        //     index: 0,
        //     routes: [{
        //         name: 'home'
        //     }]
        // })
        setAnimation(false);
        dispatch(setUserSignup(data));
        axios.post(`${Api}/user/signup`, data)
        	.then(async (res) => {
        		Toast.show({
        			type: 'success',
        			text1: 'You are successfully signed up'
        		})
        		navigation.navigate('LogIn')
        		dispatch(setUserSignup(res));
        	})
        	.catch((err) => {
        		console.log('signup err', err)
        		Toast.show({
        			type: 'error',
        			text1: err?.response?.data?.errorMessage ? err?.response?.data?.errorMessage : 'Network Error',
        		});
        	});

    }
}


export const forgotPassword = (data, navigation, setAnimation) => {
    return (dispatch) => {
        console.log("forgot", data);
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


export const logout = (navigation, setAnimation) => {
    console.log("logout")
    return  async(dispatch) => {
        setAnimation(true);
        await Storage.removeData('token');
        Toast.show({
            type: 'success',
            text1: 'You are logout',
        });
        navigation.navigate('auth',{next: 'signin'});
        // navigation.reset({
        //     index: 0,
        //     routes: [{
        //         name: 'authStack'
        //     }]
        // })
        setAnimation(false);
        dispatch(setUserSignup(data));

    }
}


