import React from 'react'
import { useSelector } from 'react-redux';
import  { useHistory } from 'react-router-dom'



const PaginationSearch = ({ num }) => {

  const {totalSearchResults} = useSelector((state) => ({ 
    totalSearchResults: state.movies.totalSearchResults,

  }) )
  
  const history = useHistory()

  if(totalSearchResults < 20)return null;

  const pageNumbers = [];
  const numberPages = totalSearchResults > 200 ? 10 : Math.ceil(totalSearchResults / 20) 

  for (let i = 1; i <= numberPages; i++) {
      pageNumbers.push(i);
  }



  return (
    
    <div className="container mb-4">
      <div className="row justify-content-center">
        <ul className="pagination">
          {
            num > 1 ?
            <li onClick={ () =>  history.push(`/search_movies/${num - 1}`) }  className={`page-item `}>
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
                  <li onClick={() => history.push(`/search_movies/${number}`) } key={number} className="page-item ">
                      <button className={`btnLink ${active}`}>{number}</button>            
                  </li>
                )
            })
          }

          {
            num < numberPages ?
            <li onClick={ () => history.push(`/search_movies/${num + 1}`) }  className={`page-item`}>
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

export default PaginationSearch

// const mapStateToProps = state => ({
//   totalResults: state.movies.totalResults,

// });

// export default connect(mapStateToProps)(PaginationPopularMovies)
