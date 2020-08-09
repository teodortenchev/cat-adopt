import React from 'react';
import styles from './index.module.css';


const FormControl = ({ htmlFor, fieldName, type, name, value, placeholder, id, onChange }) => {
    return (

        <label htmlFor={htmlFor} >
            <input
                type={type || "text"}
                className={styles.input}
                name={name}
                value={value}
                placeholder={placeholder}
                id={id}
                onChange={onChange}
            />
        </label>

    )
}

export default FormControl;

