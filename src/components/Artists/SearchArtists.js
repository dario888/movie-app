import React, {Fragment, useEffect} from 'react';  
import { useSelector, useDispatch } from 'react-redux';
import  { useParams} from 'react-router-dom'

import PaginationSearchArtist from './PaginationSearchArtist';      
import HeaderArtist from './HeaderArtist';      
// import Title from '../Title';     
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
            <HeaderArtist titleName='Search Artists'  textColor='success' />
            {/* <Title titleName='Search Artists' titleBg='info' textColor='success' /> */}
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
        <PaginationSearchArtist num={num} />
        </Fragment>
    )
}

export default SearchArtists
