import createReducer from '../createReducer';
import * as types from "../types/types"

export const categories = createReducer({
  categories: {},
},
  {
    [types.GET_CATEGORIES](state, action) {
      return {
        ...state,
        categories: action?.payload
      };
    }
  },
);