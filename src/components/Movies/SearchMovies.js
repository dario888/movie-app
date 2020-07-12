import React, {Fragment, useEffect} from 'react';  
import { useSelector, useDispatch } from 'react-redux';
import  { useParams} from 'react-router-dom'

import PaginationSearch from './PaginationSearch'
import Header from '../Header';   
import Title from '../Title';    
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
        <PaginationSearch num={num}/>
        </Fragment>
    )
}

export default SearchMovies
// const mapStateToProps = state => ({
//     searchMovie: state.movies.searchMovie,
//     loading: state.movies.loading,

// });


// export default connect(mapStateToProps)(SearchMovies)
