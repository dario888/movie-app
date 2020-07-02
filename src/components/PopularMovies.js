import React, {useEffect,Fragment} from 'react'
import { connect } from 'react-redux';


import Header from './Header';                    
import {getPopularMovies, searchMovieShows} from '../actions/moviesActions'




const PopularMovies = ({getPopularMovies, moviesPopular, loading, searchMovie}) => {
    const urlImage = process.env.REACT_APP_IMG;

    useEffect(() => {   
        getPopularMovies()  
        //eslint-disable-next-line   
    }, []) 
    
    // (searchMovie && <SearchMovies loading={loading} searchMovie={searchMovie} urlImage={urlImage}/>) ||
    if(loading || !moviesPopular)return <h2>Loading...</h2>


    return(
        <Fragment>
            <Header />
            {/* TITLE */}
            {/* TITLE */}
        {/* GRID     */} 
        <section className="container p-sm-4 ">
            <div className="container ">
                <div className="row justify-content-center " >                 
                {                            
                    !loading &&  moviesPopular.map( movie =>
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


        {/* GRID     */} 
        </Fragment>
  
    )
}

// state --> movies --> moviesReducer {moviesPopular, loading}
const mapStateToProps = state => ({
    moviesPopular: state.movies.moviesPopular,
    loading: state.movies.loading,

});

export default connect(mapStateToProps, {getPopularMovies, searchMovieShows})(PopularMovies) 
