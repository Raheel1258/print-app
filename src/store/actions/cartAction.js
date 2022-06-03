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

function setUserDetail(data){
    return{
        type: types.USER_DETAIL_ORDER,
        data
    }
}

function setPromoCodeDetail(data){
    console.log("into reduction type promo" , data );
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
                console.log("res from get cart", res);
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
    console.log("datattatatatatatatatat," ,data);
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAddToCartAnimation(true);
        axios.patch(`${Api}/cart/product/add`, data, { headers: { "Authorization": `Bearer ${accessToken}`}})
            .then(async (res) => {
                setAddToCartAnimation(false);
                console.log("item added to cart" , res?.data)
                dispatch(setAddToCart(res?.data?.products));
                Toast.show({
                    type: 'success',
                    text1: 'Item added to cart successfully',
                });
                navigate("cart");
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
    console.log("into cart delete");
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimation(true);
        axios.delete(`${Api}/cart/product/delete/${_id}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
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
        axios.get(`${Api}/promocode/findbyname/${data}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                console.log("res from promocode" , res)
                if(res?.data?.length > 0){
                    dispatch(setPromoCodeDetail(res?.data[0]?.discount));
                    setValidPromoCode(true);
                }else {dispatch(setPromoCodeDetail("0")); promoCodeToggleModal(); setValidPromoCode(false);};
                setPromoCodeAnimation(false);

            })
            .catch((err) => {
                console.log("res from promocode err" , err?.response)
                promoCodeToggleModal();
                setPromoCodeAnimation(false);
                setValidPromoCode(false);
            });
    }
}
//Edit Cart Item
export const editCartItem = (setAddToCartAnimation,productId, obj, navigate) => {
    console.log("cart edit productId" , productId);
    console.log("edit project" , obj);
    return async (dispatch) => {
        setAddToCartAnimation(true);
        const accessToken = await Storage.retrieveData('token')
        axios.patch(`${Api}/cart/product/update/${productId}`,obj, { headers: { "Authorization": `Bearer ${accessToken}` }})
            .then(async (res) => {
                setAddToCartAnimation(false);
                console.log("edit cart res" , res);
                navigate("cart");
                //dispatch(setCartDetail([]));
            })
            .catch((err) => {
                setAddToCartAnimation(false);
                console.log("edited cart res" , err?.response);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });
    }
}


//Empty Cart 
export const emptyCart = () => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        axios.post(`${Api}/cart/empty`,{}, { headers: { "Authorization": `Bearer ${accessToken}` }})
            .then(async (res) => {
                dispatch(setCartDetail([]));
                console.log("empty res" , res);
            })
            .catch((err) => {
                console.log("empty" , err?.response);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });
    }
}

//Place order api with bank transfer Method
export const placeOrderOffline = (setPlaceOrderAnimation, orderObj, navigate) => {
    return async (dispatch) => {
        setPlaceOrderAnimation(true);
        const accessToken = await Storage.retrieveData('token');
        console.log("xyz in order");
        axios.post(`${Api}/order/add`,orderObj, { headers: { "Authorization": `Bearer ${accessToken}` }})
            .then(async (res) => {
                setPlaceOrderAnimation(false);
                navigate("orderReceived");
            })
            .catch((err) => {
                setPlaceOrderAnimation(false);
                console.log("order place err" , err?.response);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });
    }
}


//Get User Detail For Place order
export const getUserDetailForPlacingOrder = (setData) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        // setAnimation(true);
        axios.get(`${Api}/user/find`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                // setAnimation(false);
                dispatch(setUserDetail(res?.data));
                setData(res?.data?.addresses)
            })
            .catch((err) => {
                // setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: err?.response?.data?.message ? err?.response?.data?.message : 'Network Error',
                });
            });

    }
}






