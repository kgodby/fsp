import {RECEIVE_CURRENT_USER} from '../actions/session_actions'

const usersReducer = (preloadedState ={}, action) => {
    switch(action.type){
        case RECEIVE_CURRENT_USER:
            return Object.assign(preloadedState, {[action.currentUser.id]: action.currentUser})
        default:
            return preloadedState
    }   

}

export default usersReducer;