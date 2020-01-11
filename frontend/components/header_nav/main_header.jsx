import React from 'react';
import HeaderNav from './top_level_nav'
import UtilNavContainer from './util_nav_container'

class MainHeader extends React.Component{
    render(){
        return(
        <div className="top">
            <HeaderNav />
            <UtilNavContainer />
        </div>
        )
    }
}

export default MainHeader;