import React from 'react'
import debounce from '../../util/debounce'
class NoteSpace extends React.Component {

    constructor(){
        super()
        
        this.state = {title: "", body: ""}
    }

    handleChange(type){
        return event => this.setState({[type]: event.target.value})
    
    };

    render(){
        
        return(
        <div className="editor">
            
                
                    <textarea className="title" placeholder="Untitled"
                        onChange={this.handleChange('title')}
                        
                       
                        value={this.state.title}>
                    </textarea>
             
            
           <textarea className="note-body" placeholder="Start writing..."
           onChange={this.handleChange('body')}
           
           value={this.state.body}
           />
        
           
        </div>
        )
    }
}

export default NoteSpace