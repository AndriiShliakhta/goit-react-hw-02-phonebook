import React, { Component } from 'react';
import ContactForm from './ContactForm/ContactForm';
import { v4 as uuidv4 } from 'uuid';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'ros', number: '459-12-56' },
      { id: 'id-2', name: 'hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'eden', number: '645-17-79' },
      { id: 'id-4', name: 'annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = contact => {
    this.setState(prev => ({
      contacts: [...prev.contacts, { ...contact, id: uuidv4() }],
    }));
  };
  findContact = e => {
    this.setState({ filter: e.target.value });
  };

  render() {
    return (
      <>
        <h1>Phonebook</h1>
        <ContactForm
          contacts={this.state.contacts}
          addContact={this.addContact}
        />
        <h2>Contacts</h2>
        <Filter find={this.findContact} />

        {this.state.contacts.length > 0 && (
          <ContactList
            contacts={this.state.contacts}
            searchName={this.state.filter}
          />
        )}
      </>
    );
  }
}

export default App;
