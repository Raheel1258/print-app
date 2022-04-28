import Toast from 'react-native-toast-message';
import axios from 'axios';
import {
  productListBusinessCardData,
  productListBookletData, 
  productListPosterData, 
  productListStickerData , 
  productListFlyerData,
  productListEnvelopeData,
  productListLetterheadData,
  BusinessCardData
} from "../../Utils/mockData"

import {Api} from '../../Utils/Api'
import * as types from '../types/types'


export const setProductList = data => {
  return {
    type: types.PRODUCT_LIST,
    Payload: data,
  };
}


export const getProductListByCategory = (category, setAnimation) => async dispatch => {
    setAnimation(true);
    console.log("cccccc" , category)
    try {
      if(category === "BOOKLET"){
        console.log("into book")
        dispatch(setProductList(productListBookletData))
      }
      else if(category === 'POSTER'){
        dispatch(setProductList(productListPosterData));
      }
      else {
        dispatch(setProductList(BusinessCardData))
      }
     
      //const res = await axios.get(`${Api}/category=category`);
      // setAnimation(false);
      // if(category === 'BOOKLET')
      // {
      //   dispatch(setProductList(productListBookletData));
      // }
      // else if(category === 'POSTER'){
      //   dispatch(setProductList(productListPosterData));
      // }
      // else if(category === 'FLYERS_LEAFLET'){
      //   dispatch(setProductList(productListStickerData));
      // }
      // else if(category === 'STICKERS_LABEL'){
      //   dispatch(setProductList(productListFlyerData))
      // }
      // else if(category === 'ENVELOPE'){
      //   dispatch(setProductList(productListEnvelopeData))
      // }
      // else if(category === 'LETTERHEAD'){
      //   dispatch(setProductList(productListLetterheadData))
      // }
      // else dispatch(setProductList(productListBusinessCardData));
      
    } catch (err) {
      setAnimation(false);
      Toast.show({
        type: 'error',
        text1: "Not found",
      });
    }
  };

