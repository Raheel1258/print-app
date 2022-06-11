import Toast from 'react-native-toast-message';
import Storage from '../../Utils/Storage';
import axios from 'axios';
import {orderData} from "../../Utils/mockData"

import {Api} from '../../Utils/Api'
import * as types from '../types/types'


export const setOrder = data => {
  return {
    type: types.GET_ORDER,
    data,
  };
}


export const getAllOrder = (setAnimation) => {
  return async (dispatch) => {
      setAnimation(true);
      const accessToken = await Storage.retrieveData('token');
      // setTimeout(() => {
      //     // dispatch(setOrder(orderData));
      //     setAnimation(false);
      // }, 1000);
    setAnimation(true);
    axios.get(`${Api}/order/`, { headers: { "Authorization": `Bearer ${accessToken}` } })
        .then(async (res) => { 
         dispatch(setOrder(res?.data));
          setAnimation(false);
        })
        .catch((err) => {
          setAnimation(false);
            Toast.show({
                type: 'error',
                text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network error'
            });
        });
}
};


export const handleEmailing = (id,flag) => {
  return async (dispatch) => {
    const accessToken = await Storage.retrieveData('token');
    axios.post(`${Api}/order/support/${id}/${flag}`, {}, { headers: { "Authorization": `Bearer ${accessToken}` } })
        .then(async (res) => {
          Toast.show({
            type: 'success',
            text1: res?.data ? res?.data : 'Network error'
        });
        })
        .catch((err) => {
            Toast.show({
                type: 'error',
                text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network error'
            });
        });
}
};


