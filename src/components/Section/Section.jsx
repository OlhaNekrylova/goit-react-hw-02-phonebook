import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section =({title, children}) => {
    return (
        <div>
            {<h2 className={css.title}>{title}</h2>}
            {children}
        </div>
    )
};

Section.propTypes = {
    sectionTitle: PropTypes.string,
    children: PropTypes.node,
};

export default Section;