import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {activityData, newActivityStructure} from "../../Utils/mockData"
import { getAllOrder } from './orderAction';

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
        axios.get(`${Api}/notifications/`,{ headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                console.log("into res of notifications" , res);
                // setAnimation(false);
                dispatch(getAllOrder(setAnimation))
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
export const changeActivityStatus = (id, navigate , item) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        axios.get(`${Api}/notifications/change/status/${id}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                console.log("user response for single activity change" , res);
                navigate('myOrdersList' , {item:item})
            })
            .catch((err) => {
                console.log("err single activity" , err?.response);
            });

    }
}


//All mark to read
export const allMarkToReadActivity = ( setAnimation) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        axios.get(`${Api}/notifications/change/status/all`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                console.log("user response activity all" , res);
                dispatch(getAllActivity(setAnimation))
            })
            .catch((err) => {
                console.log("err all" , err?.response);
            });

    }
}






