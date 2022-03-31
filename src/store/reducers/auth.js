import createReducer from '../createReducer';
import * as types from "../types/types"


const auth = createReducer({}, {

	[types.USER_LOGIN](state, action) {
		return {
			...state,
			loginData: action.loginData,
		};
	},
	[types.USER_SIGNUP](state, action) {
		return {
			...state,
			signupData: action.signupData,
		};
	},
	// [types.LOADING](state, action) {
	// 	return {
	// 		...state,
	// 		loading: action.loading,
	// 	};
	// },
});
export default auth;
