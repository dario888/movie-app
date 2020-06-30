

const initState = {
    movies: []
}


export default (state=initState, action) => {

    switch ( action.type) {

        case 'GET_MOVIES':
            return{
                ...state
            }
            
    
        default:
            return state;
    }
}