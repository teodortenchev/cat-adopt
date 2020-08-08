import React from 'react';
import styles from './index.module.css';

const FormControl = ({ htmlFor, fieldName, type, name, value, placeholder, id, onChange }) => {
    return (
        <div className="">
            <label htmlFor={htmlFor} className="">
                {fieldName}
            </label>
            <input
                type={type || "text"}
                className=""
                name={name}
                value={value}
                placeholder={placeholder}
                id={id}
                onChange={onChange}
            />
        </div>
    )
}

export default FormControl;

