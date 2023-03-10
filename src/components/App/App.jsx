import React from 'react';
import { nanoid } from 'nanoid';
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';

class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
  };

  addContact = ({name, number}) => {
    const { contacts } = this.state;
    const newContact = {
      id: nanoid(),
      name,
      number,
    }
    if (contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase())) {
        return alert(`${newContact.name} is already in contacts.`);
    }

    this.setState(({ contacts }) => ({
      contacts: [newContact, ...contacts],
    }));
  };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };
  
  getVisibleContacts = () => {
    const { filter, contacts } = this.state;
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  };

  deleteContact = contactId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== contactId)
    }));
  };
  
  render() {
    const { filter } = this.state;
    const visibleContacts = this.getVisibleContacts();


    return (
      <>
      <h1>Phonebook</h1>
      <ContactForm onSubmit={this.addContact}/>
      <h2>Contacts</h2>
      <Filter value={filter} onChange={this.changeFilter}/>
        <ContactList contacts={visibleContacts} onDeleteContact={this.deleteContact}/>
      </>
    );
  }
};

export default App;
