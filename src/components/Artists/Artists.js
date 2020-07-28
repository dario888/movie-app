import React, {useEffect, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import  { useParams} from 'react-router-dom'

import ArtistsGrid from './ArtistsGrid'
import PaginationArtists from './PaginationArtists'                              
import HeaderArtist from './HeaderArtist';      
import Spinner from '../../Spinner';                    
import {getArtists} from '../../actions/artistsAction'




const Artists = () => {

    const {artistsList, artistsLoading} = useSelector(state => ({
        artistsList: state.artists.artistsList,
        artistsLoading: state.artists.artistsLoading
    }))

   
    const titleName = 'Popular Artists'
    const bgArtistsHeader = 'bgArtistsHeader'

    const dispatch = useDispatch()
    
    useEffect(() => {   
        dispatch(getArtists())   
      
        //eslint-disable-next-line   
    }, []) 

  //converting string param into number
  let {num} = useParams();
  num = !num ? 1 : Number.parseInt(num)

    // ComponentDidUpdate when currentPage is change
  useEffect(() => {
    dispatch(getArtists(num));

    //eslint-disable-next-line  
  }, [num])

    if(artistsLoading || !artistsList.length)return <Spinner/>


    return(
        <Fragment>
            <HeaderArtist titleName={titleName} textColor='success' headerBg={bgArtistsHeader}/>
        {/* GRID     */} 
        <section className="container-fluid py-4 bgArtists">
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
        <PaginationArtists num={num} />
        </section>
        {/* GRID  */} 
        </Fragment>
  
    )
   
}

export default Artists
