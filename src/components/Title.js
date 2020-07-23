import React from 'react'




const Title = ({titleName, titleBg, textColor}) => {
    
    // let bgColor = titleBg ||'warning' //bg-${bgColor}
    // let color = textColor ||'dark'
    
    return (
       
        <div className={`title text-center ${titleBg}`}>
            <div className="col">
                <h1 className={`text-${textColor}`}>{titleName}</h1>               
            </div>
        </div>
       
    )
}

export default Title
