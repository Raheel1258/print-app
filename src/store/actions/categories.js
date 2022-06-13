import Toast from 'react-native-toast-message';
import axios from 'axios';
import {CategoriesData, sliderImagesHome} from "../../Utils/mockData"

import {Api} from '../../Utils/Api'
import * as types from '../types/types'
import { t } from 'i18next';


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
          dispatch(setCategories(res?.data));
          setAnimation(false);
        })
        .catch((err) => {
          setAnimation(false);
            Toast.show({
                type: 'error',
                text1: err?.response?.data?.message ? err?.response?.data?.message : t('general_message')
            });
        });
}
};


export const getHomeSliderImages  = () => {
  return async (dispatch) => {
      axios.get(`${Api}/home-slider/findall`)
          .then(async (res) => {
            dispatch(setHomeSliderImages(res?.data));
          })
          .catch((err) => {
              Toast.show({
                  type: 'error',
                  text1: err?.response?.data?.message ? err?.response?.data?.message : t('general_message')
              });
          });
  }
};