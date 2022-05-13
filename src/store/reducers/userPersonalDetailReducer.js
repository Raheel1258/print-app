import createReducer from '../createReducer';
import * as types from "../types/types"


const userPersonalDetailReducer = createReducer({}, {
	[types.USER_ADDRESS](state, action) {
		return {
			...state,
			userAddress: action.userAddress,
		};
	},
    [types.USER_DETAIL](state, action) {
        console.log("first time" , state)
		return {
			user: action.user,
		};
	},
});
export default userPersonalDetailReducer;