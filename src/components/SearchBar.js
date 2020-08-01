import React from 'react'
import  {useHistory} from 'react-router-dom'
import { searchMovies, setSearchTerm} from '../actions/moviesActions'
import { useDispatch, useSelector } from 'react-redux';




const SearchBar = ({btnSearchBg}) => {

    const dispatch = useDispatch()

    // SET SEARCHMOVIES IN REDUCER
    const history = useHistory();

    
  const {searchTerm} = useSelector((state) => ({ searchTerm: state.movies.searchTerm }) )

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchMovies(searchTerm))
        history.push('/search_movies')
    }

    const handleChange = (e) =>dispatch(setSearchTerm(e.target.value));
    // setSearchTerm(e.target.value)

    return (
        <div className="container-sm searchBar">         
            <form className="form-inline" onSubmit={handleSubmit}>
                <div className="input-group mx-auto col-sm-11">
                    <input type="text" className="form-control bgInput" onChange={handleChange} 
                    required placeholder="Search Movie"/>                                     
                    <div className="input-group-append">
                        <button type="submit" className={`customBtn btnSearch`}>
                            Search
                        </button>
                    </div>
                </div>
            </form>                  
        </div>
    )
}

export default SearchBar
