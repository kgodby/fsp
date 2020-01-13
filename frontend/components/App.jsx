import React from 'react'
import {Route} from 'react-router-dom'
//import GreetingContainer from './greeting/greeting_container'
import Login from './session_form/Login'
import SignUp from './session_form/SignUp'

import Homepage from './homepage/homepage'

const App = () => (
    <div>
        
        <div >
            
            <Route exact path='/' component={Homepage} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={SignUp} />
            <br/>
        </div>
    </div>


)

export default App