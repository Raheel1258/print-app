import Storage from '../../Utils/Storage';
import axios from 'axios';
import Toast from 'react-native-toast-message';
import * as types from '../types/types';

import { Api } from '../../Utils/Api'
import { t } from 'i18next';


function setCartDetail(cart) {
    return {
        type: types.CART_DETAIL,
        cart,
    }
}

function setAddToCart(item) {
    return {
        type: types.ADD_TO_CART,
        item,
    }
}

function setUserDetail(data) {
    return {
        type: types.USER_DETAIL_ORDER,
        data
    }
}

function setPromoCodeDetail(data) {
    return {
        type: types.PROMO_CODE,
        data
    }
}


//Get Cart Data
export const getCartData = (setAnimation, setTextValue) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimation(true);
        axios.get(`${Api}/cart`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                dispatch(setCartDetail(res?.data?.products));
                dispatch(setPromoCodeDetail("0"));
                setAnimation(false);
                setTextValue('');
            })
            .catch((err) => {
                setAnimation(false);
                if (err?.response?.status == 401) {
                    Toast.show({
                        type: 'error',
                        text1: t('user_not_logged')
                    });
                } else
                    Toast.show({
                        type: 'error',
                        text1: t('general_message'),
                    });
            });
    }
}

//Add to cart
export const addToCart = (setAddToCartAnimation, data, navigate) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAddToCartAnimation(true);
        axios.patch(`${Api}/cart/product/add`, data, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                setAddToCartAnimation(false);
                dispatch(setAddToCart(res?.data?.products));
                Toast.show({
                    type: 'success',
                    text1: 'Item added to cart successfully',
                });
                navigate("cart");
            })
            .catch((err) => {
                setAddToCartAnimation(false);
                if (err?.response?.status == 401) {
                    Toast.show({
                        type: 'error',
                        text1: "User is not logged in"
                    });
                } else
                    Toast.show({
                        type: 'error',
                        text1: t('general_message'),
                    });
            });

    }
}


export const deleteProduct = (setAnimation, _id, navigate) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimation(true);
        axios.delete(`${Api}/cart/product/delete/${_id}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                // dispatch(setCartDetail(res?.data?.products)); 
                dispatch(getCartData(setAnimation, navigate));
                dispatch(setPromoCodeDetail("0"));
                setAnimation(false);
            })
            .catch((err) => {
                setAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });
    }
}

//Promo Code
export const PromoCodeVerifed = (setPromoCodeAnimation, data, promoCodeToggleModal, setValidPromoCode) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setPromoCodeAnimation(true);
        axios.get(`${Api}/promocode/findbyname/${data}`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                console.log("res fromm promo code" , res);
                if (res?.data?.length > 0) {
                    dispatch(setPromoCodeDetail(res?.data[0]?.discount));
                    setValidPromoCode(true);
                } else { dispatch(setPromoCodeDetail("0")); promoCodeToggleModal(); setValidPromoCode(false); };
                setPromoCodeAnimation(false);

            })
            .catch((err) => {
                promoCodeToggleModal();
                setPromoCodeAnimation(false);
                setValidPromoCode(false);
            });
    }
}
//Edit Cart Item
export const editCartItem = (setAddToCartAnimation, productId, obj, navigate) => {
    return async (dispatch) => {
        setAddToCartAnimation(true);
        const accessToken = await Storage.retrieveData('token')
        axios.patch(`${Api}/cart/product/update/${productId}`, obj, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                setAddToCartAnimation(false);
                navigate("cart");
                //dispatch(setCartDetail([]));
            })
            .catch((err) => {
                setAddToCartAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });
    }
}


//Empty Cart 
export const emptyCart = () => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        axios.post(`${Api}/cart/empty`, {}, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                dispatch(setCartDetail([]));
            })
            .catch((err) => {
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });
    }
}

//Place order api with bank transfer Method
export const placeOrderOffline = (setPlaceOrderAnimation, orderObj, navigate) => {
    return async (dispatch) => {
        setPlaceOrderAnimation(true);
        const accessToken = await Storage.retrieveData('token');
        axios.post(`${Api}/order/add`, orderObj, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                setPlaceOrderAnimation(false);
                navigate("orderReceived");
            })
            .catch((err) => {
                setPlaceOrderAnimation(false);
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });
    }
}


//Get User Detail For Place order
export const getUserDetailForPlacingOrder = (setData, setAnimationForgettingAddress) => {
    return async (dispatch) => {
        const accessToken = await Storage.retrieveData('token')
        setAnimationForgettingAddress(true);
        axios.get(`${Api}/user/find`, { headers: { "Authorization": `Bearer ${accessToken}` } })
            .then(async (res) => {
                setAnimationForgettingAddress(false);
                dispatch(setUserDetail(res?.data));
                setData(res?.data?.addresses)
            })
            .catch((err) => {
                setAnimationForgettingAddress(false);
                Toast.show({
                    type: 'error',
                    text1: t('general_message'),
                });
            });

    }
}






