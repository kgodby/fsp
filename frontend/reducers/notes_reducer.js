import {RECEIVE_NOTE, RECEIVE_NOTES} from '../actions/note_actions'


const notesReducer = (preloadedState ={}, action) => {
    const newState = Object.assign({}, preloadedState)
    switch(action.type){
        case RECEIVE_NOTE:
            return Object.assign(newState, {[action.note.id]: action.note})
        case RECEIVE_NOTES:
            return action.notes
        default:
            return preloadedState
    }
}

export default notesReducer;