import React from 'react'
import  {useHistory} from 'react-router-dom'
import { artistSearch, setArtistSearchTerm} from '../../actions/artistsAction'
import { useDispatch, useSelector } from 'react-redux';




const SearchBarArtist = () => {
    const dispatch = useDispatch()

    const history = useHistory();

    const {searchTerm} = useSelector((state) => ({ searchTerm: state.artists.searchTerm }) )

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(artistSearch(searchTerm))
        history.push('/search_artist')
    }

    const handleChange = (e) =>dispatch(setArtistSearchTerm(e.target.value));
 

    return (
        <div className="container-sm searchBarArtist mb-4">
            <form className="form-inline" onSubmit={handleSubmit}>
                <div className="input-group mx-auto col-sm-11">
                    <input type="text" className="form-control bgInputArtists " onChange={handleChange} required placeholder="Search Artist"/>                                     
                    <div className="input-group-append">
                        <button type="submit" className="customBtn btnSearchArtist">
                            Search
                        </button>
                    </div>
                </div>
            </form>                 
        </div>
    )
}

export default SearchBarArtist
