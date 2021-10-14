import React, { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import { v4 as uuidv4 } from 'uuid';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [],
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
        <Phonebook
          contacts={this.state.contacts}
          addContact={this.addContact}
        />
        <Filter find={this.findContact} />

        {this.state.contacts.length > 0 && (
          <Contacts
            contacts={this.state.contacts}
            searchName={this.state.filter}
          />
        )}
      </>
    );
  }
}

export default App;
