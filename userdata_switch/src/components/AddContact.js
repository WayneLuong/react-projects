import React, { Component } from 'react'
import {addContact} from '../actions/nameActions'
import {connect} from 'react-redux'

export class AddContact extends Component {
    state= {
        name:'',
        email:'',
        age:''
    }
    handleChange = (e) =>{
        this.setState({[e.target.name]:e.target.value})
    }
    handleSubmit=(e)=> {
        e.preventDefault();
        
        const { name, email, age} = this.state
        const newUser = {
            /* id: uuid(), */
            name,
            email,
            age
        }

        console.log(newUser)

        this.props.addContact(newUser)
    }
  render() {
      const { email, name , age} = this.state
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input name='name'value={name} onChange={this.handleChange}/>
        <label>Email</label>
        <input name='email'value={email} onChange={this.handleChange}/>
        <label>Age</label>
        <input name='age'value={age} onChange={this.handleChange}/>
        <button type='submit' >Submit</button>
      </form>
    )
  }
}

export default connect(null, {addContact})(AddContact)
