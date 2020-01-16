import React from 'react';
import NoteNav from './note_nav'
import SideNav from './side_nav'
import NoteSpace from './note_space'

class Note extends React.Component{


    render(){
            
        return(
            
            <div className="note-container-global">
                <SideNav currentUser={this.props.currentUser} logout={this.props.logout} />
                <NoteNav />
            
            </div>
        )
    }
}

export default Note;