import {LOADING_GENRES, GENRES} from '../types'
import axios from 'axios'

const apiKey = process.env.REACT_APP_KEY
const apiURL = 'https://api.themoviedb.org/3'

//Fetching genres
export const getGenres = (movieID) => async(dispatch) =>{
    
    try {
        setLoading();
       const res = await axios(`${apiURL}/genre/movie/list?api_key=${apiKey}&language=en-US`)
       dispatch({type: GENRES, payload: res.data.genres })
    //    console.log(res.data.genres); //[{}, {}]

    } catch (error) {
        console.log(error);
    }
} 

// export const setMoviesDB = (pageNumber=1) => async(dispatch) =>{
   
//     try {
//         setLoading(); 
//         const res = await axios(`${apiURL}/movie/popular?api_key=${apiKey}&language=en-US&page=${pageNumber}`)
//         dispatch({type: GET_MOVIESDB, payload: res.data})
//     //    console.log(res.data); //[{},{}]   

//     } catch (error) {
//         console.log(error);
//     }
// } 

//SET LOADING
export const setLoading = () => ({type: LOADING_GENRES})