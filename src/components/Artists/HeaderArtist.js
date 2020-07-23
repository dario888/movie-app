import React from 'react'
import SearchBarArtist from './SearchBarArtist'
import Title from '../Title'




const Header = ({titleName, textColor}) => {
    
    return(
        <div className="artist-header bg-secondary align-items-center justify-content-center mb-2">
            <SearchBarArtist />
            <Title textColor={textColor}  titleName={titleName} />
        </div>
    )
    
}

export default Header
