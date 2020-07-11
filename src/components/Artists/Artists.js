import React, {useEffect, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';

import ArtistsGrid from './ArtistsGrid'
import PaginationArtists from './PaginationArtists'
import HeaderArtist from './HeaderArtist';                    
import Title from '../Title';                    
import {getArtists} from '../../actions/artistsAction'




const Artists = () => {

    const {artistsList, artistsLoading} = useSelector(state => ({
        artistsList: state.artists.artistsList,
        artistsLoading: state.artists.artistsLoading
    }))

    const dispatch = useDispatch()
    
    useEffect(() => {   
        dispatch(getArtists())   
      
        //eslint-disable-next-line   
    }, []) 

    if(artistsLoading || !artistsList)return <h2>Loading...</h2>


    return(
        <Fragment>
            <HeaderArtist />
            {/* TITLE */}
            <Title titleName='Popular Artists' titleBg='success' textColor='light'/>
            {/* TITLE */}
        {/* GRID     */} 
        <section className="container p-sm-3 mb-4">
            <div className="container ">
                <div className="row justify-content-center " >   
                {                                      
                    !artistsLoading && artistsList.map( artist => 
                    <ArtistsGrid key={artist.id} 
                    artistID={artist.id} profilePath={artist.profile_path} 
                    artistName={artist.name} artistMovies={artist.known_for} /> ) 
                }
                </div>
            </div>  
        </section>
        {/* GRID  */} 
        <PaginationArtists/>
        </Fragment>
  
    )
}

export default Artists
