import React, {useEffect, useState, Fragment} from 'react'
import {useDispatch, useSelector } from 'react-redux'
import {getGenres} from '../../actions/genresActions'
import Title from '../Title'; 
import MoviesGrid from '../Movies/MoviesGrid'; 
import PaginationGenres from './PaginationGenres'
import Spinner from '../../Spinner';       
import data from '../../data.json'; 




const Genres = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const {genreMoviesDB} = data;

    const [genreID, setGenreID] = useState(null)
    const dispatch = useDispatch();


    useEffect(() => {
        dispatch(getGenres())
        
        //eslint-disable-next-line
    }, [])

    const {genresList, genresLoading} = useSelector((state) => ({
        genresList: state.genres.genresList, 
        genresLoading: state.genres.genresLoading

    }))

    const filteredMovies = genreMoviesDB.filter( (movie) => movie.genre_ids.includes(genreID) )

    // Get current posts
    const postsPerPage = 10
    const indexOfLastMovie = currentPage * postsPerPage;
    const indexOfFirstMove = indexOfLastMovie - postsPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstMove, indexOfLastMovie);

    if(genresLoading || !genresList.length)return <Spinner />

    const height100 = genreID && 'height-100'; 


    return (
        <Fragment>
            <div className="container-fluid genres" >
                <Title titleName='Genres' textColor='genreTitle'/>  
                <div className=" row justify-content-start ">                    
                    <ul className="navList py-sm-3">
                        {
                            genresList.map(genre => {
                                let active = genreID === genre.id ? 'active' : ''
                                return (
                                    <li className="nav-item p-1 " key={genre.id}>
                                        <button  className={`genreLink p-1 ${active}`} 
                                        onClick={() => setGenreID(genre.id)} >
                                        {genre.name}
                                        </button>
                                    </li>
                                )
                            } )
                        } 
                    </ul> 
                </div>
            </div> 
           
            <div className={`container-fluid mainGrid ${height100}`}>
                <div className="row justify-content-center pt-5 mx-3">
                        {
                            genreID && currentMovies.map( movie =>
                                <MoviesGrid key={movie.id} 
                                movieID={movie.id} posterPath={movie.poster_path} title={movie.title}/>
                            )
                            
                        }
                </div> 
                <PaginationGenres totalMovies={filteredMovies.length} filteredMovies={filteredMovies}
                setCurrentPage={setCurrentPage} currentPage={currentPage}/>
            </div>

           
        </Fragment>
    )
}

export default Genres

// paginate={paginate} currentPage={currentPage}
