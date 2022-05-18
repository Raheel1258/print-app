import createReducer from '../createReducer';
import * as types from "../types/types"


const cartReducer = createReducer({}, {
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

});
export default cartReducer;