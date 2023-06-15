import { Component } from 'react';
import PropTypes from 'prop-types';

import { Form, Input, Button, Label } from './ContactForm.styled';

const INITIAL_STATE = { name: '', number: '' };
class ContactForm extends Component {
  state = { ...INITIAL_STATE };

  handleChange = event => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = evt => {
    evt.preventDefault();
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({ ...INITIAL_STATE });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Label>
            Contact Name
            <Input
              autoFocus
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleChange}
              value={this.state.name}
            />
          </Label>
          <Label>
            {' '}
            Contact Number
            <Input
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleChange}
              value={this.state.number}
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </Form>
      </>
    );
  }
}
export default ContactForm;
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
