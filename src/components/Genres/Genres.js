import React, {useEffect, Fragment} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {getGenres, getMoviesDB} from '../../actions/genresActions'
import Title from '../Title'; 
import GenresList from './GenresList'; 



const Genres = () => {
    
    const {genresList, genresLoading, moviesDB} = useSelector((state) => ({
        genresList: state.genres.genresList, 
        moviesDB: state.genres.moviesDB, 
        genresLoading: state.genres.genresLoading

    }))
    
    // console.log(moviesDB.flat());
    const newMoviesDB = moviesDB.flat();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getGenres())
     
        dispatch(getMoviesDB())
        dispatch(getMoviesDB(2))
        dispatch(getMoviesDB(3))
        dispatch(getMoviesDB(4))
       
        //eslint-disable-next-line
    }, [])



    if(genresLoading || !genresList)return <h2>Loading...</h2>


    return (
        <Fragment>
        <Title titleName='Genres' titleBg='secondary'/>  
            <div className="container" >
                <div className="row justify-content-start">                    
                <GenresList genresList={genresList} newMoviesDB={newMoviesDB} />
                </div>
            </div>
        </Fragment>
    )
}

export default Genres
