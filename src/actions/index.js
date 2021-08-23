import axios from 'axios';

import { FETCH_ALBUMS, UPDATE, DELETE, ADD } from './actionTypes';

//function to add the fetched albums into store
export function albums(data){
    return {
        type:FETCH_ALBUMS,
        payload:data,
    }
}

//http get method to fetch the albums
export function fetch_albums(){
    return (dispatch) => {
        axios.get('https://my-json-server.typicode.com/Sandeep96Shah/React-Album/albums',)
        .then((response) => {
            if(response){
                dispatch(albums(response.data));
            }
        })
        .catch((err) => {
            console.log("error", err);
        })
            
    };
}

//http put method to update the album 
export function update_album(album){
    axios.put(`https://my-json-server.typicode.com/Sandeep96Shah/React-Album/albums/${album.id}`,album)
        .then(response => console.log(" put response", response))
        .catch(error => console.log("put error", error));
    return {
        type:UPDATE,
        payload:album,
        id:album.id,
    }
}

//httmp delete method to delete the album
export function delete_album(id){
    axios.delete(`https://my-json-server.typicode.com/Sandeep96Shah/React-Album/albums/${id}`)
        .then(response => console.log("delete response", response))
        .catch(error => console.log("delete error", error));

    return {
        type:DELETE,
        id,
    }
}

//httmp method post to add the album
export function add_album(album){
    axios.post('https://my-json-server.typicode.com/Sandeep96Shah/React-Album/albums', album)
        .then(response => console.log("response", response))
        .catch(error => console.log("error", error));

    return {
        type:ADD,
        payload:album,
    }
}