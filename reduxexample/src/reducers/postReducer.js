// import {FETCH_POSTS, NEW_POST } from '../actions/types';
export const FETCH_POSTS = 'FETCH_POSTS';
export const NEW_POST = 'NEW_POST';

const initialState = {
    items: [],
    item: {}
}

export default function(state = initialState, action){
    switch(action.type){
        case FETCH_POSTS:
            return {
                ...state,
                items: action.payload
            }
        case NEW_POST:
            return {
                ...state,
                item: action.payload
            }
        default:
            return state;
    }
}