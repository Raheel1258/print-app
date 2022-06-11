import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {activityData, newActivityStructure} from "../../Utils/mockData"

import { Api } from '../../Utils/Api'
import * as types from '../types/types';


function setActivityDetail(data) {

    return {
        type: types.ACTIVITY_DETAIL,
        data,
    }
}


//Get All Activity 
export const getActivityOfUser = (setAnimation,id) => {
    console.log("idddddd" , id);
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token');
        console.log("12312312312312312312312");
        // console.log("activity from storage" , newActivityStructure );
        // dispatch(setActivityDetail(newActivityStructure))
        setAnimation(true);
        axios.get(`${Api}/notifications/${id}`,{ headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                console.log("activity responsed" , res);
                setAnimation(false);
                dispatch(setActivityDetail(res?.data));
            })
            .catch((err) => {
                console.log("err" , err.response);
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });
    }
}


export const getAllActivity = (setAnimation) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimation(true);
        axios.get(`${Api}/user/find`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                dispatch(getActivityOfUser(setAnimation,res?.data?._id))
            })
            .catch((err) => {
            });

    }
}






