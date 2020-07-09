import React from 'react'
import  {useHistory} from 'react-router-dom'
import { searchMovies, setSearchTerm} from '../actions/moviesActions'
import { useDispatch, useSelector } from 'react-redux';




const Header = () => {

    const dispatch = useDispatch()

    // SET SEARCHMOVIES IN REDUCER
    const history = useHistory();

    // const [searchTerm, setSearchTerm] = useState('');
    
  const {searchTerm} = useSelector((state) => ({ searchTerm: state.movies.searchTerm }) )

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchMovies(searchTerm))
        history.replace('/search_movies')
    }

    const handleChange = (e) =>dispatch(setSearchTerm(e.target.value));
    // setSearchTerm(e.target.value)

    return (
        <div className="container p-sm-4 headerForm">
            <div className="my-auto">
                <form className="form-inline" onSubmit={handleSubmit}>
                    <div className="input-group m-auto col-sm-8">
                        <input type="text" className="form-control " onChange={handleChange} required placeholder="Search Movie"/>                                     
                        <div className="input-group-append">
                            <button type="submit" className="input-group-text btn btn-primary text-warning ">Search</button>
                        </div>
                    </div>
                </form>          
            </div> 
        </div>
    )
}

export default Header
