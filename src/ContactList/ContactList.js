import React, { Component } from 'react';
import ContactListItem from './ContactListItem/ContactListItem';

class ContactList extends Component {
  filteredNames = () => {
    return this.props.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.props.searchName.toLowerCase());
    });
  };

  render() {
    return (
      <ul>
        {this.filteredNames().map(({ id, name, number }) => (
          <ContactListItem key={id} name={name} number={number} />
        ))}
      </ul>
    );
  }
}

export default ContactList;
