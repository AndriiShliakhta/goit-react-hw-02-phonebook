import React from 'react';

const ContactListItem = ({ name, number }) => {
  return (
    <li>
      <p>
        {name}: {number}
      </p>
    </li>
  );
};

export default ContactListItem;
