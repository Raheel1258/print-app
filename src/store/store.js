import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import reducer from '../store/reducers/index'

function configureStore(initialState) {
    const finalCreateStore = compose(applyMiddleware(thunk))(createStore);
    const store = finalCreateStore(reducer, initialState);
    return store;
};

const store = configureStore({

});
export default store;
