import React from 'react';
// import styles from './Profile.module.css';
// import PropTypes from 'prop-types';

const Filter = ({ find }) => {
  return (
    <>
      <label>
        Find contacts by name
        <input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          //   value={filter}
          onChange={find}
        />
      </label>
    </>
  );
};
export default Filter;
// Phonebook.propTypes = {
//   goodfeedback: PropTypes.number,
//   neutralfeedback: PropTypes.number,
//   badfeedback: PropTypes.number,
// };
