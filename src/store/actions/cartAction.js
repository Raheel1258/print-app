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
export const editCartItem = (setAddToCartAnimation,id,obj) => {
    return async (dispatch) => {
        setAddToCartAnimation(true);
        const accessToken = await Storage.retrieveData('token')
        axios.delete(`${Api}/cart/item/update/${id}`,obj, { headers: { "Authorization": `Bearer ${accessToken}` }})
            .then(async (res) => {
                setAddToCartAnimation(true);
                console.log("edit cart res" , res);
                //dispatch(setCartDetail([]));
            })
            .catch((err) => {
                setAddToCartAnimation(true);
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





