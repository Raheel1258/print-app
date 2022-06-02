import createReducer from '../createReducer';
import * as types from "../types/types"


const cartReducer = createReducer({}, {
	[types.CART_DETAIL](state, action) {
		console.log('action', action.cart)
		return {
			...state,
			cartDetail: action.cart,
		};
	},
    [types.ADD_TO_CART](state, action) {
		return {
			...state,
			addedCartItem: action.item,
		};
	},
	[types.PROMO_CODE](state, action) {
		return {
			...state,
			promoCode: action.data,
		};
	},
	[types.USER_DETAIL_ORDER](state, action) {
		return {
			...state,
			userDetail: action.data,
		};
	},


});
export default cartReducer;