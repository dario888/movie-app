import {LOADING_GENRES, GENRES} from '../types'
import axios from 'axios'




//Fetching genres
export const getGenres = (movieID) => async(dispatch) =>{
    
    try {
        setLoading();
    //    const res = await axios(`${apiURL}/genre/movie/list?api_key=${apiKey}&language=en-US`)
       const res = await axios(`/api/genres`)
       dispatch({type: GENRES, payload: res.data.genres })


    } catch (error) {
        console.log(error);
    }
} 


//SET LOADING
export const setLoading = () => ({type: LOADING_GENRES})