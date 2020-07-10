import React, {Fragment, useState} from 'react'
import MoviesGrid from '../Movies/MoviesGrid'
import PaginationGenres from './PaginationGenres'


const GenresList = ({genresList, newMoviesDB}) => {


    const [genreID, setGenreID] = useState(null)
    const [currentPage, setCurrentPage] = useState(1)  
 
    const postsPerPage = 10
    const filteredMovies = newMoviesDB.filter(movie => movie.genre_ids.includes(genreID)  )
  
    // Get current posts
    const indexOfLastMovie = currentPage * postsPerPage;
    const indexOfFirstMove = indexOfLastMovie - postsPerPage;
    const currentMovies = filteredMovies.slice(indexOfFirstMove, indexOfLastMovie);
    
    // Change page
  const paginate = pageNumber => setCurrentPage(pageNumber);

    return (

        <Fragment>
        
            <ul className="nav flex-column" style={{height: "200px", marginLeft: "300px" }} >
            {
                genresList.map(genre => {
                    let active = genreID === genre.id ? 'active' : ''
                    return (
                        <li className="nav-item p-2 " key={genre.id}>
                            <a href="#1" className={`nav-link genreLink p-0 ${active}`} 
                            onClick={() => setGenreID(genre.id)} >
                            {genre.name}
                            </a>
                        </li>
                    )
                } )
            } 
            </ul> 
            <div className="container p-sm-2 mb-4">
                <div className="row justify-content-center">
                {
                    genreID && currentMovies.map( movie =>
                        <MoviesGrid key={movie.id} 
                        movieID={movie.id} posterPath={movie.poster_path} title={movie.title}/>
                    )
                    
                }
            </div>
          <PaginationGenres totalMovies={filteredMovies.length} paginate={paginate} 
          currentPage={currentPage}/>

            </div>
        </Fragment>
    )
}

export default GenresList
