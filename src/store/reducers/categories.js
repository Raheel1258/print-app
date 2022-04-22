import createReducer from '../createReducer';
import * as types from "../types/types"


const categories = createReducer({
  categories: {},
  homeSliderImages:[]
}, 
{

	[types.GET_CATEGORIES](state, action) {
    return {
      ...state,
      categories: action.Payload
    };
  },

  [types.HOME_SLIDER_IMAGES](state, action) {
    return {
      ...state,
      homeSliderImages: action.Payload
    };
  },

});
export default categories;