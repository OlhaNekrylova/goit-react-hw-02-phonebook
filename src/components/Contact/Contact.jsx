import PropTypes from 'prop-types';
import css from './Contact.module.css';

const Contact = ({ id, name, number, onDeleteContact }) => {
    return (
        <li 
            key={id}
            className={css.item}>
            <p className={css.info}>{name}: {number}</p>
            <button
                className={css.button}
                type="button"
                onClick={() => onDeleteContact(id)}
            >
            Delete
            </button>
        </li>
    );
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired, 
    onDeleteContact: PropTypes.func.isRequired,   
};

export default Contact;