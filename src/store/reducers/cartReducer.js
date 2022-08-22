import createReducer from '../createReducer';
import * as types from "../types/types"

const cartReducer = createReducer({
	cartLength : 0
}, {
	[types.CART_DETAIL](state, action) {
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
	[types.CART_LENGTH](state, action) {
		return {
			...state,
			cartLength: action.data,
		};
	},
	//USER_CARDS_DATA
	[types.USER_CARDS_DATA](state, action) {
		return {
			...state,
			userCardsData: action.data,
		};
	},


});
export default cartReducer;