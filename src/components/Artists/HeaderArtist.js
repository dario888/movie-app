import React from 'react'
import  {useHistory} from 'react-router-dom'
import { searchArtist, setArtistSearchTerm} from '../../actions/artistsAction'
import { useDispatch, useSelector } from 'react-redux';




const Header = () => {

    const dispatch = useDispatch()

   
    const history = useHistory();

    
  const {searchTerm} = useSelector((state) => ({ searchTerm: state.artists.searchTerm }) )

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(searchArtist(searchTerm))
        history.push('/search_artist')
    }

    const handleChange = (e) =>dispatch(setArtistSearchTerm(e.target.value));
 

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
