import React, {useEffect, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import  { useParams} from 'react-router-dom'

import MoviesGrid from './MoviesGrid'
import PaginationMovies from './PaginationMovies'
import Spinner from '../../Spinner';                     
import Header from '../Header';                              
import {getMovies} from '../../actions/moviesActions'



const UpcomingMoves = () => {
    const upcoming = 'upcoming'
    const bgColorUpcoming = 'bgColorUpcoming'
    const titleName = 'Upcoming Movies'

    const {moviesUpcoming, loading} = useSelector(state => ({
        moviesUpcoming: state.movies.moviesUpcoming,
        loading: state.movies.loading
    }))

    const dispatch = useDispatch(upcoming)
    
    useEffect(() => {   
        dispatch(getMovies())   
      
        //eslint-disable-next-line   
    }, []) 

    // console.log('UpcomingMoves MOVIES');
    //converting string param into number
    let {num} = useParams();
    num = !num ? 1 : Number.parseInt(num)

    // ComponentDidUpdate when currentPage is change
    useEffect(() => {
        dispatch(getMovies(upcoming, num));

        //eslint-disable-next-line  
    }, [num])

    if(loading || !moviesUpcoming.length)return <Spinner/>


    return(
        <Fragment>
        <Header titleName={titleName} headerBg={bgColorUpcoming} />
        {/* GRID     */} 
        <section className="container-fluid py-4 bgUpcoming">
            <div className="gridRow justify-content-center" >                 
            {                            
                !loading &&  moviesUpcoming.map( movie => 
                <MoviesGrid key={movie.id} 
                movieID={movie.id} posterPath={movie.poster_path} title={movie.title}/> ) 
            }
            </div>
        <PaginationMovies num={num} page={upcoming} />
        </section>
        {/* GRID  */} 
        </Fragment>
  
    )
}

export default UpcomingMoves
