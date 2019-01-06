//TODO(2.1): Bring createStore, rootReducers, applyMiddleware (thunk here) from redux to initiate the store
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

//TODO(3): Create and Bring Reducer(root) here
import rootReducer from './reducers';

//TODO(2.2): Create store - it needs three things (1: RootReducer, 2: Initial state, 3: Middleware)
const initialState = {};

const middleware = [thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware)
);

export default store;

