import React from 'react'




const Title = ({titleName, titleBg, textColor}) => {
    
    let bgColor = titleBg ||'warning'
    let color = textColor ||'dark'
    
    return (
       
        <div className={`row text-center bg-${bgColor} mb-4`}>
            <div className="col m-3">
                <h1 className={`title text-${color}`}>{titleName}</h1>               
            </div>
        </div>
       
    )
}

export default Title
