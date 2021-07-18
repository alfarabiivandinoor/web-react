import React from 'react'
import '../../App.css'
import search from '../../media/search.png'

function Search() {
    return(
        <div className="Search">
            <input type="text" placeholder="Wedding Accessories"></input>
            <img src={search} alt="" height="23px"/>
        </div>
    )
}

export default Search