import React, {Fragment, useEffect} from 'react';  
import { useSelector, useDispatch } from 'react-redux';
import  { useParams} from 'react-router-dom'

import PaginationSearch from './PaginationSearch'
import Spinner from '../../Spinner'  
import SearchBar from '../SearchBar';    
import MoviesGrid from './MoviesGrid'
import { searchMovies } from '../../actions/moviesActions'



const SearchMovies = () => {

   const {searchMovie, loading, searchTerm} = useSelector(state => ({
    searchMovie: state.movies.searchMovie,
    searchTerm: state.movies.searchTerm,
    loading: state.movies.loading,

    }))

    const dispatch = useDispatch();

    let {num} = useParams();
    num = !num ?  1 : Number.parseInt(num)

    // ComponentDidUpdate when currentPage is change
    useEffect(() => {
        dispatch(searchMovies(searchTerm, num))

    //eslint-disable-next-line  
    }, [num])

    if(loading || !searchMovie)return <Spinner />

    return (
        <Fragment>
            <section className="container-fliud py-4 bgSearchMovie">
            <SearchBar /> 
            <div className="gridRow justify-content-center mt-5" >                 
            {
                !loading &&  searchMovie.map( movie =>
                <MoviesGrid key={movie.id} 
                movieID={movie.id} posterPath={movie.poster_path} title={movie.title}/> )

            }
            </div>
        <PaginationSearch num={num}/>
        </section> 
        </Fragment>
    )
}

export default SearchMovies
// const mapStateToProps = state => ({
//     searchMovie: state.movies.searchMovie,
//     loading: state.movies.loading,

// });


// export default connect(mapStateToProps)(SearchMovies)
