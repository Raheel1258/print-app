import createReducer from '../createReducer';
import * as types from "../types/types"


const orderReducer = createReducer({}, {
	[types.GET_ORDER](state, action) {
		return {
			...state,
			orderDetail: action.data,
		};
	},
   
});
export default orderReducer;