import Toast from 'react-native-toast-message';
import Storage from '../../Utils/Storage';
import axios from 'axios';
import {orderData} from "../../Utils/mockData"
import { t } from 'i18next';

import {Api} from '../../Utils/Api'
import * as types from '../types/types'


 const setOrder = data => {
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
         dispatch(setOrder(res?.data?.reverse()));
          setAnimation(false);
        })
        .catch((err) => {
          setAnimation(false);
            Toast.show({
                type: 'error',
                text1: t('general_message')
            });
        });
}
};


export const handleEmailing = (id,flag) => {
  return async (dispatch) => {
    const accessToken = await Storage.retrieveData('token');
    axios.post(`${Api}/order/support/${id}/${flag}`, {}, { headers: { "Authorization": `Bearer ${accessToken}` } })
        .then(async (res) => {
          if(flag){
            Toast.show({
              type: 'success',
              text2: t('email_send'),
          });
          }else{
            Toast.show({
              type: 'success',
              text2: t('support_email_send')
          });
          }
         
        })
        .catch((err) => {
            Toast.show({
                type: 'error',
                text1: t('general_message')
            });
        });
}
};


