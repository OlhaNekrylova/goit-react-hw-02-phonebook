import React from 'react';
// import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';

import css from './ContactForm.module.css';

// model.id = nanoid();

class ContactForm extends React.Component {
    state = {
        name: '',
        number: '',
    };

    contactNameId = nanoid();
    contactNumberId = nanoid();

    handleChange = e => {
        const { name, value } = e.currentTarget;
        this.setState({[name]: value});
    };

    handleSubmit = e => {
        const { name, number } = this.state;
        // e.preventDefault();
        this.props.onSubmit(name, number);
        this.reset();
    };

    reset() {
        this.setState({
            name: '',
            number: '',
        });
    };

    render () {
        return (
            <form className={css.form} onSubmit={this.handleSubmit}>
                <label className={css.label} htmlFor={this.contactNameId}>
                    Name
                </label>
                    <input
                        className={css.input}
                        type="text"
                        name="name"
                        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        value={this.state.name}
                        onChange={this.handleChange}
                        id={this.contactNameId}
                        required
                    />
                <label className={css.label} htmlFor={this.contactNameId}>
                    Number
                </label>
                    <input
                        type="tel"
                        name="number"
                        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                        value={this.state.number}
                        onChange={this.handleChange}
                        id={this.contactNumberId}
                        required
                    /> 
                <button className={css.button}  type='submit'>
                    Add contact
                </button>
            </form>
        );
    };
    
};

export default ContactForm;