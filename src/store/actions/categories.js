import Toast from 'react-native-toast-message';
import axios from 'axios';
import {CategoriesData} from "../../Utils/mockData"

import {Api} from '../../Utils/Api'
import Storage from '../../Utils/Storage';
import * as types from '../types/types'


export const setCategories = data => {
  console.log("data fun" , data)
  return {
    type: types.GET_CATEGORIES,
    Payload: data,
  };
}

export const getCategories = (setAnimation) => async dispatch => {
  setAnimation(true);
  try {
    //const res = await axios.get(`${Api}/category`);
    dispatch(setCategories(CategoriesData));
    console.log("cate" , CategoriesData);
    setAnimation(false);
  } catch (err) {
    setAnimation(false);
    Toast.show({
      type: 'error',
      text1: "Not found",
    });
  }
};