import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const CustomLink = ({ title, to, styleType }) => {
    return (
        <Link to={to} className={styles[styleType]}>
            {title}
        </Link>
    )
}

export default CustomLink;