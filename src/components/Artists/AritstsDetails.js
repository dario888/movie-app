import React, {Fragment} from 'react'
import { useSelector } from 'react-redux';
import  {useHistory} from 'react-router-dom'
import Spinner from '../../Spinner';  



const AritstsDetails = () => {

    const {artistDetails, artistsLoading} = useSelector(state => ({
        artistDetails: state.artists.artistDetails,
        artistsLoading: state.artists.artistsLoading

    }))
    
    
    const history = useHistory();
    const goBackHistory = () => history.goBack()
    
    if(artistsLoading || !artistDetails)return <Spinner />
    
    const {name, birthday, popularity, biography, place_of_birth} = artistDetails
    
     

    return (
        <Fragment>
        <div className="container-fluid artistDetails p-3">       
            <div className="container text-center pt-5">
                <h1 className="artistTitle mb-4 ">{name}</h1>
                <div className="col-sm-12 col-md-8 mx-auto mb-4">
                    <p className="mb-1">Date of birth: {birthday}</p>
                    <p className="mb-1">Place of birth: {place_of_birth}</p>
                    <p className="mb-3">Rating: {popularity.toFixed(2)} </p>
                    <p className="mb-1">Biography: {biography} </p>
                </div>     

                <div className="row" >                 
                    <button className="goBackBtn mx-auto" onClick={goBackHistory}>
                        Go Back
                    </button>                
                </div>
            </div>
                        
        </div>  
        </Fragment>
 
    )
}

export default AritstsDetails
