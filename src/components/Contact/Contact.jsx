import PropTypes from 'prop-types';
// import { nanoid } from 'nanoid';
import css from './Contact.module.css';

const Contact = ({ name, id }) => {
    // const id = nanoid();
    return (
        <li 
            key={id}
            className={css.item}>
            <p className={css.name}>{name}</p>
        </li>
    );
};

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
};

export default Contact;