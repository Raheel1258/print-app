import createReducer from '../createReducer';
import * as types from "../types/types"


const activitiesReducer = createReducer({
	activityLength : 0
}, {
	[types.ACTIVITY_DETAIL](state, action) {
		return {
			...state,
			activitiesDetail: action.data,
		};
	},
	[types.ACTIVITY_LENGTH](state, action) {
		return {
			...state,
			activityLength: action.data,
		};
	},
    
});
export default activitiesReducer;