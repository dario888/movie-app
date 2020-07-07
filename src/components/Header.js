import React, {useState} from 'react'
import  {useHistory} from 'react-router-dom'
import { searchMovies} from '../actions/moviesActions'
import { useDispatch } from 'react-redux';




const Header = () => {

    const dispatch = useDispatch()

    // SET SEARCHMOVIES IN REDUCER
    const history = useHistory();
    // console.log(history);
    const [searchTerm, setSearchTerm] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchMovies(searchTerm))
        history.replace('/search_movies')
    }

    const handleChange = (e) =>setSearchTerm(e.target.value);
    // setSearchTerm(e.target.value)

    return (
        <section className="container p-sm-4 ">
            <div className="my-3">
                <form className="form-inline" onSubmit={handleSubmit}>
                    <div className="input-group m-auto col-sm-8">
                        <input type="text" className="form-control " onChange={handleChange} required placeholder="Search Movie"/>                                     
                        <div className="input-group-append">
                            <button type="submit" className="input-group-text btn btn-primary text-warning ">Search</button>
                        </div>
                    </div>
                </form>          
            </div> 
        </section>
    )
}

export default Header
