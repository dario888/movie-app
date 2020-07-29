import React, {useEffect, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import  { useParams} from 'react-router-dom'

import MoviesGrid from './MoviesGrid'
import PaginationMovies from './PaginationMovies'
import Spinner from '../../Spinner';         
import Header from '../Header';         

import {getMovies} from '../../actions/moviesActions'



const TopRatedMovies = () => {
    const topRated = 'top_rated'
    const titleName = 'Top Rated'
    const bgColorTopRated = 'bgColorTopRated'
   


   
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

    if(loading || !moviesTopRated.length)return <Spinner/>


    return(
        <Fragment>
            <Header titleName={titleName} headerBg={bgColorTopRated} />
        {/* GRID     */} 
        <section className="container-fluid py-4 bgTopRated">
            <div className="gridRow justify-content-center" >                 
            {                            
                !loading &&  moviesTopRated.map( movie => 
                <MoviesGrid key={movie.id} 
                movieID={movie.id} posterPath={movie.poster_path} title={movie.title}/> ) 
            }
            </div>
            <PaginationMovies num={num} page={topRated} />
        </section>
       
        </Fragment>
  
    )
}

export default TopRatedMovies
