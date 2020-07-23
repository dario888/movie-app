import React from 'react'
import { useSelector } from 'react-redux';
import  { useHistory } from 'react-router-dom'



const PaginationSearch = ({ num }) => {

  const {totalSearchResults} = useSelector((state) => ({ 
    totalSearchResults: state.movies.totalSearchResults,

  }) )
  
  // console.log('SearchMovies PAGINATION');
  const history = useHistory()

  if(totalSearchResults < 20)return null;

  const pageNumbers = [];
  const numberPages =  Math.ceil(totalSearchResults / 20) 

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
                  <span className="page-link btn">Prev</span>            
            </li> : 
            <li className={`page-item disable`}>
              <span className="page-link btn">Prev</span>            
            </li>
          }

          {
            pageNumbers.map(number => {              
              let active = num === number ? 'active' : ''
                return (
                  <li onClick={() => history.push(`/search_movies/${number}`) } key={number} className={`page-item ${active}`}>
                      <span className="page-link btn">{number}</span>            
                  </li>
                )
            })
          }

          {
            num < numberPages ?
            <li onClick={ () => history.push(`/search_movies/${num + 1}`) }  className={`page-item`}>
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

export default PaginationSearch

// const mapStateToProps = state => ({
//   totalResults: state.movies.totalResults,

// });

// export default connect(mapStateToProps)(PaginationPopularMovies)
