import {LOADING_ARTISTS, GET_ARTISTS, SET_ARTIST_DETAILS, SEARCH_ARTST, SEARCH_ARTIST_TERM,} from '../types'
import axios from 'axios'




export const getArtists = (pageNumber=1) => async(dispatch) =>{
    
    try {
        setArtistLoading();
    //    const res = await axios(`${apiURL}/person/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
       const res = await axios(`/api/artists/${pageNumber}`)
       dispatch({type: GET_ARTISTS, payload: res.data }) 

    } catch (error) {
        console.log(error);
    }
} 

export const artistSearch = (searchTerm, pageNumber=1) => async(dispatch) =>{
    
    try {
        setArtistLoading(); 
    //    const res = await axios(`${apiURL}/search/person?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=${pageNumber}`)
       const res = await axios(`/api/search_artist/${searchTerm}/${pageNumber}`)
       dispatch({type: SEARCH_ARTST, payload: res.data })

    } catch (error) {
        console.log(error);
    }
} 

//SETING ARTIST DETAILS
export const artistDetails = (artistID) => async(dispatch) =>{
    
    try {
        setArtistLoading();
    //    const res = await axios(`${apiURL}/person/${artistID}?api_key=${apiKey}&language=en-US`)
       const res = await axios(`/api/artist_details/${artistID}`)
       dispatch({type: SET_ARTIST_DETAILS, payload: res.data })

    } catch (error) {
        console.log(error);
    }
} 

//SET LOADING
export const setArtistLoading = () => ({type: LOADING_ARTISTS})

export const setArtistSearchTerm = (searchTerm) => ({type: SEARCH_ARTIST_TERM, payload: searchTerm})

