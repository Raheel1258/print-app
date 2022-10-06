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
    [types.PRODUCT_PRICE_CHART_EDIT](state, action) {
      return {
        ...state,
        priceChartEdit: action.priceChart
      };
    },
    [types.SINGLE_PRODUCT](state, action) {
      return {
        ...state,
        singleProduct: action.data
      };
    },
  });
export default productList;