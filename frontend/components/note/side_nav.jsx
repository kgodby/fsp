import React from 'react'
// import ReactDom from 'react-dom'


class SideNav extends React.Component {
    
    constructor(props){
        super(props)

        this.toggleModal = this.toggleModal.bind(this)
    }

    componentDidMount(){
        document.getElementById('account-modal-inner').style.zIndex = -999
        document.getElementById('account-modal-inner').style.height = 0
    }

    toggleModal(){
       const modal = document.getElementById('account-modal-inner')
       if(modal.style.zIndex < 0){
           modal.style.zIndex = 999
           modal.style.height = "auto"
       }else{
           modal.style.zIndex = -999
           modal.style.height = 0
       }
      
    }

    render(){
        console.log(this.props)
        return(
            <section className="side-nav-wrapper">
                <div className="side-nav">
                    <div className="side-nav-inner">
                        <div className="user-info-wrapper" onClick={this.toggleModal}>
                            <div className="user-info">
                                <span className="user-info-inner">
                                    <span className="user-portrait-wrapper">
                                        <span className="user-portrait"></span>
                                    </span>
                                    <div className="user-name-wrapper">
                                        {this.props.currentUser}
                                    </div>
                                </span>
                            </div>
                        </div>  
                        <div id="account-modal">
                            <div id="account-modal-inner">
                                <h2>Account</h2>
                                <ul>
                                    <li className="account-info-dropdown">
                                        <span className="user-info-inner">
                                            <span className="user-portrait-wrapper">
                                                <span className="user-portrait"></span>
                                            </span>
                                            <div className="user-name-wrapper">
                                                {this.props.currentUser}
                                            </div>
                                        </span>
                                    </li>
                                    <li className="stupid-line"></li>
                                    <li className="account-modal-logout" onClick={this.props.logout}>
                                        Sign Out {this.props.currentUser}
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className='side-nav-buttons'>
                            <div className="search-bar">
                                <div className="search-bar-inner">
                                    <div className="search-bar-contents">
                                        <svg width="32" height="32" viewBox="0 0 32 32" className="mag_glass"><path fill="currentColor" d="M23.394 23.394a.95.95 0 0 1-1.343 0l-3.52-3.519a6.352 6.352 0 0 1-3.792 1.255 6.391 6.391 0 1 1 6.391-6.39c0 1.421-.47 2.73-1.255 3.792l3.52 3.519a.95.95 0 0 1 0 1.343zM9.965 14.713a4.748 4.748 0 1 0 9.496 0 4.748 4.748 0 0 0-9.496 0z"></path></svg>
                                        <input className="search-text"type="text" autoComplete="off" placeholder="Search"/>
                                    
                                    </div>
                                </div>
                            </div>
                            <div className="new-note-button-wrapper">
                                <div className="new-note-button">
                                    <span className="new-note-button-left">
                                        <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" ><path fillRule="evenodd" clipRule="evenodd" d="M7 14a1 1 0 0 1 1-1h12a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1z" fill="#fff"></path><path fillRule="evenodd" clipRule="evenodd" d="M13 8a1 1 0 1 1 2 0v12a1 1 0 1 1-2 0V8z" fill="#fff"></path></svg>
                                        <span className="new-note-button-text">New Note
                                        </span>
                                    </span>
                                    <span className="new-note-button-right">
                                        
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="end-line"><hr className="end-nav" />
                        </div>  
                    </div>
                </div>
            </section>
        )
    }
}

export default SideNav;