import React, { Component } from "react";

export class Email extends Component {
  continue = () => {
    this.props.next(2);
  };
  back = () => {
    this.props.prev(2);
  };
  render() {
    return (
      <div>
        Email
        <input
          type="text"
          onChange={this.props.handleChange("email")}
          value={this.props.value.email}
        />
        <button onClick={this.continue}>Continue</button>
        <button onClick={this.back}>Back</button>
      </div>
    );
  }
}

export default (Email);
