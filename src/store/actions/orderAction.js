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
          console.log("all user orders" , res);
         dispatch(setOrder(res?.data));
          setAnimation(false);
        })
        .catch((err) => {
          console.log("all order err" , err?.response);
          setAnimation(false);
            Toast.show({
                type: 'error',
                text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network error'
            });
        });
}
};


