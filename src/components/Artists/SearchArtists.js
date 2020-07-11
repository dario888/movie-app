import React, {Fragment} from 'react';  
import { useSelector } from 'react-redux';

import HeaderArtist from './HeaderArtist';      
import PaginationSearchArtist from './PaginationSearchArtist';      
import Title from '../Title';    
import ArtistsGrid from './ArtistsGrid'




const SearchArtists = () => {
    const {searchArtist, artistsLoading} = useSelector(state => ({
        searchArtist: state.artists.searchArtist,
        artistsLoading: state.artists.artistsLoading,
    
    }))
    
        if(artistsLoading || !searchArtist)return <h2>Loading...</h2>
    
        return (
            <Fragment>
                <HeaderArtist />
                <Title titleName='Search Artists' titleBg='dark' textColor='success' />
                <section className="container p-sm-4 ">
                <div className="container">
                    <div className="row justify-content-center" >                 
                    {
                        !artistsLoading &&  searchArtist.map( artist =>
                        <ArtistsGrid key={artist.id} 
                        artistID={artist.id} profilePath={artist.profile_path} 
                        artistName={artist.name} artistMovies={artist.known_for}/> )
    
                    }
                    </div>
                </div> 
            </section> 
            <PaginationSearchArtist/>
            </Fragment>
        )
}

export default SearchArtists
