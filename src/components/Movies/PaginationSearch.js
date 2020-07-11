import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { searchMovies } from '../../actions/moviesActions'





const PaginationSearch = ({popular, topRated, upcoming}) => {
  
  const [currentPage, setCurrentPage] = useState(1)  

  const {totalSearchResults, searchTerm} = useSelector((state) => ({ 
    totalSearchResults: state.movies.totalSearchResults,
    searchTerm: state.movies.searchTerm

   }) )

  const dispatch = useDispatch()


  // ComponentDidUpdate when currentPage is change
  useEffect(() => {
  
    dispatch(searchMovies(searchTerm, currentPage))

    //eslint-disable-next-line  
  }, [currentPage])

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

export default PaginationSearch

// const mapStateToProps = state => ({
//   totalResults: state.movies.totalResults,

// });

// export default connect(mapStateToProps)(PaginationPopularMovies)
