import { combineReducers } from 'redux';
import auth from '../reducers/auth';
import categories from '../reducers/categories';
import productList from '../reducers/productList';
import userPersonalDetailReducer from '../reducers/userPersonalDetailReducer'



export default combineReducers(Object.assign({ auth, categories, productList, userPersonalDetailReducer }));