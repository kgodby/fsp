import React from 'react';
import { Link } from 'react-router-dom'
class HeaderNavItem extends React.Component{

    render(){
        // const style={overFlow}
        return(
            <li>
    <a className="nonlinked">Plans</a>
                <span className="arrow"></span>
                <div className="sub-nav"  >
                    <div className="sub-nav-col left">
                        <a href="#" className="sub-nav-box"> 
                            <div className="plans basic" 
                            ></div>
                            <h4>Basic</h4>
                            <p>Take great notes</p>
                        </a>

                        <a href="#" className="sub-nav-box">
                            <div className="plans premium" 
                            ></div>
                            <h4>Premium</h4>
                            <p>Unclutter your life</p>
                        </a>

                        <a href="#" className="sub-nav-box">
                            <div className="plans business"
                            ></div>
                            <h4>Business</h4>
                            <p>Bring your team together</p>
                        </a>
                    </div>
                    <div className="sub-nav-col right">

                    </div>
                </div>
            </li>
        )
    }
}

export default HeaderNavItem;