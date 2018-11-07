import React, { Component } from 'react'
import {connect} from 'react-redux'
import {getSome} from '../actions/testAction'

class Display extends Component {
  state = {
    showInfo: false
  }
  handleClick= () =>{
    this.props.getSome();
    const {showInfo} = this.state

    //IF CONDITION
    !showInfo ? (this.setState({showInfo:true}))
    : this.setState({showInfo:false}) 
  }
  render() {
    const {showInfo} = this.state
    return (
      <div>
            hello {showInfo ? (this.props.data.name):null }
            <button onClick={this.handleClick}>Toggle me</button>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    data: state.test
})

export default connect(mapStateToProps, {getSome})(Display)
