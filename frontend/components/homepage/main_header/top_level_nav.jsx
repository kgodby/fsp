import React from 'react'
import { Link } from 'react-router-dom';
import Plans from './plans_nav' 
import Features from './features_nav'
import About from './about_us_nav'

class HeaderNav extends React.Component{

    render(){
        return(
        <nav className="top-level-nav">
           
            <Plans />
            <Features />
            <li>
                    <a className="nonlinked">Help & Learning</a>
            </li>
            <About />
     
        </nav>

        )
    }
}

export default HeaderNav;