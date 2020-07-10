import {LOADING_GENRES, GENRES, GET_MOVIESDB} from '../types'

const initState = {
    moviesDB: [],
    genresList: [],
    genresLoading: false,
}


export default (state=initState, action) => {

    switch ( action.type) {
        
        case GET_MOVIESDB:
            return{
                ...state,
                moviesDB: [...state.moviesDB, action.payload.results],
                totalSearchResults: action.payload.total_results,
                genresLoading: false
                
            }

        case GENRES:
            return{
                ...state,
                genresList: action.payload,
                genresLoading: false
                
            }

            case LOADING_GENRES:
                return{
                    ...state,
                    genresLoading: true       
                }
            
    
        default:
            return state;
    }
}