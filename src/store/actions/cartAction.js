import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {
    cartItem
  } from "../../Utils/mockData"

import { Api } from '../../Utils/Api'
import * as types from '../types/types';


function setCartDetail(cart) {
    console.log("reducer fun",)
    return {
        type: types.CART_DETAIL,
        cart,
    }
}

function setAddToCart(item){
    return{
        type: types.ADD_TO_CART,
        item,
    }
}

function setPromoCodeDetail(data){
    return{
        type: types.PROMO_CODE,
        data
    }
}


//Get Cart Data
export const getCartData = (setAnimation, navigate) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimation(true);
        axios.get(`${Api}/cart`,{ headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                dispatch(setCartDetail(res?.data?.products));
                setAnimation(false);
            })
            .catch((err) => {
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });

    }
}

//Add to cart
export const addToCart = (setAddToCartAnimation, data, navigate) => {
    
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAddToCartAnimation(true);
        axios.patch(`${Api}/cart/item/add`, data, { headers: { "Authorization": `Bearer ${accessToken}`}})
            .then(async (res) => {
                setAddToCartAnimation(false);
                console.log("item added to cart" , res?.data)
                dispatch(setAddToCart(res?.data?.products));
                Toast.show({
                    type: 'success',
                    text1: 'Item added to cart successfully',
                });
                navigate("cart")
            })
            .catch((err) => {
                setAddToCartAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });

    }
}


export const deleteProduct = (setAnimation, _id, navigate) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimation(true);
        axios.patch(`${Api}/cart/item/delete/${_id}`,{}, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                console.log("cart delete" , res?.data )
                // dispatch(setCartDetail(res?.data?.products)); 
                dispatch(getCartData(setAnimation,navigate)); 
                setAnimation(false);
            })
            .catch((err) => {
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });

    }
}

//Promo Code
export const PromoCodeVerifed = (setPromoCodeAnimation, data, promoCodeToggleModal, setValidPromoCode ) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setPromoCodeAnimation(true);
        axios.get(`${Api}/promocode/find/${data}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                console.log("PromoCode res" , res);
                //dispatch(setPromoCodeDetail(res?.data));
                setPromoCodeAnimation(false);
                setValidPromoCode(true);

            })
            .catch((err) => {
                promoCodeToggleModal();
                console.log("promo code err" , err.response);
                setPromoCodeAnimation(false);
                setValidPromoCode(false);
            });
    }
}





