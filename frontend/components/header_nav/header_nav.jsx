import React from 'react'
import { Link } from 'react-router-dom';
import HeaderNavItem from './header_nav_item'
class HeaderNav extends React.Component{

    render(){
        return(
        <nav className="top-level-nav">
            <HeaderNavItem />
        </nav>

        )
    }
}

export default HeaderNav;