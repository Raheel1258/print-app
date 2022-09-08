import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
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

export function setActivityLength(data) {
  return {
    type: types.ACTIVITY_LENGTH,
    data
  }
}



//Get All Activity 
export const getAllActivity = (setAnimation) => {
  return async (dispatch) => {
    setAnimation(true);
    const accessToken = await Storage.retrieveData('token');
    axios.get(`${Api}/notifications/`, { headers: { "Authorization": `Bearer ${accessToken}` } })
      .then(async (res) => {
        let unRead = 0;
        const dataArray = res?.data?.map((item => {
          item?.notifications?.map((item1) => {
            if (item1.isRead === false) {
              unRead = unRead + 1;
            }
          })
        }))
        await Storage.storeData('lengthActivity', unRead);
        dispatch(setActivityLength(unRead));
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
export const changeActivityStatus = (id, navigate, item) => {
  return async (dispatch) => {
    const accessToken = await Storage.retrieveData('token');
    let activityLength = await Storage.retrieveData('lengthActivity');
    axios.get(`${Api}/notifications/change/status/${id}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
      .then(async (res) => {
        activityLength = activityLength - 1;
        await Storage.storeData('lengthActivity', activityLength);
        dispatch(setActivityLength(activityLength));
        navigate('myOrdersList', { item: item })
      })
      .catch((err) => {
        console.log("err single activity", err?.response);
      });

  }
}


//All mark to read
export const allMarkToReadActivity = (setAnimation) => {
  return async (dispatch) => {
    const accessToken = await Storage.retrieveData('token')
    axios.get(`${Api}/notifications/change/status/all`, { headers: { "Authorization": `Bearer ${accessToken}` } })
      .then(async (res) => {
        dispatch(getAllActivity(setAnimation))
      })
      .catch((err) => {
        console.log("err all", err?.response);
      });

  }
}






