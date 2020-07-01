import {GET_POPULAR_MOVIES, LOADING} from '../types'
import axios from 'axios';




const apiKey = process.env.REACT_APP_KEY

export const setLoading = () => ({type: LOADING})

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

