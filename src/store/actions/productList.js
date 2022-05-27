import Toast from 'react-native-toast-message';
import Storage from '../../Utils/Storage';
import axios from 'axios';
import {
  productListBusinessCardData,
  productListBookletData,
  productListPosterData,
  productListStickerData,
  productListFlyerData,
  productListEnvelopeData,
  productListLetterheadData,
  BusinessCardData
} from "../../Utils/mockData"

import { Api } from '../../Utils/Api'
import * as types from '../types/types'


export const setProductList = (data) => {
  return {
    type: types.PRODUCT_LIST,
    data,
  };
}

export const setPriceChart = (priceChart) => {
  return {
    type: types.PRODUCT_PRICE_CHART,
    priceChart
  }
}


export const getProductListByCategory = (category, setAnimation) => async dispatch => {
  // setAnimation(true);
  try {
    if (category === "BOOKLET") {
      dispatch(setProductList(productListBookletData))
    }
    else if (category === 'POSTER') {
      dispatch(setProductList(productListPosterData));
    }
    else if (category === 'STICKERS_LABEL') {
      dispatch(setProductList(productListStickerData))
    }
    else if (category === 'FLYERS_LEAFLET') {
      dispatch(setProductList(productListFlyerData));
    }
    else if (category === 'ENVELOPE') {
      dispatch(setProductList(productListEnvelopeData))
    }
    else if (category === 'LETTERHEAD') {
      dispatch(setProductList(productListLetterheadData))
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

export const getCategoriesProduct = (category, setAnimation) => {
  return async (dispatch) => {
    setAnimation(true);
    axios.get(`${Api}/products/find/${category}`)
      .then(async (res) => {
        console.log("res from product category" , res)
        setAnimation(false);
        dispatch(setProductList(res?.data));
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

export const getPriceChart = (setPriceChartAnimation, priceChartParameter) => {
  return async (dispatch) => {
    setPriceChartAnimation(true);
    const accessToken = await Storage.retrieveData('token')
    axios.get(`${Api}/price-chart/${priceChartParameter}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
      .then(async (res) => {
        console.log("price chart" , res)
        // dispatch(setPriceChart(res?.data));
        // setPriceChartAnimation(false);
      })
      .catch((err) => {
        // setPriceChartAnimation;
        console.log("error", err?.response);
        Toast.show({
          type: 'error',
          text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network error'
        });
      });
  }
}; 
