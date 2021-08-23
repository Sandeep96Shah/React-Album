import React from 'react';
import { useState } from 'react';
import '../index.css';

export default function AlbumList({album, handleUpdate, handleDeleteAlbum}) {

    const [title, setTitle] = useState();
    const [edit, setEdit] = useState();

    const handleSave = () => {
        const updated = {
            "userId": 1,
            "id": album.id,
            "title": title,
        }
        handleUpdate(updated);
        setEdit(false);
    }

    const handleClick = () => {
        setEdit(!edit);
    }

    const handleDelete = () => {
        handleDeleteAlbum(album.id);
    }

    return (
        <div className="albumList">
            <div className="container">
                {
                    !edit && 
                    <div className="album">
                        <p>{album.title}</p>
                    </div>
                }
                {
                    edit && 
                    <div className="album">
                        <input type="text" name="title" defaultValue={album.title} onChange={ (e) => setTitle(e.target.value) }/>
                    </div>
                }
                {
                    !edit &&
                    <div className="buttons">
                        <p onClick={ () => handleClick() } className="btn green">UPDATE</p>
                        <p onClick={ () => handleDelete() } className="btn red">DELETE</p>
                    </div>
                }

                {
                    edit &&
                    <div className="buttons">
                        <p onClick={ () => handleSave() } className="btn green">SAVE</p>
                        <p onClick={ () => handleClick() } className="btn red">CANCEL</p>
                    </div>
                }
            </div>
        </div>
    )
}
