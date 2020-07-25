import React from 'react'
import { useSelector } from 'react-redux';
import  { useHistory } from 'react-router-dom'



const PaginationSearchArtist = ({num}) => {
  const history = useHistory()

  const {totalSearchResults} = useSelector((state) => ({ 
    totalSearchResults: state.artists.totalSearchResults
      
  }) )
  
 if(totalSearchResults < 20) return null  
 const pages = Math.ceil(totalSearchResults /20) 
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
      pageNumbers.push(i);
  }
  
  
  
  return (
    
    <div className="container mb-4">
      <div className="row justify-content-center">
        <ul className="pagination">
          {
            num > 1 ?
            <li onClick={ () => history.push(`/search_artist/${num - 1}`) }  className={`page-item `}>
                  <button className="page-link btn">Prev</button>            
            </li> : 
            <li className={`page-item disable`}>
              <button className="page-link btn">Prev</button>            
            </li>
          }

          {
            pageNumbers.map(number => {              
              let active = num === number ? 'active' : ''
                return (
                  <li onClick={() => history.push(`/search_artist/${number}`)} key={number} className={`page-item ${active}`}>
                      <button className="page-link btn">{number}</button>            
                  </li>
                )
            })
          }

          {
            num < 10 ?
            <li onClick={ () => history.push(`/search_artist/${num + 1}`)}  className={`page-item`}>
              <button className="page-link btn">Next</button>            
            </li> : 
            <li  className={`page-item disable`}>
              <button className="page-link btn">Next</button>            
            </li>
          }
        </ul>
      </div >
    </div >
  )
}

export default PaginationSearchArtist
