import { Component } from 'react';
import { nanoid } from 'nanoid';

import ContactForm from './ContactForm/ContactForm';
import ContactList from './ContactList/ContactList';
import Filter from './Filter/Filter';

import { Header, HeaderList } from './App.styled';
class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  handlerContactFormSubmit = data => {
    const { contacts } = this.state;
    const { name, number } = data;
    const contact = { name, number, id: nanoid() };
    const findContact = contacts.find(contact => {
      return contact.name === name;
    });

    if (findContact) {
      alert(`${name} is alredy in contacts`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, contact],
      }));
    }
  };

  handlerButtonDelete = id => {
    const contactsArray = this.state.contacts;

    const result = contactsArray.filter(contact => {
      return contact.id !== id;
    });

    this.setState({
      contacts: result,
    });
  };

  handlerFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  filteredName = () => {
    const { contacts, filter } = this.state;
    const filterLower = filter.toLowerCase();
    const filteredName = contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filterLower);
    });
    return filteredName;
  };

  render() {
    const { filter } = this.state;

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
        <Filter filterData={filter} filterHandler={this.handlerFilter} />
        <ContactList
          dataContacts={this.filteredName}
          handlerDelete={this.handlerButtonDelete}
        />
      </div>
    );
  }
}
export default App;
