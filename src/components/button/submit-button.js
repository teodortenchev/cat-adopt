import React from 'react';
import styles from './submit-button.module.css';
import Button from '@material-ui/core/Button';


const SubmitButton = ({ title, onClick }) => {
    return (
        <div className={styles.buttonContainer}>
            <Button variant="contained" color="default" size="small" className={styles.button} onClick={onClick}>{title}</Button>
        </div>
    )
}

export default SubmitButton;