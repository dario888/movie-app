import React, {} from 'react'
import { useDispatch } from 'react-redux';
import  { NavLink } from 'react-router-dom'
import {movieDetails} from '../../actions/moviesActions'



const MoviesGrid = ({ posterPath, title, movieID }) => {
   
    const dispatch = useDispatch()

    const urlImage = process.env.REACT_APP_IMG;

   

    return (
        <div className="row justify-content-center col-sm-6 col-lg-4  mb-5">
            <div className="gridCard"  >
                <img src={`${urlImage}/w500/${posterPath}`} className="card-img-top" alt="poster" />
                <div className="card-body bg-light">
                    <h5 className="card-title text-warning">{title}</h5>
                    <NavLink  to="/details" className="btn btn-primary text-light" 
                    onClick={ () => dispatch( movieDetails(movieID) ) } >
                        Details
                    </NavLink>
                </div>
            </div>
        </div>
    )
}

export default MoviesGrid
// export default connect(null,{movieDetails})(MoviesGrid)
