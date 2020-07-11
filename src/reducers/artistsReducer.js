import {LOADING_ARTISTS, GET_ARTISTS, SET_ARTIST_DETAILS, SEARCH_ARTST, SEARCH_ARTIST_TERM} from '../types'

const initState = {
    artistsList: [],
    searchArtist: [],
    searchTerm: '',
    totalSearchResults: null,
    artistsLoading: false,
    artistDetails: null
}


export default (state=initState, action) => {

    switch ( action.type) {
        
        case GET_ARTISTS:
            return{
                ...state,
                artistsList:  action.payload.results,
                artistsLoading: false
                
            }

        case SEARCH_ARTST:
            return{
                ...state,
                searchArtist:  action.payload.results,
                totalSearchResults:  action.payload.total_results,
                artistsLoading: false
                
            }

        case SET_ARTIST_DETAILS:
            return{
                ...state,
                artistDetails: action.payload,
                artistsLoading: false
                
            }

            case SEARCH_ARTIST_TERM:
                return{
                    ...state,
                    searchTerm: action.payload       
                }
          
                case LOADING_ARTISTS:
                return{
                    ...state,
                    artistsLoading: true       
                }
            
    
        default:
            return state;
    }
}