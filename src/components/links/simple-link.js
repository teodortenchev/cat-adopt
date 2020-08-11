import React from 'react';
import { Link } from 'react-router-dom';
import styles from './simple-link.module.css';

const SimpleLink = ({ title, to }) => {
    return (
        <Link to={to} className={styles.link}>
            {title}
        </Link>
    )
}

export default SimpleLink;