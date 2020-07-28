import React, {} from 'react'
import { useSelector, } from 'react-redux';
import  { useHistory } from 'react-router-dom'



const PaginationMovies = ({num, page}) => { 

  const { totalUpcomingResults} = useSelector((state) => ({ 
    totalUpcomingResults: state.movies.totalUpcomingResults 

  }) )

  const history = useHistory();

  const pageNumbers = [];
  
  const pagiPages = totalUpcomingResults > 200 ? 10 : Math.ceil(totalUpcomingResults / 20)
  for (let i = 1; i <= pagiPages; i++) {
      pageNumbers.push(i);
  }



  return (
    
    <div className="container mb-4 ">
      <div className="row justify-content-center ">
        <ul className="pagination ">
          {
            num > 1 ?
            <li onClick={ () => history.push(`/${page}/${num - 1}`)}  className={`page-item `}>
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
                  <li onClick={() => history.push(`/${page}/${number}`) } key={number} className="page-item">
                      <button className={`btnLink ${active}`}>{number}</button>            
                  </li>
                )
            })
          }

          {
            num < 10 ?
            <li onClick={ () => history.push(`/${page}/${num + 1}`)}  className={`page-item`}>
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

export default PaginationMovies

// const mapStateToProps = state => ({
//   totalResults: state.movies.totalResults,

// });

// export default connect(mapStateToProps)(PaginationPopularMovies)
