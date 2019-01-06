//TODO(6): Create Action
import { FETCH_POSTS, NEW_POST } from "./types";

//TODO(6.1) An Action is performed and dispatched with action type and payload (like a promise returns callback)
export const fetchPosts = () => dispatch => {
    console.log('fetching!');
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispatch({
            type: FETCH_POSTS,
            payload: data 
        }))
        .catch(err => console.log(err));
}
