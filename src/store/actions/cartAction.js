import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import {
    cartItem
  } from "../../Utils/mockData"

import { Api } from '../../Utils/Api'
import * as types from '../types/types';


function setCartDetail(cart) {

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
        if(cartItem.length > 0){

            dispatch(setCartDetail(cartItem));
        }
        else{
            navigate("emptyCart");
        }
        // axios.post(`${Api}/cart`,{ headers: { "Authorization": `Bearer ${accessToken}` } })
        //     .then(async (res) => {
        //         console.log("cart responsed" , res);
        //         setAnimation(false);
        //         dispatch(setCartDetail(res?.data?.cart));
        //     })
        //     .catch((err) => {
        //         setAnimation(false);
        //         Toast.show({
        //             type: 'error',
        //             text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
        //         });
        //     });

    }
}

//Add to cart
export const addToCart = (setAddToCartAnimation, data) => {
    console.log("item data from frontend" , data);
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAddToCartAnimation(true);
        axios.patch(`${Api}/cart/item/add`, data, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                console.log("item added response" , res);
                setAddToCartAnimation(false);
                //dispatch(setAddToCart(res?.data?.cart));
            })
            .catch((err) => {
                console.log("err" , err.response);
                setAddToCartAnimation(false);
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
        axios.get(`${Api}/promocode/find/${'628b6ef529b7754e3498bd6d'}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
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





