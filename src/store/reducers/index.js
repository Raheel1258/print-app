import { combineReducers } from 'redux';
import auth from '../reducers/auth';
import categories from '../reducers/categories';
import productList from '../reducers/productList';
import userPersonalDetailReducer from '../reducers/userPersonalDetailReducer';
import cartReducer from "../reducers/cartReducer";
import orderReducer from '../reducers/orderReducer';
import activitiesReducer from '../reducers/activitiesReducer'

export default combineReducers(Object.assign({ auth, categories, productList, userPersonalDetailReducer, cartReducer, orderReducer, activitiesReducer }));