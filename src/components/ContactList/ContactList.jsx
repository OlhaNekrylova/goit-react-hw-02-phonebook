import React from 'react';
import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactsList = ( {contacts, onDeleteContact }) => {
    return (
        <ul className={css.contactsList}>
            {contacts.map(({ id, name, number }) => (
                <Contact
                    key={id} 
                    name={name}
                    number={number}
                    onDeleteContact={onDeleteContact}
            
                />
            ))}
        </ul>
    );
};

ContactsList.propTypes = {
    contacts: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            number: PropTypes.string,
        })
    ),
    // onDeleteContact: PropTypes.func.isRequired,
};

export default ContactsList;
