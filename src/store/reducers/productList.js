import createReducer from '../createReducer';
import * as types from "../types/types"


const productList = createReducer({}, 
{
	[types.PRODUCT_LIST](state, action) {
    return {
      ...state,
      categoryProductList: action.data
    };
  },
  [types.PRODUCT_PRICE_CHART](state, action) {
    return {
      ...state,
      priceChart: action.priceChart
    };
  },
});
export default productList;