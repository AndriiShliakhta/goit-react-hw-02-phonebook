import React, { Component } from 'react';

class Contacts extends Component {
  filteredNames = () => {
    return this.props.contacts.filter(({ name }) => {
      return name.toLowerCase().includes(this.props.searchName.toLowerCase());
    });
  };

  render() {
    return (
      <>
        <ul>
          {this.filteredNames().map(({ id, name, number }) => (
            <li key={id}>
              <p>
                {name}: {number}
              </p>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default Contacts;
