import Toast from 'react-native-toast-message';
import axios from 'axios';
import {CategoriesData, sliderImagesHome} from "../../Utils/mockData"

import {Api} from '../../Utils/Api'
import Storage from '../../Utils/Storage';
import * as types from '../types/types'


export const setCategories = data => {
  return {
    type: types.GET_CATEGORIES,
    Payload: data,
  };
}

export const setHomeSliderImages = data => {
  console.log("home data" , data)
  return {
    type: types.HOME_SLIDER_IMAGES,
    Payload: data,
  };
}

export const getCategories = (setAnimation) => async dispatch => {
  setAnimation(true);
  try {
    //const res = await axios.get(`${Api}/category`);
    dispatch(setCategories(CategoriesData));
    setAnimation(false);
  } catch (err) {
    setAnimation(false);
    Toast.show({
      type: 'error',
      text1: "Not found",
    });
  }
};


export const getHomeSliderImages = () => async dispatch => {
  try {
    //const res = await axios.get(`${Api}/category`);
    dispatch(setHomeSliderImages(sliderImagesHome));
  } catch (err) {
    Toast.show({
      type: 'error',
      text1: "Not found",
    });
  }
};