import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.css';

const CustomLink = ({ title, to, styleType, icon }) => {
    return (
        <Link to={to} className={styles[styleType]}>
            {icon}{title}
        </Link>
    )
}

export default CustomLink;