import { RECEIVE_CURRENT_USER,
        LOGOUT_CURRENT_USER,} from '../actions/session_actions'


const sessionsReducer = (preloadedState = {id: null}, action) => {


    switch(action.type){
        case RECEIVE_CURRENT_USER:
            
            return Object.assign({}, {id: action.currentUser.id})
        case LOGOUT_CURRENT_USER:
            
            return { id: null }
        default: 
            return preloadedState  
    }
}

export default sessionsReducer;