import React, { Component } from "react";
import "./Contact.scss";
import { connect } from "react-redux";
import { deleteContact, editContact } from "../actions/nameActions";

export class Contact extends Component {
  state = {
    name: "",
    email: "",
    age: "",
    show: false,
    editing: false
  };

  deleteHandler = id => {
    console.log(id);
    this.props.deleteContact(id);
  };
  editHandler = (id, e) => {
    const { name, email, age } = this.props.contact;

    e.preventDefault();
    this.setState({ editing: !this.state.editing });
    this.setState({ name, email, age});
  };
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleSubmit = (id, e) => {
    e.preventDefault();

    console.log(id);  

    const {name, email, age} = this.state

    const updContact = {
        id,
        name,
        email,
        age
    }

    this.props.editContact(updContact)
  };
  render() {
    const { id, name, email, age } = this.props.contact;
    const { editing } = this.state;
    switch (editing) {
      case true:
        return (
          <li>
            <form onSubmit={this.handleSubmit.bind(this,id)}>
              <label>Name</label>
              <input name="name" value={this.state.name} onChange={this.handleChange} />
              <label>Email</label>
              <input name="email" value={this.state.email} onChange={this.handleChange} />
              <label>Age</label>
              <input name="age" value={this.state.age} onChange={this.handleChange} />
              <button type="submit">Submit</button>
              <button onClick={this.editHandler.bind(this,id)}>Cancel</button>
            </form>
          </li>
        );
      case false:
        return (
          <li>
            <h1>
              {name}
              <button
                id="toggle"
                onClick={() => this.setState({ show: !this.state.show })}
              >
                >
              </button>
            </h1>
            {this.state.show ? (
              <React.Fragment>
                <h1>{email}</h1>
                <h1>{age}</h1>
              </React.Fragment>
            ) : null}
            <button onClick={this.editHandler.bind(this, id)}>Edit</button>
            <button onClick={this.deleteHandler.bind(this, id)}>X</button>
          </li>
        );
      default:
        break;
    }
  }
}

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(
  mapStateToProps,
  { deleteContact, editContact }
)(Contact);
