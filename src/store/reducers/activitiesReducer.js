import createReducer from '../createReducer';
import * as types from "../types/types"


const activitiesReducer = createReducer({}, {
	[types.ACTIVITY_DETAIL](state, action) {
		return {
			...state,
			activitiesDetail: action.data,
		};
	},
    
});
export default activitiesReducer;