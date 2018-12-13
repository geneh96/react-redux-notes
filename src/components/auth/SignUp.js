import React, { Component } from 'react'

class SignUp extends Component {

    state = {
        email: '',
        password: '',
        firstName:'',
        lastName:''
    }
  
    handleChange=(e)=>{
        // changes state
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault()
        console.log(this.state)
    }
    
  render() {
    return (
      <div className="container">
        <form className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">Sign Up</h5>
            <div className="input-field">
                <label className="email">Email</label>
                <input type="email" id="email" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label className="password">password</label>
                <input type="password" id="password" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label className="firstName">First Name</label>
                <input type="text" id="firstName" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <label className="lastName">Last Name</label>
                <input type="text" id="lastName" onChange={this.handleChange}/>
            </div>
            <div className="input-field">
                <button className="btn pink lighten-1 z-depth-0">Sign Up</button>
            </div>
        </form>        
      </div>
    )
  }
}

export default SignUp
