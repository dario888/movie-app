import {GET_POPULAR_MOVIES, LOADING, SEARCH_MOVIE, SET_MOVIE_DETAILS} from '../types'

const initState = {
    moviesPopular: [],
    loading: false,
    searchTerm: '',
    searchMovie: null,
    totalResults: 0, 
    details: null

}


export default (state=initState, action) => {

    switch ( action.type) {

        case GET_POPULAR_MOVIES:
            return{
                ...state,
                moviesPopular: action.payload.results,
                totalResults: action.payload.total_results,
                loading: false
            }
            
            case SEARCH_MOVIE:
                return{
                    ...state,
                    searchMovie: action.payload.results,
                    totalResults: action.payload.total_results,
                    loading: false
                    
                }
                
                case LOADING:
                    return{
                        ...state,
                        loading: true       
                    }
              
                case SET_MOVIE_DETAILS:
                    return{
                        ...state,
                        details: action.payload,
                        loading: false      
                    }
              
    
            default:
            return state;
    }
}