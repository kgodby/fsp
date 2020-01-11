import React from 'react'
import { Link } from 'react-router-dom' 

const Greeting = (props) => {
   const {currentUser, logout} = props

  const sessionLinks = () => (
      <nav>
            <Link to='/login'>Login</Link>
                    &nbsp;or&nbsp;
            <Link to='/signup'>Sign up</Link>
      </nav>
    )

    const greeting = () => (
        <hgroup className="header-group">
            {/* <h2 className="header-name">Hi, {currentUser.username}!</h2> */}
            <button className="header-button" onClick={logout}>Log Out</button>
        </hgroup>
    )

    return currentUser ? greeting() : sessionLinks()

}

export default Greeting