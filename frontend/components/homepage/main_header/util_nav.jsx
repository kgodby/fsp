import React from 'react';
import {Link} from 'react-router-dom'


class UtilNav extends React.Component{
    
    
    render(){
        return(
            <nav className="top-level-nav utility-nav">
                <ul>
                    <li>
                        <Link to="/signup">Sign up</Link>
                    </li>
                   
                   <li>or</li>
                   
                    <li>
                        <Link to="/login" className="button-outline">Login</Link>
                    </li>
                </ul>
            </nav>
        )
    }
}

export default UtilNav;