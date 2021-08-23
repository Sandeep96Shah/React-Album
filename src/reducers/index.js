import { FETCH_ALBUMS, UPDATE, DELETE, ADD } from "../actions/actionTypes"

const initialState = {
    albumsList:[],
}

export default function albums(state = initialState, action){
    switch(action.type){
        case FETCH_ALBUMS:
            return {
                ...state,
                albumsList:action.payload,
            }
        case UPDATE:
            const index = state.albumsList.findIndex(album => album.id === action.id);
            state.albumsList[index]=action.payload;
            const latest_albumsList = [...state.albumsList];
            return{
                ...state,
                albumsList:latest_albumsList,
            }
        case DELETE:
            const new_albumsList = state.albumsList.filter((album) => album.id !== action.id);
            return{
                ...state,
                albumsList:new_albumsList,
            }
        case ADD:
            return {
                ...state,
                albumsList:[...state.albumsList, action.payload],
            }
        default:
            return state;
    }
}