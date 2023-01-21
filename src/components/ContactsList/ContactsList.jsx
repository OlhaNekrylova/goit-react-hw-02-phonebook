import React from 'react';
// import PropTypes from 'prop-types';
import Contact from '../Contact/Contact';
import css from './ContactsList.module.css';

const ContactsList = ({contacts}) => {
    return (
        <ul className={css.contactsList}>
            {contacts.map(({name, id}) => (
                <Contact
                    key={id} 
                    name={name}
                />
            ))}
        </ul>
    );
};

// ContactsList.propTypes = {
//     friends: PropTypes.arrayOf(
//         PropTypes.shape({
//             id: PropTypes.number.isRequired,
//         })
//     ),
// };

export default ContactsList;
