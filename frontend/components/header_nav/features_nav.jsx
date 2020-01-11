import React from 'react';
import { Link } from 'react-router-dom'

class Features extends React.Component{

    render(){
        // const style={overFlow}

        const divStyle={height: "287px", overflowY: "scroll"} 
        return(
            <li>
    <a className="nonlinked">Features</a>
                
                <span className="arrow"></span>
                <div className="sub-nav" style={divStyle} >
                    
                    <div className="sub-nav-col left">

                        <a href="#" className="sub-nav-box"> 
                            <div className="plans " 
                            ></div>
                            <h4>Web Clipper</h4>
                            <p>A save button for the web</p>
                        </a>

                        <a href="#" className="sub-nav-box">
                            <div className="plans " 
                            ></div>
                            <h4>Template</h4>
                            <p>Make better notes, faster</p>
                        </a>

                        <a href="#" className="sub-nav-box">
                            <div className="plans "
                            ></div>
                            <h4>Notes Sync</h4>
                            <p>Keep you notes handy</p>
                        </a>

                        <a href="#" className="sub-nav-box">
                            <div className="plans "
                            ></div>
                            <h4>PDF & Doc Search</h4>
                            <p>Find information anywhere</p>
                        </a>

                        <a href="#" className="sub-nav-box">
                            <div className="plans "
                            ></div>
                            <h4>Spaces</h4>
                            <p>Bring your team together</p>
                        </a>
                        

                    
                    </div>
                    
                    <div className="sub-nav-col right">

                        <a href="#" className="sub-nav-box">
                            <div className="plans "
                            ></div>
                            <h4>Search Handwriting</h4>
                            <p>Find text in any note</p>
                        </a>

                        <a href="#" className="sub-nav-box">
                            <div className="plans "
                            ></div>
                            <h4>Document Scanning</h4>
                            <p>Go paperless with Evernote</p>
                        </a>

                        <a href="#" className="sub-nav-box">
                            <div className="plans "
                            ></div>
                            <h4>Notebooks & Tags</h4>
                            <p>Organize your own way</p>
                        </a>

                        <a href="#" className="sub-nav-box">
                            <div className="plans "
                            ></div>
                            <h4>Integrations</h4>
                            <p>Connect your favorite apps</p>
                        </a>
                    
                    </div>
                
                </div>
            
            </li>
        )
    }
}

export default Features;