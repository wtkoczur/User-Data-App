import React from 'react';
import '../App.css';

const UserSearch = ({handleSubmit, handleChangeValue, handleSearch, handleReset }) => {
    return(
        <div>
             <div className="userSearch">
                <form onSubmit={handleSubmit} >
                    <input type="text" onChange={handleChangeValue} onKeyPress={handleSearch} placeholder="enter employee name" className="userSearchInp"/>
                </form>
                <button onClick={handleReset} className="resetBtn">x</button>
            </div>
             <p>enter name and press Enter</p>
        </div>
    )
}

export default UserSearch;