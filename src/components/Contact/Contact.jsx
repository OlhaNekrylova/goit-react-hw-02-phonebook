import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import css from './Contact.module.css';

const Contact = ({ id, name, number }) => {
    // const id = nanoid();
    return (
        <li 
            key={id}
            className={css.item}>
            <p className={css.info}>{name}: {number}</p>
        </li>
    );
};

Contact.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    number: PropTypes.number.isRequired,    
};

export default Contact;