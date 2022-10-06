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
		return {
			...state,
			user: action.user,
		};
	},
	[types.USER_CARD](state, action) {
		return {
			...state,
			userCard: action.userCard,
		};
	},
});
export default userPersonalDetailReducer;