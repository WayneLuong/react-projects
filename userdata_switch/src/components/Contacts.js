import React, { Component } from "react";
import { connect } from "react-redux";
import {getContacts} from '../actions/nameActions'

import Contact from './Contact'

export class Contacts extends Component {
    componentDidMount(){
        this.props.getContacts()
    }
    
  render() {
    const { contacts } = this.props;
    return (
      <ul>
        {contacts.map(contact => (
          <Contact
            key={contact.id} contact={contact}
          />
        ))}
      </ul>
    );
  }
}

const mapStateToProps = state => ({
  contacts: state.contact.contacts
});

export default connect(mapStateToProps, {getContacts})(Contacts);
