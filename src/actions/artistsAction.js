import {LOADING_ARTISTS, GET_ARTISTS, SET_ARTIST_DETAILS, SEARCH_ARTST, SEARCH_ARTIST_TERM,} from '../types'
import axios from 'axios'

const apiKey = process.env.REACT_APP_KEY
const apiURL = 'https://api.themoviedb.org/3'

//Fetching genres
export const getArtists = (pageNumber=1) => async(dispatch) =>{
    
    try {
        setArtistLoading();
       const res = await axios(`${apiURL}/person/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
       dispatch({type: GET_ARTISTS, payload: res.data })
    //    console.log(res.data); //[{}, {}]

    } catch (error) {
        console.log(error);
    }
} 

export const artistSearch = (searchTerm, pageNumber=1) => async(dispatch) =>{
    
    try {
        setArtistLoading(); 
       const res = await axios(`${apiURL}/search/person?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=${pageNumber}`)
       dispatch({type: SEARCH_ARTST, payload: res.data })
       console.log(res.data); //[{},{}]

    } catch (error) {
        console.log(error);
    }
} 

//SETING ARTIST DETAILS
export const artistDetails = (artistID) => async(dispatch) =>{
    
    try {
        setArtistLoading();
       const res = await axios(`https://api.themoviedb.org/3/person/${artistID}?api_key=${apiKey}&language=en-US`)
       dispatch({type: SET_ARTIST_DETAILS, payload: res.data })
    //    console.log(res.data); //{}

    } catch (error) {
        console.log(error);
    }
} 

//SET LOADING
export const setArtistLoading = () => ({type: LOADING_ARTISTS})

export const setArtistSearchTerm = (searchTerm) => ({type: SEARCH_ARTIST_TERM, payload: searchTerm})

