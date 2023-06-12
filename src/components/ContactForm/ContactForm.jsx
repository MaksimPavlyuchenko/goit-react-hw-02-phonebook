import { Component } from 'react';

import { Form, Input, Button } from './ContactForm.styled';

const INITIAL_STATE = { name: '' };
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
      <Form onSubmit={this.handleSubmit}>
        <label>
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
        </label>
        <Button type="submit">Add contact</Button>
      </Form>
    );
  }
}
export default ContactForm;
