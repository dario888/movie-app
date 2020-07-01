import {GET_POPULAR_MOVIES, LOADING} from '../types'

const initState = {
    moviesPopular: [],
    loading: false
}


export default (state=initState, action) => {

    switch ( action.type) {

        case GET_POPULAR_MOVIES:
            return{
                ...state,
                moviesPopular: action.payload,
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