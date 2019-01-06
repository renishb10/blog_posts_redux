//TODO(3.1): We can combine reducers using combineReducers class
import { combineReducers } from 'redux';
import postReducer from './postReducer';

export default combineReducers({
    posts: postReducer
});