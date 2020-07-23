import React from 'react'
import SearchBar from './SearchBar'
import Title from './Title'




const Header = ({headerBg, titleName,  textColor, btnSearchBg}) => {

    let bgColor = headerBg ||'warning'
    let color = textColor ||'dark'


    return (
        <div className={`movie-header bg-${bgColor} align-items-center justify-content-center mb-2`}>
            <SearchBar btnSearchBg={btnSearchBg} />
            <Title titleName={titleName}  textColor={color}/>
        </div>
    )
}

export default Header
