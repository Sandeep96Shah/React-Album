import React from 'react';
import '../index.css';

 const Navbar = ({handleAddAlbum, handleOnChange, title}) => {

    const handleAdd = () => {
        handleAddAlbum(title);
    }

    return (
        <div className="navbar">
            <div>
                <input 
                    type="text" 
                    placeholder="Add Album" 
                    defaultValue={title}
                    onChange={ (e) => handleOnChange(e) }
                />
                <button type="reset" onClick={ () => handleAdd() } className="blue">ADD</button>
            </div>
        </div>
    )
}

export default Navbar;

