import React from 'react'
import HeaderNav from '../header_nav/header_nav'

class Homepage extends React.Component{

    render(){
        return(
            <div className="homepage-global">
                <header className="global-header">
                    <HeaderNav />
                </header>
                
            </div>
        )   
    }
}

export default Homepage;