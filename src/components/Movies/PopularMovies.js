import React, {useEffect, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import MoviesGrid from './MoviesGrid'
import PaginationMovies from './PaginationMovies'
import Header from '../Header';                    
import Title from '../Title';                    
import {getMovies} from '../../actions/moviesActions'




const PopularMovies = () => {

    const popular = 'popular' 

    const {moviesPopular, loading} = useSelector(state => ({
        moviesPopular: state.movies.moviesPopular,
        loading: state.movies.loading
    }))

    const dispatch = useDispatch()
    
    useEffect(() => {   
        dispatch(getMovies(popular))   
      
        //eslint-disable-next-line   
    }, []) 

    if(loading || !moviesPopular)return <h2>Loading...</h2>


    return(
        <Fragment>
            <Header />
            {/* TITLE */}
            <Title titleName='Popular Movies' />
            {/* TITLE */}
        {/* GRID     */} 
        <section className="container p-sm-3 mb-4">
            <div className="container ">
                <div className="row justify-content-center " >                 
                {                            
                    !loading &&  moviesPopular.map( movie => 
                    <MoviesGrid key={movie.id} 
                    movieID={movie.id} posterPath={movie.poster_path} title={movie.title}/> ) 
                }
                </div>
            </div>  
        </section>
        {/* GRID  */} 
        <PaginationMovies popular={popular} />
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
