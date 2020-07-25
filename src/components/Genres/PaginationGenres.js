import React from 'react'

 



const PaginationGenres = ({totalMovies, filteredMovies, setCurrentPage, currentPage}) => {

  if(totalMovies < 10) return null  

  const pages = Math.ceil(totalMovies / 10) 
  const pageNumbers = [];
  for (let i = 1; i <= pages; i++) {
    pageNumbers.push(i);
  }



  return (
  
    <div className="container">
      <div className="row justify-content-center">
        <ul className="pagination">
          {
            currentPage > 1 ?
            <li onClick={ () => setCurrentPage(currentPage - 1)}  className={`page-item `}>
                  <button className=" btnLink">Prev</button>            
            </li> : 
            <li className={`page-item disable`}>
              <button className="btnLink ">Prev</button>            
            </li>
          }

          {
            pageNumbers.map(number => {              
              let active = currentPage === number ? 'activeBtnLink' : ''
                return (
                  <li onClick={() => setCurrentPage(number)} key={number} className={`page-item ${active}`}>
                      <button className="btnLink">{number}</button>            
                  </li>
                )
            })
          }

          {
            currentPage < pages?
            <li onClick={ () => setCurrentPage(currentPage + 1)}  className={`page-item`}>
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

export default PaginationGenres

