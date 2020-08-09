import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import FormControl from '../../components/form-control'
import Title from '../../components/title'
import PageLayout from '../../components/page-layout';
import styles from './index.module.css';
import Button from '../../components/button/submit-button';


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
                <form className={styles.form}>
                    <FormControl htmlFor="userEmail" fieldName="Email" type="email" name="userEmail"
                        value={email} placeholder="Email Address" id="userEmail"
                        onChange={(event) => onChangeHandler(event)} />

                    <FormControl htmlFor="userPassword" fieldName="Password" type="password" name="userPassword"
                        value={password} placeholder="Password" id="userPassword"
                        onChange={(event) => onChangeHandler(event)} />
                    <Button title="Sign In"
                        onClick={(event) => signInWithEmailAndPasswordHandler(event, email, password)} />
                </form>

                <Link to="/register" className={styles.link}>
                    No Account? Sign up here
          </Link>
                
                <Link to="/passwordReset" className={styles.link}>
                    Forgot Password?
          </Link>
            </div>
        </PageLayout>
    )
}

export default LogInPage;