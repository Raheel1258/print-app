import createReducer from '../createReducer';
import * as types from "../types/types"

const categories = createReducer({
  categories: {},
},
  {
    [types.GET_CATEGORIES](state, action) {
      console.log('getting thre', action.Payload);
      return {
        ...state,
        categories: action.Payload
      };
    }
  },
);


export default categories;