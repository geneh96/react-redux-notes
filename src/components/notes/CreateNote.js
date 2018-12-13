import React, { Component } from 'react'
import { connect } from 'react-redux'
import { createNote } from '../../store/actions/noteActions'

class CreateNote extends Component {

    state = {
        title: '',
        content: ''
    }
  
    handleChange=(e)=>{
        // changes state
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        //console.log(this.state)
        this.props.createNote(this.state)
    }
    
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">New Note</h5>
            <div className="input-field">
                <label className="title">Title</label>
                <input type="text" id="title" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label className="content">What do you want to write about?</label>
                <textarea className="materialize-textarea" id="content" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Create Note</button>
            </div>
        </form>        
      </div>
    )
  }
}

const mapDispatchtoProps = (dispatch) => {
    return {
        createNote: (note) => dispatch(createNote(note))
    }
}

export default connect(null, mapDispatchtoProps)(CreateNote)
