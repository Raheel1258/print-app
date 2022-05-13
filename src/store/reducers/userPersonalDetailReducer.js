import createReducer from '../createReducer';
import * as types from "../types/types"


const userPersonalDetailReducer = createReducer({}, {
	[types.USER_ADDRESS](state, action) {
		return {
			...state,
			userAddress: action.userAddress,
		};
	},
});
export default userPersonalDetailReducer;