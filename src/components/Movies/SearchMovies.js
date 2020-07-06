import React, {Fragment} from 'react';  
import { connect } from 'react-redux';

import Header from '../Header';   
import Title from '../Title';    
import MoviesGrid from './MoviesGrid'




const SearchMovies = ({searchMovie, loading}) => {

    if(loading || !searchMovie)return <h2>Loading...</h2>

    return (
        <Fragment>
            <Header />
            <Title titleName='Search Movies' />
            <section className="container p-sm-4 ">
            <div className="container">
                <div className="row justify-content-center" >                 
                {
                    !loading &&  searchMovie.map( movie =>
                    <MoviesGrid key={movie.id} 
                    movieID={movie.id} posterPath={movie.poster_path} title={movie.title}/> )

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
