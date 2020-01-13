import React from 'react'
import {Route} from 'react-router-dom'
//import GreetingContainer from './greeting/greeting_container'
import Login from './session_form/Login'
import SignupFormContainer from './session_form/signup_form_container'

import Homepage from './homepage/homepage'

const App = () => (
    <div>
        
        <div >
            
            <Route exact path='/' component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignupFormContainer} />
            <br/>
        </div>
    </div>


)

export default App