import Toast from 'react-native-toast-message';
import axios from 'axios';
import {
  productListBusinessCardData,
  productListBookletData, 
  productListPosterData, 
  productListStickerData , 
  productListFlyerData,
  productListEnvelopeData,
  productListLetterheadData
} from "../../Utils/mockData"

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
      setAnimation(false);
      if(title === 'Booklet')
      {
        dispatch(setProductList(productListBookletData));
      }
      else if(title === 'Poster'){
        dispatch(setProductList(productListPosterData));
      }
      else if(title === 'Stickers & Label'){
        dispatch(setProductList(productListStickerData));
      }
      else if(title === 'Flyers & Leaflet'){
        dispatch(setProductList(productListFlyerData))
      }
      else if(title === 'Envelope'){
        dispatch(setProductList(productListEnvelopeData))
      }
      else if(title === 'Letterhead'){
        dispatch(setProductList(productListLetterheadData))
      }
      else dispatch(setProductList(productListBusinessCardData));
    } catch (err) {
      setAnimation(false);
      Toast.show({
        type: 'error',
        text1: "Not found",
      });
    }
  };

