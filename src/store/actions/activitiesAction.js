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
export const getActivityOfUser = (setAnimation,id) => {
    console.log("into getuser" , id);
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token');
        // dispatch(setActivityDetail(newActivityStructure))
        // setAnimation(true);
        // axios.get(`${Api}/notifications/${id}`,{ headers: { "Authorization": `Bearer ${accessToken}` } })
        //     .then(async (res) => {
        //         console.log("into res of notifications" , res);
        //         setAnimation(false);
        //         dispatch(setActivityDetail(res?.data));
        //     })
        //     .catch((err) => {
        //         setAnimation(false);
        //         Toast.show({
        //             type: 'error',
        //             text1: err?.response?.data?.message ? err?.response?.data?.message : t('general_message'),
        //         });
        //     });
    }
}


export const getAllActivity = (setAnimation) => {
    console.log("activty into action");
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        axios.get(`${Api}/user/find`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                console.log("user response" , res);
                dispatch(getActivityOfUser(setAnimation,res?.data?._id))
            })
            .catch((err) => {
            });

    }
}






