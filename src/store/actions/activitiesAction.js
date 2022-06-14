import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {activityData, newActivityStructure} from "../../Utils/mockData"

import { Api } from '../../Utils/Api'
import * as types from '../types/types';
import { t } from 'i18next';


function setActivityDetail(data) {

    return {
        type: types.ACTIVITY_DETAIL,
        data,
    }
}


//Get All Activity 
export const getAllActivity = (setAnimation) => {
    return async (dispatch) => {
        setAnimation(true);
        const accessToken = await Storage.retrieveData('token');
        // dispatch(setActivityDetail(newActivityStructure))
        axios.get(`${Api}/notifications/user_test`,{ headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                console.log("into res of notifications" , res);
                setAnimation(false);
                dispatch(setActivityDetail(res?.data));
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


//Change activity status  
export const changeActivityStatus = (setAnimation) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        // axios.get(`${Api}/user/find`, { headers: { "Authorization": `Bearer ${accessToken}` } })
        //     .then(async (res) => {
        //         console.log("user response" , res);
        //         dispatch(getActivityOfUser(setAnimation,res?.data?._id))
        //     })
        //     .catch((err) => {
        //     });

    }
}


//All mark toready
export const allMarkToReadActivity = (setAnimation) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        // axios.get(`${Api}/user/find`, { headers: { "Authorization": `Bearer ${accessToken}` } })
        //     .then(async (res) => {
        //         console.log("user response" , res);
        //         dispatch(getActivityOfUser(setAnimation,res?.data?._id))
        //     })
        //     .catch((err) => {
        //     });

    }
}






