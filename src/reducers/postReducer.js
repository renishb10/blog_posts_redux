//TODO(5): Bring in types here
import { FETCH_POSTS, NEW_POST } from "../actions/types";

const initialState = {
    items: [],
    item: {}
}

//TODO(5.1): Export state based on action
export default (state = initialState, action) => {
    switch(action.type) {
        
        case FETCH_POSTS:
            console.log('FETCH_POSTS');
            return {
                ...state,
                items: action.payload
            };
        
        case NEW_POST:
            console.log('NEW_POST');
            return {
                ...state,
                item: action.payload
            };
        
        default:
            return state;
    }
}