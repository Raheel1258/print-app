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
});
export default auth;
