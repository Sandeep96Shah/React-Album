import React from 'react';
import '../index.css';

//this component is used to handle the album added by the user in the input field
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
                    value={title}
                    onChange={ (e) => handleOnChange(e) }
                />
                <button type="reset" onClick={ () => handleAdd() } className="blue">ADD</button>
            </div>
        </div>
    )
}

export default Navbar;

