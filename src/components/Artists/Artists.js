import React, {useEffect, Fragment} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import  { useParams} from 'react-router-dom'

import ArtistsGrid from './ArtistsGrid'
import PaginationArtists from './PaginationArtists'                 
// import Title from '../Title';                    
import HeaderArtist from './HeaderArtist';                    
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

  //converting string param into number
  let {num} = useParams();
  num = !num ? 1 : Number.parseInt(num)

    // ComponentDidUpdate when currentPage is change
  useEffect(() => {
    dispatch(getArtists(num));

    //eslint-disable-next-line  
  }, [num])

    if(artistsLoading || !artistsList)return <h2>Loading...</h2>


    return(
        <Fragment>
            <HeaderArtist titleName='Popular Artists' textColor='success'/>
            {/* TITLE */}
            {/* <Title titleName='Popular Artists' titleBg='bg-warning' textColor='success'/> */}
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
        <PaginationArtists num={num} />
        </Fragment>
  
    )
   
}

export default Artists
