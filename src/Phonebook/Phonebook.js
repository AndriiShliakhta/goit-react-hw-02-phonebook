import React, { Component } from 'react';
// import styles from './Profile.module.css';
// import PropTypes from 'prop-types';

const INITIAL_STATE = {
  name: '',
  number: '',
};
class Phonebook extends Component {
  state = { ...INITIAL_STATE };

  handleChange = ({ target }) => {
    const { name, value } = target;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.addContact(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    // const { goodfeedback, neutralfeedback, badfeedback } = this.state;
    return (
      <>
        <form action="" onSubmit={this.handleSubmit}>
          <label>
            Name
            <input
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
              required
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <br />
          <label>
            Number
            <input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              value={this.state.number}
              title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
              required
              onChange={this.handleChange}
            />
          </label>
          <br />

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
