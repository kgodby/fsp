import React from 'react'
import NoteSpace from './note_space'
class NoteNav extends React.Component{

    constructor(){
        super()
        this.state = {notes: []}
    }

   

    render(){
        return(
        <section className="note-container">
        
                
                <div className="notes-inner">
                    <section className="note-index">
                        <div className="note-index-content">
                            <header className="note-index-header-container">
                                <div className="note-index-header-sub1 note-index-header-sub2">
                                    <h1 className="all-notes-header">All Notes
                                    </h1>
                                </div>
                               <div className="notes-list note-index-header-sub2">
                                    <div id="notes-index-count">#notes</div>
                                   
                            

                               </div>
                            </header>
                        </div>
                    </section>
                     <NoteSpace />               
                </div>
           
        </section>
        
        )
    }
}

export default NoteNav