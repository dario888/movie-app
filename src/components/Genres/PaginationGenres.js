import React from 'react'

 



const PaginationGenres = ({totalMovies, filteredMovies, setCurrentPage, currentPage}) => {

  if(totalMovies < 10) return null  

  const pages = totalMovies > 200 ? 10 : Math.ceil(totalMovies / 20) 
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
                  <li onClick={() => setCurrentPage(number)} key={number} className="page-item">
                      <button className={`btnLink ${active}`}>{number}</button>            
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

