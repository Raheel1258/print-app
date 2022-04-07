import Toast from 'react-native-toast-message';
import axios from 'axios';
import {productListBusinessCardData,productListBookletData} from "../../Utils/mockData"

import {Api} from '../../Utils/Api'
import * as types from '../types/types'


export const setProductList = data => {
  return {
    type: types.PRODUCT_LIST,
    Payload: data,
  };
}


export const getProductList = (title, setAnimation) => async dispatch => {
    setAnimation(true);
    try {
      //const res = await axios.get(`${Api}/title=title`);
      if(title === 'Booklet')
      {
        dispatch(setProductList(productListBookletData));
      }
      else dispatch(setProductList(productListBusinessCardData));
      setAnimation(false);
    } catch (err) {
      setAnimation(false);
      Toast.show({
        type: 'error',
        text1: "Not found",
      });
    }
  };

