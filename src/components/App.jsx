import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Header, HeaderList } from './App.styled';
class App extends Component {
  state = {
    contacts: [],
  };
  handlerContactFormSubmit = data => {
    const { contacts } = this.state;
    if (
      contacts.some(contact => {
        return contact.name === data.name;
      })
    ) {
      alert(`${data.name} is alredy in contacts`);
    } else {
      this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));
    }
  };
  handlerButtonDelete = evt => {
    const buttonId = evt.currentTarget.id;
    const contactsArray = this.state.contacts;
    const result = contactsArray.findIndex(contact => {
      return contact.id === buttonId;
    });
    this.setState(prevState=>{
      const newContacts = [...prevState.contacts];
      newContacts.splice(result,1);
      return {contacts:newContacts}
    })
   
  };
  render() {
    return (
      <div
        style={{
          marginTop: '150',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        {' '}
        <Header>Phonebook</Header>
        <ContactForm onSubmit={this.handlerContactFormSubmit} />
        <HeaderList>Contact List</HeaderList>
        <Filter />
        <ContactList
          dataContacts={this.state.contacts}
          handlerDelete={this.handlerButtonDelete}
        />
      </div>
    );
  }
}
export default App;
