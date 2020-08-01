import React from 'react'
import { useSelector } from 'react-redux';
import  { useHistory } from 'react-router-dom'



const PaginationSearchArtist = ({num, searchTerm}) => {
  const history = useHistory()

  const {totalSearchResults} = useSelector((state) => ({ 
    totalSearchResults: state.artists.totalSearchResults
      
  }) )
  
 if(totalSearchResults < 20) return null  
 const pages = totalSearchResults > 200 ? 10 : Math.ceil(totalSearchResults / 20) 
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
            <li onClick={ () => history.push(`/search_artist/${searchTerm}/${num - 1}`) }  className={`page-item `}>
                  <button className="btnLink">Prev</button>            
            </li> : 
            <li className={`page-item disable`}>
              <button className="btnLink">Prev</button>            
            </li>
          }

          {
            pageNumbers.map(number => {              
              let active = num === number ? 'activeBtnLink' : ''
                return (
                  <li onClick={() => history.push(`/search_artist/${searchTerm}/${number}`)} key={number} 
                  className="page-item">
                      <button className={`btnLink ${active}`}>{number}</button>            
                  </li>
                )
            })
          }

          {
            num < 10 ?
            <li onClick={ () => history.push(`/search_artist/${searchTerm}/${num + 1}`)}  className={`page-item`}>
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

export default PaginationSearchArtist
