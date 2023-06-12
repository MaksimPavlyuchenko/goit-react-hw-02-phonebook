import { Component } from 'react';

import ContactForm from './ContactForm/ContactForm';

class App extends Component {
  state = {
    contacts: [],
  };
  hendlerContactFormSubmit = data => {
    this.setState(prevState => ({ contacts: [...prevState.contacts, data] }));
  };
  render() {
    return (
      <div
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101',
        }}
      >
        <ContactForm onSubmit={this.hendlerContactFormSubmit} />
      </div>
    );
  }
}
export default App;
