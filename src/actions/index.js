import axios from 'axios';

import { FETCH_ALBUMS, UPDATE, DELETE, ADD } from './actionTypes';

export function albums(data){
    return {
        type:FETCH_ALBUMS,
        payload:data,
    }
}

export function fetch_albums(){
    return (dispatch) => {
        axios.get('http://localhost:3000/albums')
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

export function update_album(album){
    axios.put(`http://localhost:3000/albums/${album.id}`,album)
        .then(response => console.log(" put response", response))
        .catch(error => console.log("put error", error));
    return {
        type:UPDATE,
        payload:album,
        id:album.id,
    }
}

export function delete_album(id){
    axios.delete(`http://localhost:3000/albums/${id}`)
        .then(response => console.log("delete response", response))
        .catch(error => console.log("delete error", error));

    return {
        type:DELETE,
        id,
    }
}

export function add_album(album){
    axios.post('http://localhost:3000/albums', album)
        .then(response => console.log("response", response))
        .catch(error => console.log("error", error));

    return {
        type:ADD,
        payload:album,
    }
}