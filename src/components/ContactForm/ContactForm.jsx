import { Component } from 'react';
import { nanoid } from 'nanoid';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleSubmit =(e)=>{
    e.preventDefault();
    const{name,number}=this.state;
   
  }
  handleChange=(evt)=>{
    const { name, value } = evt.target;
    this.setState({ [name]: value });
  }

  render() {
    const NameId = nanoid();
    const TelId =nanoid();
    const {name,number}=this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <label htmlFor={NameId}>
            Name
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            id={NameId}
            value={name}
            onChange={this.handleChange}
          />
        </label>
        <label htmlFor={TelId}>
            Telephone
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            id={TelId}
            value={number}
            onChange={this.handleChange}
          />
        </label>
        <button type='submit'>Add contact</button>
      </form>
    );
  }
}
export default ContactForm;
