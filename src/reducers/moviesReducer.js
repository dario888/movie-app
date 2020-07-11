import {GET_POPULAR_MOVIES, LOADING, SEARCH_MOVIE, SET_MOVIE_DETAILS, ADD_LIST_ITEMS, 
REMOVE_LIST_ITEMS, CLEAR_LIST,  GET_TOP_RATED_MOVIES, GET_UPCOMING_MOVIES, SEARCH_TERM} from '../types'


const initState = {
    moviesPopular: [],
    moviesTopRated: [],
    moviesUpcoming: [],
    loading: false,
    searchTerm: '',
    searchMovie: null,
    totalSearchResults: 0,
    details: null, //{}
    listItems: JSON.parse(localStorage.getItem('listItems')) || []

}


export default (state=initState, action) => {

    switch ( action.type) {

        case GET_POPULAR_MOVIES:
            return{
                ...state,
                moviesPopular: action.payload.results,
                loading: false
            }
            
        case GET_TOP_RATED_MOVIES:
            return{
                ...state,
                moviesTopRated: action.payload.results,
                loading: false
            }           

        case GET_UPCOMING_MOVIES:
            return{
                ...state,
                moviesUpcoming: action.payload.results,
                loading: false
            }
            
            case SEARCH_MOVIE:
                return{
                    ...state,
                    searchMovie: action.payload.results,
                    totalSearchResults: action.payload.total_results,
                    loading: false
                    
                }
                
                case SEARCH_TERM:
                    return{
                        ...state,
                        searchTerm: action.payload       
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

                case ADD_LIST_ITEMS:
                    return{
                        ...state,
                        listItems: [...state.listItems, action.payload]
                            
                    }

                case REMOVE_LIST_ITEMS:
                    return{
                        ...state,
                        listItems: state.listItems.filter(item => item.id !== action.payload)
                            
                    }    

                case CLEAR_LIST:
                    return{
                        ...state,
                        listItems: []
                            
                    }              
    
            default:
            return state;
    }
}

