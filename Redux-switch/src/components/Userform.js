import React, { Component } from "react";
import { connect } from "react-redux";
import { addStep, prevStep, addVal } from "../actions/nameActions";

import Name from "./Name";
import Email from "./Email";
import Address from "./Address";
import Success from "./Success";

export class Userform extends Component {
    state = {
        name: '',
        email: '',
        address: ''
    }
  next = (step) => {
    console.log("next");
    this.props.addStep(step);
  };
  prev = (step) => {
    console.log("prev");
    this.props.prevStep(step);
  };
  handleChange = input => e => {
      console.log('handleChange')
      e.preventDefault()
      this.setState({[input]: e.target.value});

      const newVal = {
          [input]: e.target.value
      }

    this.props.addVal(newVal)
  };
  render() {
    const { step } = this.props.reducerOne;
    const { name, email, address } = this.state;
    const value = { name, email, address };
    switch (step) {
      case 1:
        return (
          <Name
            value={value}
            next={this.next}
            prev={this.prev}
            handleChange={this.handleChange}
          />
        );
      case 2:
        return (
          <Email
            value={value}
            next={this.next}
            prev={this.prev}
            handleChange={this.handleChange}
          />
        );
      case 3:
        return (
          <Address
            value={value}
            next={this.next}
            prev={this.prev}
            handleChange={this.handleChange}
          />
        );

      case 4:
        return <Success
        value={value}
        />

      default:
        break;
    }
  }
}

const mapStateToProps = state => ({
  reducerOne: state.reducer1
});

export default connect(
  mapStateToProps,
  { addStep, prevStep, addVal }
)(Userform);
