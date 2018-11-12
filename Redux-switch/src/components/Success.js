import React, { Component } from 'react'
import {connect} from 'react-redux'

export class Success extends Component {
  render() {
      const {name, email, address} = this.props.reducerOne
    return (
      <div>
        <h1>Success</h1> 
        {name},
        {email},
        {address},
      </div>
    )
  }
}

const mapStateToProps = state => ({
    reducerOne: state.reducer1
  });
  

export default connect(mapStateToProps)(Success)
