import React from 'react'
import  { useHistory } from 'react-router-dom'




const PaginationArtists = ({num}) => {
  
  const history = useHistory();


  const pageNumbers = [];
  for (let i = 1; i <= 10; i++) {
      pageNumbers.push(i);
  }

 

  return (
    
    <div className="container mb-4">
      <div className="row justify-content-center">
        <ul className="pagination">
          {
            num  > 1 ?
            <li onClick={() => history.push(`/artists/${num - 1}`) }  className={`page-item `}>
                  <button className="btnLink">Prev</button>            
            </li> : 
            <li className={`page-item disable`}>
              <button className="btnLink">Prev</button>            
            </li>
          }

          {
            pageNumbers.map(number => {              
              let active = num  === number ? 'activeBtnLink' : ''
                return (
                  <li  onClick={()=> history.push(`/artists/${number}`)} key={number} 
                  className={`page-item ${active}`}>
                      <button className="btnLink">{number}</button>            
                  </li>
                )
            })
          }

          {
            num < 10 ?
            <li onClick={ () => history.push(`/artists/${num + 1}`) }  className={`page-item`}>
              <button className="btnLink">Next</button>            
            </li> : 
            <li  className={`page-item disable`}>
              <button className="btnLink">Next</button>            
            </li>
          }
        </ul>
      </div >
    </div >
  )
}

export default PaginationArtists
