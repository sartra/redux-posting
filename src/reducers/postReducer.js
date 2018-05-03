import { FETCH_POSTS, NEW_POST } from '../actions/types';

const initialState = {
    items: [], // the posts that come in from our action - action is where the fetch request goes 
    item: {} // represent the single post added from the response 
}

export default function(state=initialState, action) {
    switch(action.type) { 
        case FETCH_POSTS: 
            return {
                ...state,
                items: action.payload
            };
        case NEW_POST: 
            return {
                ...state, 
                item: action.payload
            };
        default: 
            return state; 
    }
}