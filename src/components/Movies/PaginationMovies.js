import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {getMovies, searchMovies} from '../../actions/moviesActions'





const PaginationMovies = ({popular, topRated, upcoming}) => {
  
  const [currentPage, setCurrentPage] = useState(1)  

  const {totalResults, searchTerm} = useSelector((state) => ({ 
    totalResults: state.movies.totalResults,
    searchTerm: state.movies.searchTerm

   }) )

  const dispatch = useDispatch()


  // ComponentDidUpdate when currentPage is change
  useEffect(() => {
    if(popular)dispatch(getMovies(popular, currentPage));
    if(topRated)dispatch(getMovies(topRated, currentPage));
    if(upcoming)dispatch(getMovies(upcoming, currentPage));
    if(searchTerm)dispatch(searchMovies(searchTerm, currentPage))

    //eslint-disable-next-line  
  }, [currentPage])


  const pageNumbers = [];
  const numberPages = totalResults < 201 ? Math.ceil(totalResults / 20) : Math.ceil(200 / 20)

  for (let i = 1; i <= numberPages; i++) {
      pageNumbers.push(i);
  }



  return (
    
    <div className="container mb-4">
      <div className="row justify-content-center">
        <ul className="pagination">
          {
            currentPage > 1 ?
            <li onClick={ () => setCurrentPage(currentPage - 1) }  className={`page-item `}>
                  <span className="page-link btn">Prev</span>            
            </li> : 
            <li className={`page-item disable`}>
              <span className="page-link btn">Prev</span>            
            </li>
          }

          {
            pageNumbers.map(number => {              
              let active = currentPage === number ? 'active' : ''
                return (
                  <li onClick={() => setCurrentPage(number)} key={number} className={`page-item ${active}`}>
                      <span className="page-link btn">{number}</span>            
                  </li>
                )
            })
          }

          {
            currentPage < numberPages ?
            <li onClick={ () => setCurrentPage(currentPage + 1)}  className={`page-item`}>
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
