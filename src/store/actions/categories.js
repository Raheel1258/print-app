import axios from 'axios';
import Toast from 'react-native-toast-message';
import { t } from 'i18next';

import { setActivityLength } from '../actions/activitiesAction'

import Storage from '../../Utils/Storage';
import { Api } from '../../Utils/Api'
import * as types from '../types/types'

export const setCategories = data => {
  return {
    type: types.GET_CATEGORIES,
    Payload: data,
  };
}

export const setHomeSliderImages = data => {
  return {
    type: types.HOME_SLIDER_IMAGES,
    Payload: data,
  };
}

export const getCategories = (setAnimation) => {
  return async (dispatch) => {
    setAnimation(true);
    axios.get(`${Api}/category/findall`)
      .then(async (res) => {
        //Activity Api
        const accessToken = await Storage.retrieveData('token');
        if (accessToken) {
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
            })
            .catch((err) => {
            });
          //END Activity API
        }
        dispatch(setCategories(res?.data));
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

export const getHomeSliderImages = () => {
  return async (dispatch) => {
    axios.get(`${Api}/home-slider/findall`)
      .then(async (res) => {
        dispatch(setHomeSliderImages(res?.data));
      })
      .catch((err) => {
        Toast.show({
          type: 'error',
          text1: t('general_message')
        });
      });
  }
};