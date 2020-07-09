import React, {Fragment} from 'react';  
import { useSelector } from 'react-redux';

import PaginationSearch from './PaginationSearch'
import Header from '../Header';   
import Title from '../Title';    
import MoviesGrid from './MoviesGrid'




const SearchMovies = () => {

   const {searchMovie, loading} = useSelector(state => ({
    searchMovie: state.movies.searchMovie,
    loading: state.movies.loading,

}))

    if(loading || !searchMovie)return <h2>Loading...</h2>

    return (
        <Fragment>
            <Header />
            <Title titleName='Search Movies' titleBg='dark' textColor='warning' />
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
        <PaginationSearch />
        </Fragment>
    )
}

export default SearchMovies
// const mapStateToProps = state => ({
//     searchMovie: state.movies.searchMovie,
//     loading: state.movies.loading,

// });


// export default connect(mapStateToProps)(SearchMovies)
