import React from 'react'
import ReactDOM from 'react-dom'
import Root from './components/root'
import configureStore from './store/store'
import * as SessionAction from './actions/session_actions' 


document.addEventListener("DOMContentLoaded", () => {   
  
    const store = configureStore()
   
    window.dispatch = store.dispatch;
    window.getState = store.getState;
    window.login = SessionAction.login
  
   
    
    ReactDOM.render(
        <Root store={store}/>,
        document.getElementById('root')
    )
})