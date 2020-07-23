import React, {} from 'react'
import { useSelector, } from 'react-redux';
import  { useHistory } from 'react-router-dom'



const PaginationMovies = ({num, page}) => { 

  const { totalUpcomingResults} = useSelector((state) => ({ 
    totalUpcomingResults: state.movies.totalUpcomingResults 

  }) )

  const history = useHistory();

  // console.log('PAGINATION  MOVIES');

  const pageNumbers = [];
  
  const pagiPages = totalUpcomingResults ? Math.ceil(totalUpcomingResults / 20) : 10
  for (let i = 1; i <= pagiPages; i++) {
      pageNumbers.push(i);
  }



  return (
    
    <div className="container mb-4">
      <div className="row justify-content-center">
        <ul className="pagination">
          {
            num > 1 ?
            <li onClick={ () => history.push(`/${page}/${num - 1}`)}  className={`page-item `}>
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
                  <li onClick={() => history.push(`/${page}/${number}`) } key={number} className={`page-item ${active}`}>
                      <span className="page-link btn">{number}</span>            
                  </li>
                )
            })
          }

          {
            num < 10 ?
            <li onClick={ () => history.push(`/${page}/${num + 1}`)}  className={`page-item`}>
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

export default PaginationMovies

// const mapStateToProps = state => ({
//   totalResults: state.movies.totalResults,

// });

// export default connect(mapStateToProps)(PaginationPopularMovies)
