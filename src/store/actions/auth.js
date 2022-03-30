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

const loading = (loading) => {
    return {
        type: types.LOADING,
        loading
    }
}

export const login = (data, navigation) => {
    return (dispatch) => {
        console.log("Login", data)
        dispatch(loading(true));
        try {
            Storage.storeData('token', "123");
            dispatch(loading(false));
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
        catch {
            dispatch(loading(false));
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




export const signup = (data, navigation) => {
    return (dispatch) => {
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


export const forgotPassword = (data, navigation) => {
    return (dispatch) => {
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


// export const forgotPassword = (data, navigateion) => async dispatch => {
//     try {
//       const res = await axios.post(`${Api}/user/forgetPassword/`, data);
//       setAnimation(false);
//       Toast.show({
//         type: 'success',
//         text1: res.data,
//       });
//       navigateion.navigate('EnterOtp');
//     } catch (err) {
//       setAnimation(false);
//       console.log(err?.response?.data);
//       Toast.show({
//         type: 'error',
//         text1: err?.response?.data,
//       });
//     }
//   };