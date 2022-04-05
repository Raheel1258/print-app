import { combineReducers } from 'redux';
import auth from '../reducers/auth';
import categories from '../reducers/categories';
import productList from '../reducers/productList';



export default combineReducers(Object.assign({ auth, categories, productList }));