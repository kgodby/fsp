import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import * as SessionAction from './actions/session_actions' 
import {createNote} from './util/note_api_util'

document.addEventListener("DOMContentLoaded", () => {   
  
    let store
    if (window.currentUser){
        const preloadedState={
            entities:{
                users: {[window.currentUser.id]: window.currentUser}
            },
            session:{ id: window.currentUser.id }
        };
        
        store = configureStore(preloadedState)
        delete window.currentUser;
    
    }else{
        store = configureStore()
    }

    window.createNote = createNote
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.login = SessionAction.login
    window.logout = SessionAction.logout

   
    
    ReactDOM.render(
        <Root store={store}/>,
        document.getElementById('root')
    )
})