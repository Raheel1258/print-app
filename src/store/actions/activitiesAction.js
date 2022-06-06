import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {activityData} from "../../Utils/mockData"

import { Api } from '../../Utils/Api'
import * as types from '../types/types';


function setActivityDetail(data) {

    return {
        type: types.ACTIVITY_DETAIL,
        data,
    }
}


//Get All Activity 
export const getAllActivity = (setAnimation) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token');
        dispatch(setActivityDetail(activityData))
        setAnimation(true);
        //Post to get reminder
        // axios.post(`${Api}/activity/findall`,{},{ headers: { "Authorization": `Bearer ${accessToken}` } })
        //     .then(async (res) => {
        //         console.log("activity responsed" , res);
        //         setAnimation(false);
        //         // dispatch(setActivityDetail(res?.data));
        //     })
        //     .catch((err) => {
        //         console.log("err" , err.response);
        //         setAnimation(false);
        //         Toast.show({
        //             type: 'error',
        //             text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
        //         });
        //     });
    }
}






