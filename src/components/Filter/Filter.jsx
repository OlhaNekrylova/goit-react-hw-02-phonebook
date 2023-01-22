import React from 'react';
// import PropTypes from 'prop-types';
import css from './Filter.module.css';

class Filter extends React.Component {
    state = {
        name: " ",
    }

    handleChange = e => {
        const {name, value} = e.currentTarget;
        this.setState({[name]: value});
    };

    filterContact = (name) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter (contact => this.state.name === e.currentTarget.name), 
        }))
        
    }

    render () {
        return (
            <label>
                Find contacts by name
                <input
                    type="text"
                        // name="name"
                        // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
                        // title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
                        // required
                />
            </label>
        );
    };
};

export default Filter;