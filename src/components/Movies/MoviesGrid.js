import React from 'react'



const MoviesGrid = ({ posterPath, title}) => {
    const urlImage = process.env.REACT_APP_IMG;

    return (
        <div className="row card m-1" style={{ width: "200px" }}  >
            <img src={`${urlImage}/w500/${posterPath}`} className="card-img-top" alt="poster" />
            <div className="card-body bg-dark">
                <h5 className="card-title text-warning">{title}</h5>
                <a href="/" className="btn btn-outline-warning text-light">Details</a>
            </div>
        </div>
    )
}

export default MoviesGrid
