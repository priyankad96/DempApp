import {combineReducers} from "redux";

export const ADD_POST='ADD_POST';
/*const FETCH_POSTS='FETCH_POSTS';
const FETCH_POSTS_COMPLETE='FETCH_POSTS_COMPLETE';*/

/*
const data=(state={})=>{
    return state;
};
*/

const reddit=(state=[
    {"name":'hello'},
    {"name":'hi..'}
    ],action)=>{
    switch (action.type) {
        /*case FETCH_POSTS:
            return state;
        case FETCH_POSTS_COMPLETE:
            return action.payload;*/
        case ADD_POST:
            return[
                action.payload,
                    ...state
            ];

        default:
            return state;
    }

};

export const reducer=combineReducers({reddit});