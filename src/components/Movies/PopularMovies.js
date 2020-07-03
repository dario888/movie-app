import React, {useEffect,Fragment} from 'react'
import { connect } from 'react-redux';

import MoviesGrid from './MoviesGrid'
import PaginationPopularMovies from './PaginationPopularMovies'
import Header from '../Header';                    
import {getPopularMovies, searchMovies} from '../../actions/moviesActions'




const PopularMovies = ({getPopularMovies, moviesPopular, loading, searchMovies}) => {


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
                    <MoviesGrid key={movie.id} posterPath={movie.poster_path} title={movie.title}/> ) 
                }
                </div>
            </div>  
        </section>
        {/* GRID  */} 
        <PaginationPopularMovies getPopularMovies={getPopularMovies} />
        </Fragment>
  
    )
}

// state --> movies --> moviesReducer {moviesPopular, loading}
const mapStateToProps = state => ({
    moviesPopular: state.movies.moviesPopular,
    loading: state.movies.loading,

});

export default connect(mapStateToProps, {getPopularMovies, searchMovies})(PopularMovies) 
