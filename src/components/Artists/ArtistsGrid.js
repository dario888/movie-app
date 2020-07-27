import React from 'react'
import { useDispatch } from 'react-redux';
import  { NavLink } from 'react-router-dom'
import {artistDetails} from '../../actions/artistsAction'





const ArtistsGrid = ({artistID, profilePath, artistName, artistMovies}) => {
    const dispatch = useDispatch()
  

    const urlImage = process.env.REACT_APP_IMG;
    
   
    return (
        <div className="row justify-content-center col-sm-6 col-lg-4 mb-4" >
            <div className="card">
            <img src={`${urlImage}/w500/${profilePath}`} className="card-img-top" alt="poster" />
            <div className="card-body bg-success">
                <h5 className="card-title text-light">{artistName}</h5>
                <p className="text-light">
                    {artistMovies.map(m => m.name || m.title).join(', ')}
                </p>
                <NavLink  to="/artist_details" className="btn btn-outline-warning text-light" 
                onClick={ () => dispatch( artistDetails(artistID) ) } >
                    Details
                </NavLink>
            </div>
                
            </div>
        </div>
    )
}

export default ArtistsGrid
