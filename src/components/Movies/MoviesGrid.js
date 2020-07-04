import React, {} from 'react'
import { connect } from 'react-redux';
import  { NavLink } from 'react-router-dom'
import {movieDetails} from '../../actions/moviesActions'



const MoviesGrid = ({ posterPath, title, movieID, movieDetails}) => {
   
    const urlImage = process.env.REACT_APP_IMG;

   

    return (
        <div className="row card m-1" style={{ width: "200px" }}  >
            <img src={`${urlImage}/w500/${posterPath}`} className="card-img-top" alt="poster" />
            <div className="card-body bg-dark">
                <h5 className="card-title text-warning">{title}</h5>
                <NavLink  to="/details" className="btn btn-outline-warning text-light" 
                onClick={ () => movieDetails(movieID) } >
                    Details
                </NavLink>
            </div>
        </div>
    )
}

export default connect(null,{movieDetails})(MoviesGrid)
