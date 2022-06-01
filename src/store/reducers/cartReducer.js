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
		console.log("into reducer promo" , action.data );
		return {
			...state,
			promoCode: action.data,
		};
	},


});
export default cartReducer;