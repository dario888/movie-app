

const initState = {
    tvshows: []
}


export default (state=initState, action) => {

    switch ( action.type) {
        
        case 'GET_TVSHOWS':
            return{
                ...state
            }
            
    
        default:
            return state;
    }
}