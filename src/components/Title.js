import React from 'react'




const Title = ({titleName, titleBg, textColor}) => {
    
    let color = textColor ||'titleColor'
    
    return (
       
        <div className={`title text-center ${titleBg}`}>
            <div className="col">
                <h1 className={color}>{titleName}</h1>               
            </div>
        </div>
       
    )
}

export default Title
