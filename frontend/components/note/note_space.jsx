import React from 'react'
class NoteSpace extends React.Component {

    constructor(){
        super()
        
        this.state = {title: "title", body: "body"}
    }

    handleChange(type){
        return event => this.setState({[type]: event.target.value})
    };

    render(){
        console.log(this.state.title)
        return(
        <div className="editor">
            
                
                    <div className="title" placeholder="Untitled"
                        onChange={this.handleChange('title')}
                        value={this.state.title}>
                    </div>
             
            
           <textarea className="note-body" placeholder="Start writing..."
           onChange={this.handleChange('body')}
           
           value={this.state.body}
           />
        
           
        </div>
        )
    }
}

export default NoteSpace