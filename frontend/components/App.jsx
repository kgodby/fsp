import React from 'react'

//import GreetingContainer from './greeting/greeting_container'
import Login from './session_form/Login'
import SignUp from './session_form/SignUp'
import {AuthRoute, ProtectedRoute} from '../util/route_util'
import {Switch} from 'react-router-dom'
import {Route} from 'react-router-dom'
import Homepage from './homepage/homepage'
import NoteContainer from './note/note_container'

const App = () => (

        
        <div >
            <Switch>
                <ProtectedRoute exact path='/note' component={NoteContainer} />
                <Route exact path='/' component={Homepage} />
                <AuthRoute path="/login" component={Login} />
                <AuthRoute path="/signup" component={SignUp} />
            </Switch>
        </div>
    


)

export default App