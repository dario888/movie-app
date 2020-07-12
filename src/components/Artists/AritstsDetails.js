import React, {Fragment} from 'react'
import { useSelector } from 'react-redux';
import  {useHistory} from 'react-router-dom'
import Title from '../Title';   

const AritstsDetails = () => {
    const {artistDetails, artistsLoading} = useSelector(state => ({
        artistDetails: state.artists.artistDetails,
        artistsLoading: state.artists.artistsLoading

    }))
    

    const history = useHistory();
    // console.log(history);
    const goBackHistory = () => history.goBack()
    
    const urlImage = process.env.REACT_APP_IMG;

    
    if(artistsLoading || !artistDetails)return <h2>Loading...</h2>

    const {name, birthday, popularity, biography, place_of_birth, profile_path} = artistDetails

    // const addMovie = title => 

    return (
        <Fragment>
        <Title titleName='Details' titleBg='primary' />
        <div className="container p-sm-3 mb-4">
            <div className="row btn btn-warning mb-3" >                 
                <i className="fas fa-arrow-left"></i>
                <span className="text-dark font-weight-bold ml-2" onClick={goBackHistory}>
                    Go Back
                </span>                
            </div>
        
            <div className="container mb-3">
                <div className="row mb-4">
                    <img src={`${urlImage}/w500/${profile_path}`} className="m-auto" 
                    style={{ width: "200px",  height: 320 }} alt="poster" />
                </div>
                <div className="col-sm-12 col-md-8 mx-auto mb-3">
                    <p className="text-center mb-1">Name: {name}</p>
                    <p className="text-center mb-1">Date of birth: {birthday}</p>
                    <p className="text-center mb-1">Place of birth: {place_of_birth}</p>
                    <p className="text-center mb-1">Rating: {popularity.toFixed(2)} </p>
                    <p className="text-center mb-1">Biography: {biography} </p>
                </div>     
            </div>
                        
        </div>  
        </Fragment>
 
    )
}

export default AritstsDetails
