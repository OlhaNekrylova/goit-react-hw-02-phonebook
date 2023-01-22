import React from 'react';
import Section from './Section/Section';
import Phonebook from './Phonebook/Phonebook';
import Filter from './Filter/Filter';
import ContactsList from './ContactsList/ContactsList';
// import { nanoid } from 'nanoid';

// model.id = nanoid();

class App extends React.Component {
  state = {
    contacts: [
      {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
      {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
      {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
      {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
    ],
    filter: '',
    name: '',
    number: ''
  }

  render () {
    return (
      <>
      <Section 
        title={'Phonebook'}>
        <Phonebook />
      </Section> 
      <Section
        title={'Contacts'}>
        <Filter onChange={this.handleChange}/>
        <ContactsList 
          contacts={this.state.contacts} 
        />
      </Section>
      
      </>
    );
  };
};

export default App;
