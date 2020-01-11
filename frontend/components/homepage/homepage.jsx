import React from 'react'
import MainHeader from '../header_nav/main_header'
import UtilNavContainer from '../header_nav/util_nav_container'

class Homepage extends React.Component{

    render(){
        return(
            <div className="homepage">
                <header className="global-header">
                    <MainHeader />
                    <UtilNavContainer />
                </header>
                
            </div>
        )   
    }
}

export default Homepage;