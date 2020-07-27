import React from 'react'
import SearchBarArtist from './SearchBarArtist'





const Header = ({titleName, headerBg, textColor}) => {
    
    return(
        <div className={`artistHeader ${headerBg} align-items-center justify-content-center`}>
            <SearchBarArtist />
            <h1 className="titleArtists px-3">Popular Artists</h1>
        </div>
    )
    
}

export default Header
