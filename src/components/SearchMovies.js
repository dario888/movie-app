import React, {Fragment} from 'react';  
import { connect } from 'react-redux';
import Header from './Header';   





const SearchMovies = ({searchMovie, loading}) => {
    const urlImage = process.env.REACT_APP_IMG; 

    if(loading || !searchMovie)return <h2>Loading...</h2>

    return (
        <Fragment>
            <Header />
            <section className="container p-sm-4 ">
            <div className="container">
                <div className="row justify-content-center" >                 
                {
                    !loading &&  searchMovie.map( movie =>
                    <div className="row card m-1" style={{ width: "200px" }}  key={movie.id} >
                        <img src={`${urlImage}/w500/${movie.poster_path}`} className="card-img-top" alt="poster" />
                        <div className="card-body bg-dark">
                            <h5 className="card-title text-warning">{movie.title}</h5>
                            <a href="/" className="btn btn-outline-warning text-muted">Details</a>
                        </div>
                    </div>   

                    ) 
                }
                </div>
            </div> 
        </section> 
        </Fragment>
    )
}

const mapStateToProps = state => ({
    searchMovie: state.movies.searchMovie,
    loading: state.movies.loading,

});


export default connect(mapStateToProps)(SearchMovies)
