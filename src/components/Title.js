import React from 'react'




const Title = ({titleName, titleBg}) => {
    
    let bgColor = titleBg ||'warning'
    
    return (
       
        <div className={`row text-center bg-${bgColor} mb-4`}>
            <div className="col m-3">
                <h1 className="title text-dark">{titleName}</h1>               
            </div>
        </div>
       
    )
}

export default Title
