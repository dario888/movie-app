import React, {useState, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { searchArtist } from '../../actions/artistsAction'




const PaginationSearchArtist = () => {
    const [currentPage, setCurrentPage] = useState(1)  

    const {totalSearchResults, searchTerm} = useSelector((state) => ({ 
      totalSearchResults: state.artists.totalSearchResults,
      searchTerm: state.artists.searchTerm
  
    }) )
  
    const dispatch = useDispatch()
  
  
    // ComponentDidUpdate when currentPage is change
    useEffect(() => {
    
      dispatch(searchArtist(searchTerm, currentPage))
  
      //eslint-disable-next-line  
    }, [currentPage])
  
    if(totalSearchResults < 20)return null;

    const pageNumbers = [];
    for (let i = 1; i <= 10; i++) {
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
              currentPage < 10 ?
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

export default PaginationSearchArtist
