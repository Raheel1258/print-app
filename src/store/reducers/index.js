import { combineReducers } from 'redux';
import auth from '../reducers/auth';
import categories from '../reducers/categories';


export default combineReducers(Object.assign({ auth, categories }));