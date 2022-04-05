import createReducer from '../createReducer';
import * as types from "../types/types"


const productList = createReducer({
  productList: {},
  
}, 
{
	[types.PRODUCT_LIST](state, action) {
    return {
      ...state,
      productList: action.Payload
    };
  },
});
export default productList;