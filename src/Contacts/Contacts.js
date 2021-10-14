import React, { Component } from 'react';

const Contacts = ({ contacts }) => {
  console.log(contacts);
  return (
    <>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <p>{contact.name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Contacts;
