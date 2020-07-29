import { createStore, combineReducers } from 'redux';
import rootReducer from './reducers';

// create store with two reducers combined in one rootReducer
// const store = createStore(rootReducer); 

const store = createStore(
    rootReducer, /* preloadedState, */
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

window.store = store;


export default store;