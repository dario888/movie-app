import React, {useEffect, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import MoviesGrid from './MoviesGrid'
import PaginationMovies from './PaginationMovies'
import Header from '../Header';                    
import Title from '../Title';                    
import {getMovies} from '../../actions/moviesActions'



const UpcomingMoves = () => {
    const upcoming = 'upcoming'

    const {moviesUpcoming, loading} = useSelector(state => ({
        moviesUpcoming: state.movies.moviesUpcoming,
        loading: state.movies.loading
    }))

    const dispatch = useDispatch(upcoming)
    
    useEffect(() => {   
        dispatch(getMovies())   
      
        //eslint-disable-next-line   
    }, []) 

    if(loading || !moviesUpcoming)return <h2>Loading...</h2>


    return(
        <Fragment>
            <Header />
            {/* TITLE */}
            <Title titleName='Upcoming Movies' titleBg='success'  />
            {/* TITLE */}
        {/* GRID     */} 
        <section className="container p-sm-3 mb-4">
            <div className="container ">
                <div className="row justify-content-center " >                 
                {                            
                    !loading &&  moviesUpcoming.map( movie => 
                    <MoviesGrid key={movie.id} 
                    movieID={movie.id} posterPath={movie.poster_path} title={movie.title}/> ) 
                }
                </div>
            </div>  
        </section>
        {/* GRID  */} 
        <PaginationMovies upcoming={upcoming} />
        </Fragment>
  
    )
}

export default UpcomingMoves
