import React from 'react';

class About extends React.Component{
    render(){
        return(
            
            <li>
                
                <a className="nonlinked">About US</a>
                <span className="arrow"></span>
                
                <div className="sub-nav"  >
                    <div className="sub-nav-col left">
                        
                        <a href="#" className="sub-nav-box">
                            <div className="plans evernote"
                            ></div>
                            <h4>About US</h4>
                            <p>Learn about the company</p>
                        </a>

                        <a href="#" className="sub-nav-box">
                            <div className="plans careers"
                            ></div>
                            <h4>Careers</h4>
                            <p>Opportunities with Evernote</p>
                        </a>

                    </div>
                    
                    <div className="sub-nav-col right">
                        
                        <a href="#" className="sub-nav-box">
                            <div className="plans careers"
                            ></div>
                            <h4>Why Evernote</h4>
                            <p>Save, sync and share it all</p>
                        </a>

                        <a href="#" className="sub-nav-box">
                            <div className="plans careers"
                            ></div>
                            <h4>Careers</h4>
                            <p>Opportunities with Evernote</p>
                        </a>


                    </div>
                
                </div>
            
            </li>
        )
    }
}

export default About;