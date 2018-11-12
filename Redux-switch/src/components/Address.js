import React, { Component } from "react";

export class Address extends Component {
  continue = () => {
    this.props.next(3);
  };
  back = () => {
    this.props.prev(3);
  };
  render() {
    return (
      <div>
        Address
        <input
          type="text"
          onChange={this.props.handleChange("address")}
          value={this.props.value.address}
        />
        <button onClick={this.continue}>Continue</button>
        <button onClick={this.back}>Back</button>
      </div>
    );
  }
}

export default (Address);
