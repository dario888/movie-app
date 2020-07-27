import React from 'react'
import SearchBar from './SearchBar'
import Title from './Title'




const Header = ({headerBg, titleName,  titleColor, btnSearchBg}) => {

    return (
        <div className={`movie-header ${headerBg} align-items-center justify-content-center `}>
            <SearchBar btnSearchBg={btnSearchBg} />
            <Title titleName={titleName}  textColor={titleColor}/>
        </div>
    )
}

export default Header
