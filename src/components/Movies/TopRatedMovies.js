import React, {useEffect, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import  { useParams} from 'react-router-dom'

import MoviesGrid from './MoviesGrid'
import PaginationMovies from './PaginationMovies'
// import SearchBar from '../SearchBar';                    
// import Title from '../Title';         
import Header from '../Header';         

import {getMovies} from '../../actions/moviesActions'



const TopRatedMovies = () => {
    const topRated = 'top_rated'
   
    const {moviesTopRated, loading} = useSelector(state => ({
        moviesTopRated: state.movies.moviesTopRated,
        loading: state.movies.loading
    }))

    const dispatch = useDispatch()
    
    useEffect(() => {   
        dispatch(getMovies(topRated))   
      
        //eslint-disable-next-line   
    }, []) 

    // console.log('TopRatedMovies MOVIES');
    //converting string param into number
    let {num} = useParams();
    num = !num ? 1 : Number.parseInt(num)

    // ComponentDidUpdate when currentPage is change
    useEffect(() => {
        dispatch(getMovies(topRated, num));

        //eslint-disable-next-line  
    }, [num])

    if(loading || !moviesTopRated)return <h2>Loading...</h2>


    return(
        <Fragment>
            <Header titleName='Top Rated Movies' headerBg='danger' btnSearchBg='btnTopRated' />
            {/* <SearchBar /> */}
            {/* TITLE */}
            {/* <Title titleName='Top Rated Movies' titleBg='danger'/> */}
            {/* TITLE */}
        {/* GRID     */} 
        <section className="container p-sm-3 mb-4">
            <div className="container ">
                <div className="row justify-content-center " >                 
                {                            
                    !loading &&  moviesTopRated.map( movie => 
                    <MoviesGrid key={movie.id} 
                    movieID={movie.id} posterPath={movie.poster_path} title={movie.title}/> ) 
                }
                </div>
            </div>  
        </section>
        {/* GRID  */} 
        <PaginationMovies num={num} page={topRated} />
        </Fragment>
  
    )
}

export default TopRatedMovies
