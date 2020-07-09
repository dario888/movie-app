import React, {useEffect, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import MoviesGrid from './MoviesGrid'
import PaginationMovies from './PaginationMovies'
import Header from '../Header';                    
import Title from '../Title';                    
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

    if(loading || !moviesTopRated)return <h2>Loading...</h2>


    return(
        <Fragment>
            <Header />
            {/* TITLE */}
            <Title titleName='Top Rated Movies' titleBg='danger'/>
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
        <PaginationMovies topRated={topRated} />
        </Fragment>
  
    )
}

export default TopRatedMovies
