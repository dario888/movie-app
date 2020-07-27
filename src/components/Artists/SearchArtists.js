import React, {Fragment, useEffect} from 'react';  
import { useSelector, useDispatch } from 'react-redux';
import  { useParams} from 'react-router-dom'

import PaginationSearchArtist from './PaginationSearchArtist';       
import SearchBarArtist from './SearchBarArtist';      
import ArtistsGrid from './ArtistsGrid'
import { artistSearch } from '../../actions/artistsAction'




const SearchArtists = () => {
    const {searchArtist, artistsLoading, searchTerm} = useSelector(state => ({
        searchArtist: state.artists.searchArtist,
        searchTerm: state.artists.searchTerm,
        artistsLoading: state.artists.artistsLoading,
    
    }))

    const dispatch = useDispatch();
    
    let {num} = useParams();
    num = !num ? 1 : Number.parseInt(num)

    // ComponentDidUpdate when currentPage is change
    useEffect(() => {
        dispatch(artistSearch(searchTerm, num))

    //eslint-disable-next-line  
    }, [num])
    
    if(artistsLoading || !searchArtist)return <h2>Loading...</h2>
    
    return (
        <Fragment>
            <section className="container-fluid py-4 bgSearchArtist">
            <SearchBarArtist />
            <div className="container mt-5">
                <div className="row justify-content-center" >                 
                {
                    !artistsLoading &&  searchArtist.map( artist =>
                    <ArtistsGrid key={artist.id} 
                    artistID={artist.id} profilePath={artist.profile_path} 
                    artistName={artist.name} artistMovies={artist.known_for}/> )

                }
                </div>
            </div> 
        <PaginationSearchArtist num={num} />
        </section> 
        </Fragment>
    )
}

export default SearchArtists
