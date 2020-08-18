import React from 'react';
import styles from './index.module.css';
import TextField from '@material-ui/core/TextField';


const FormControl = ({ id, label, name, value, type, onChange, multiline, rowsMax }) => {
    return (
        <div className={styles.input}>
            <TextField id={id} label={label} name={name} value={value}
                type={type || "text"} onChange={onChange} fullWidth={true} multiline={multiline || false} rowsMax={rowsMax || 1} />
        </div>
    )
}

export default FormControl;