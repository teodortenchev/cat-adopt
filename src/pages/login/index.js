import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormControl from '../../components/form-control'
import Title from '../../components/title'
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';


const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const signInWithEmailAndPasswordHandler = (event, email, password) => {
        event.preventDefault();
    };

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }

    }

    return (
        <PageLayout>
            <div className={styles.container}>
                <Title title="Sign In" />
                <form>
                    <FormControl htmlFor="userEmail" fieldName="Email" type="email" name="userEmail"
                        value={email} placeholder="E.g. teo@gmail.com" id="userEmail"
                        onChange={(event) => onChangeHandler(event)} />
                </form>
            </div>
        </PageLayout>
    )
}

export default LogInPage;