import React from 'react';


class DemoUserButton extends React.Component{


    render(){
        return(
            <div className='demo-user-button-outer'>
                <button onClick={() =>console.log('entering the matrix')}>
                    <div className="inner-demo-user-button">
                        <img src="https://www.evernote.com/redesign/OpenID/img/GGL_logo_googleg_18.png" alt=""/> 
                        Continue, interloper
                    </div>
                </button>
            </div>
        )
    }
}

export default DemoUserButton;