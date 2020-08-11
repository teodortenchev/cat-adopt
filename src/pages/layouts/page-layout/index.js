import React from 'react';
import styles from './index.module.css'
import UpperNav from '../../../components/header';

const PageLayout = (props) => {
    return (
        <div className={styles.wrapper}>
            <UpperNav />
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default PageLayout;