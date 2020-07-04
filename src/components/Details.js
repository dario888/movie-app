import React from 'react'
import { connect } from 'react-redux';
import  {useHistory} from 'react-router-dom'



const Details = ({details, loading}) => {
    
    const urlImage = process.env.REACT_APP_IMG;

    const history = useHistory();

    
    const goBackHistory = () => history.goBack('/')

    return (
        
        <div className="container p-sm-3 mb-4">
            <div className="row btn" >                 
                <i className="fas fa-arrow-left"></i>
                <span className="text-dark font-weight-bold ml-2" onClick={goBackHistory}>
                    Go Back
                </span>                
            </div>
            { 
                loading || !details ? <h2>Loading...</h2> :
                <div className="container ">
                    <h1 className="text-center">{details.title}</h1>
                    <div className="row mb-4">
                        <img src={`${urlImage}/w500/${details.poster_path}`} className="m-auto" 
                        style={{ width: "250px",  height: 320 }} alt="poster" />
                    </div>
                    <div className="col-sm-12 col-md-8 mx-auto">
                        <p className="text-center mb-1">Genre: {details.genres.map(genre => genre.name).join(', ')}</p>
                        <p className="text-center mb-1">Releas Date: {details.release_date}</p>
                        <p className="text-center mb-1">Runtime: {details.runtime + ' min'}</p>
                        <p className="text-center mb-1">Rating: {details.vote_average} </p>
                        <p className="text-center mb-1">Overview: {details.overview} </p>
                    </div>
                </div >
            }
        </div>  
 
    )
}

const mapStateToProps = (state) => ({
    details: state.movies.details,
    loading: state.movies.loading
})

export default connect(mapStateToProps)(Details)
