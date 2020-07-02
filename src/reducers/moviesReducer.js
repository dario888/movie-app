import {GET_POPULAR_MOVIES, LOADING, SEARCH_MOVIE} from '../types'

const initState = {
    moviesPopular: [],
    loading: false,
    searchTerm: '',
    searchMovie: null

}


export default (state=initState, action) => {

    switch ( action.type) {

        case GET_POPULAR_MOVIES:
            return{
                ...state,
                moviesPopular: action.payload,
                loading: false
            }
            
            case SEARCH_MOVIE:
                return{
                    ...state,
                    searchMovie: action.payload,
                    loading: false
                    
                }
                
                case LOADING:
                    return{
                        ...state,
                        loading: true
        
                    }
            
    
        default:
            return state;
    }
}