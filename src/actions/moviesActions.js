import {GET_POPULAR_MOVIES, LOADING, SEARCH_MOVIE, SET_MOVIE_DETAILS, 
 ADD_LIST_ITEMS, REMOVE_LIST_ITEMS, CLEAR_LIST, GET_TOP_RATED_MOVIES, 
 GET_UPCOMING_MOVIES, SEARCH_TERM} from '../types'
import axios from 'axios';




const apiKey = process.env.REACT_APP_KEY
const apiURL = 'https://api.themoviedb.org/3'

//GET POPULAR MOVIES
export const getMovies = (movieList, pageNumber=1) => async(dispatch) =>{
    let res;
    try {
        setLoading(); 

        if(movieList === 'popular'){
            res = await axios(`${apiURL}/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
            dispatch({type: GET_POPULAR_MOVIES, payload: res.data})
        //    console.log(res.data); //[{},{}]
        }

        if(movieList === 'top_rated'){
            res = await axios(`${apiURL}/movie/top_rated?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
            dispatch({type: GET_TOP_RATED_MOVIES, payload: res.data})
        //    console.log(res.data); //[{},{}]
        }

        if(movieList === 'upcoming'){
            res = await axios(`${apiURL}/movie/upcoming?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
            dispatch({type: GET_UPCOMING_MOVIES, payload: res.data})
        //    console.log(res.data); //[{},{}]
        }

    } catch (error) {
        console.log(error);
    }
} 

//SEARCHING MOVIES AND SHOWS
export const searchMovies = (searchTerm, pageNumber=1) => async(dispatch) =>{
    
    try {
        setLoading(); 
       const res = await axios(`${apiURL}/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}&page=${pageNumber}`)
       dispatch({type: SEARCH_MOVIE, payload: res.data })
    //    console.log(res.data); //[{},{}]

    } catch (error) {
        console.log(error);
    }
} 

//SETING MOVIE DETAILS
export const movieDetails = (movieID) => async(dispatch) =>{
    
    try {
        setLoading();
       const res = await axios(`${apiURL}/movie/${movieID}?api_key=${apiKey}&language=en-US`)
       dispatch({type: SET_MOVIE_DETAILS, payload: res.data })
    //    console.log(res.data); //{}

    } catch (error) {
        console.log(error);
    }
} 

//SET LOADING
export const setLoading = () => ({type: LOADING})

export const setSearchTerm = (searchTerm) => ({type: SEARCH_TERM, payload: searchTerm})


//ADD MOVIE TO LOCAL STORAGE
export const addListItems = (itemObj) => ({
    type: ADD_LIST_ITEMS, 
    payload: itemObj

}) 

//REMOVE LIST ITEM
export const removeListItems = (Id) => ({ type: REMOVE_LIST_ITEMS, payload: Id }) 

//CLEAR LIST
export const clearList = () => ({ type: CLEAR_LIST }) 










