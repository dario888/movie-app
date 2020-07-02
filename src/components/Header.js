import React, {useState} from 'react'
import { searchMovies} from '../actions/moviesActions'
import { connect } from 'react-redux';





const Header = ({ searchMovies }) => {
    // SET SEARCHMOVIES IN REDUCER

    const [searchTerm, setSearchTerm] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()
        searchMovies(searchTerm)
        
    }

    const handleChange = (e) =>setSearchTerm(e.target.value);
    // setSearchTerm(e.target.value)

    return (
        <section className="container p-sm-4 ">
            <div className="mb-5">
                <form className="form-inline" onSubmit={handleSubmit}>
                    <div className="input-group m-auto col-sm-8">
                        <input type="text" className="form-control" onChange={handleChange} required placeholder="Search Movie"/>                                     
                        <div className="input-group-append">
                            <button type="submit" className="input-group-text btn btn-primary text-warning ">Search</button>
                        </div>
                    </div>
                </form>          
            </div> 
        </section>
    )
}

export default connect(null, {searchMovies})(Header)
