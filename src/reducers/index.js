import {combineReducers} from 'redux'
import moviesReducer from './moviesReducer'
import genresReducer from './genresReducer'
import artistsReducer from './artistsReducer'



export default combineReducers({
    movies: moviesReducer,
    genres: genresReducer,
    artists: artistsReducer

})