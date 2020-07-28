import {LOADING_GENRES, GENRES} from '../types'

const initState = {
    genresList: [],
    genresLoading: false,
}


export default (state=initState, action) => {

    switch ( action.type) {

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