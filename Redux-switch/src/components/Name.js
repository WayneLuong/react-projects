import React, { Component } from "react";

export class Name extends Component {
  continue = () => {
    this.props.next(1);
  };
  back = () => {
    this.props.prev(1);
  };

  render() {
    return (
      <div>
        Name
        <input
          type="text"
          onChange={this.props.handleChange("name")}
          value={this.props.value.name}
        />
        <button onClick={this.continue}>Continue</button>
      </div>
    );
  }
}

export default (Name);
