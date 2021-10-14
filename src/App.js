import React, { Component } from 'react';
import Phonebook from './Phonebook/Phonebook';
import { v4 as uuidv4 } from 'uuid';
import Contacts from './Contacts/Contacts';

class App extends Component {
  state = {
    contacts: [],
  };

  addContact = contact => {
    this.setState(prev => ({
      contacts: [...prev.contacts, { ...contact, id: uuidv4() }],
    }));
  };

  render() {
    return (
      <>
        <Phonebook
          contacts={this.state.contacts}
          // name={this.state.name}
          // handleChange={this.handleChange}
          // handleSubmit={this.handleSubmit}
          addContact={this.addContact}
        />

        {this.state.contacts.length > 0 && (
          <Contacts contacts={this.state.contacts} />
        )}
      </>
    );
  }
}

export default App;
