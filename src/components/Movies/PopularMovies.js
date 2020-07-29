import React, {useEffect, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import  { useParams} from 'react-router-dom'

import MoviesGrid from './MoviesGrid'
import PaginationMovies from './PaginationMovies'       
import Header from '../Header';       
import Spinner from '../../Spinner';       

import {getMovies} from '../../actions/moviesActions'




const PopularMovies = () => {

    const popular = 'popular' 
    const popularMovies = 'Popular Movies' 
    const bgColorPopular = 'bgColorPopular' 


    const {moviesPopular, loading} = useSelector(state => ({
        moviesPopular: state.movies.moviesPopular,
        loading: state.movies.loading
    }))
  
    const dispatch = useDispatch()
    
    useEffect(() => {   
        dispatch(getMovies(popular))   
      
        //eslint-disable-next-line   
    }, []) 

     //converting string param into number
    let {num} = useParams();
    num = !num ?  1 : Number.parseInt(num)

    // ComponentDidUpdate when currentPage is change
    useEffect(() => {
    dispatch(getMovies(popular, num));

    //eslint-disable-next-line  
  }, [num])

    if(loading || !moviesPopular.length)return <Spinner />


    return(
        <Fragment>
        <Header titleName={popularMovies} headerBg={bgColorPopular} />
        {/* GRID     */} 
        <section className="container-fluid py-4 bgPopular">
            <div className="gridRow justify-content-center" >                 
            {                            
                !loading &&  moviesPopular.map( movie => 
                <MoviesGrid key={movie.id} 
                movieID={movie.id} posterPath={movie.poster_path} title={movie.title}/> ) 
                
            }
            </div>
            <PaginationMovies num={num} page={popular}/>
        </section>
        </Fragment>
  
    )
}

export default PopularMovies

// state --> movies --> moviesReducer {moviesPopular, loading}
// const mapStateToProps = state => ({
//     moviesPopular: state.movies.moviesPopular,
//     loading: state.movies.loading,

// });

// export default connect(mapStateToProps, {getPopularMovies})(PopularMovies) 
