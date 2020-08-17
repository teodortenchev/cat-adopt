import React from 'react';
import styles from './index.module.css';
import TextField from '@material-ui/core/TextField';


const FormControl = ({ id, label, name, value, type, onChange }) => {
    return (
        <div className={styles.input}>
            <TextField id={id} label={label} name={name} value={value}
                type={type || "text"} onChange={onChange} fullWidth={true}/>
        </div>
    )
}

export default FormControl;