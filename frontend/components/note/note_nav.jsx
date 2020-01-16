import React from 'react'
import NoteSpace from './note_space'
class NoteNav extends React.Component{

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
                                   
                                    {/* <div id="notes-index-sort-type">
                                        <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
                                            width="24" height="24"
                                            viewBox="0 0 24 24"
                                            fill="#000000"><path d="M 3 3 L 3 5 L 14 5 L 14 3 L 3 3 z M 17 3 L 17 17 L 14 17 L 18 21 L 22 17 L 19 17 L 19 3 L 17 3 z M 3 7 L 3 9 L 12 9 L 12 7 L 3 7 z M 3 11 L 3 13 L 10 13 L 10 11 L 3 11 z M 3 15 L 3 17 L 8 17 L 8 15 L 3 15 z M 3 19 L 3 21 L 6 21 L 6 19 L 3 19 z"></path></svg>
                                    </div>
                                    <div id="notes-index-view-options ">
                                        <img src="https://img.icons8.com/material-outlined/24/000000/list.png" />
                                    </div>
                                    
                                    <div id="notes-index-tag-filter">
                                        <img className="notes-list-header-icon" src="" alt=""/>
                                    </div>
                                    */}

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