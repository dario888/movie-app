import {GET_POPULAR_MOVIES, LOADING, SEARCH_MOVIE} from '../types'
import axios from 'axios';




const apiKey = process.env.REACT_APP_KEY


//GET POPULAR MOVIES
export const getPopularMovies = () => async(dispatch) =>{
    
    try {
        setLoading();
       const res = await axios(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=1`)
        // console.log(res.data.results); //[{},{}]
        dispatch({type: GET_POPULAR_MOVIES, payload: res.data.results })

    } catch (error) {
        console.log(error);
    }
} 

//SEARCHING MOVIES AND SHOWS
export const searchMovies = (searchTerm) => async(dispatch) =>{
    
    try {
        setLoading();
       const res = await axios(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchTerm}`)
        // console.log(res.data.results); //[{},{}]
        dispatch({type: SEARCH_MOVIE, payload: res.data.results })

    } catch (error) {
        console.log(error);
    }
} 

//SET LOADING
export const setLoading = () => ({type: LOADING})





