import React, {useState, useEffect} from 'react'
import { useDispatch } from 'react-redux';
import {getArtists} from '../../actions/artistsAction'
import  {useHistory} from 'react-router-dom'




const PaginationArtists = () => {
  
  const [currentPage, setCurrentPage] = useState(1)  


  const dispatch = useDispatch()
  const history = useHistory();

  // ComponentDidUpdate when currentPage is change
  useEffect(() => {
    dispatch(getArtists(currentPage));

    //eslint-disable-next-line  
  }, [currentPage])


  const pageNumbers = [];
  for (let i = 1; i <= 10; i++) {
      pageNumbers.push(i);
  }

  // const onclck = () => {
  //   setCurrentPage(currentPage + 1)
  //   history.push(`/${currentPage + 1}`)
  // }

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
            <li onClick={ () => setCurrentPage(currentPage - 1)}  className={`page-item`}>
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

export default PaginationArtists
