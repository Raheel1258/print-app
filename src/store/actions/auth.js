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
        try {
            if ((data.email === "Test@gmail.com" || data.email === "test@gmail.com" ) && data.password === "12345")
            {
                await Storage.storeData('token', "123");
                setAnimation(false);
                Toast.show({
                    type: 'success',
                    text1: 'You are successfully logged in',
                });
                navigation.reset({
                    index: 0,
                    routes: [{
                        name: 'home'
                    }]
                })
                dispatch(setUserLogin(data));
            }
            else {
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: 'Invalid email or password',
                });
            }
        }
        catch {
            setAnimation(false);
            Toast.show({
                type: 'error',
                text1: 'error',
            });
        }
        // axios
        // 	.post(`${Api}/user/login`, data)
        // 	.then(async (res) => {
        // 		Toast.show({
        // 			type: 'success',
        // 			text1: 'You are successfully logged in',

        // 		});
        // 		dispatch(loading(false))

        // 		await AsyncStorage.setItem('token', res?.data?.token);
        // 		navigation.reset({
        // 			index: 0,
        // 			routes: [{
        // 				name: 'Home'
        // 			}],
        // 		});

        // 		dispatch(setUserLogin(res));
        // 	})
        // 	.catch((err) => {
        // 		console.log('login err', err)
        // 		dispatch(loading(false))

        // 		Toast.show({
        // 			type: 'error',
        // 			text1: err?.response?.data?.errorMessage,
        // 		});
        // 	});
    }
};




export const signup = (data, navigation, setAnimation) => {
    return  async(dispatch) => {
        console.log("signup", data);
        setAnimation(true);
        await Storage.storeData('token', "123");
        Toast.show({
            type: 'success',
            text1: 'You are successfully signup in',
        });
        navigation.reset({
            index: 0,
            routes: [{
                name: 'home'
            }]
        })
        setAnimation(false);
        dispatch(setUserSignup(data));
        // axios
        // 	.post(`${Api}/user/signup`, data)
        // 	.then(async (res) => {
        // 		Toast.show({
        // 			type: 'success',
        // 			text1: 'You are successfully signed up'
        // 		})
        // 		navigation.navigate('LogIn')
        // 		dispatch(setUserSignup(res));
        // 	})
        // 	.catch((err) => {
        // 		console.log('signup err', err)
        // 		Toast.show({
        // 			type: 'error',
        // 			text1: err?.response?.data?.errorMessage ? err?.response?.data?.errorMessage : 'Network Error',
        // 		});
        // 	});

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


export const resetPasswordAction = (data, navigation, setAnimation) => {
    return (dispatch) => {
        console.log("new password", data);
        navigation.navigate('signin');
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
        // axios
        // 	.post(`${Api}/user/signup`, data)
        // 	.then(async (res) => {
        // 		Toast.show({
        // 			type: 'success',
        // 			text1: 'You are successfully signed up'
        // 		})
        // 		navigation.navigate('LogIn')
        // 		dispatch(setUserSignup(res));
        // 	})
        // 	.catch((err) => {
        // 		console.log('signup err', err)
        // 		Toast.show({
        // 			type: 'error',
        // 			text1: err?.response?.data?.errorMessage ? err?.response?.data?.errorMessage : 'Network Error',
        // 		});
        // 	});

    }
}


