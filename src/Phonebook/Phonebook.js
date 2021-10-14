import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';
// import styles from './Profile.module.css';
// import PropTypes from 'prop-types';
// import Statistics from './Statistics/Statistics';

class Phonebook extends Component {
  state = {
    name: '',
  };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addContact(this.state);
  };

  render() {
    // const { goodfeedback, neutralfeedback, badfeedback } = this.state;
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <label htmlFor="">
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              onChange={this.handleChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}
export default Phonebook;
// Phonebook.propTypes = {
//   goodfeedback: PropTypes.number,
//   neutralfeedback: PropTypes.number,
//   badfeedback: PropTypes.number,
// };
