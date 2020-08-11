import React, { useState } from 'react';
import SimpleLink from '../../components/links/simple-link';
import FormControl from '../../components/form-control'
import Title from '../../components/title'
import PageLayout from "../layouts/page-layout";
import FormWrapper from '../../components/form-wrapper';
import Button from '../../components/button/submit-button';
import firebase from '../../utils/firebase';
import styles from './index.module.css'

const LogInPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [error, setError] = useState('');

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
    }

    async function login() {
        try {
            await firebase.login(email, password);
            props.history.push('/');


        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <PageLayout>
            <FormWrapper>
                <Title title="Sign In" />
                <div className={styles.error}>{error}</div>
                <FormControl htmlFor="userEmail" fieldName="Email" type="email" name="userEmail"
                    value={email} placeholder="Email Address" id="userEmail"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl htmlFor="userPassword" fieldName="Password" type="password" name="userPassword"
                    value={password} placeholder="Password" id="userPassword"
                    onChange={(event) => onChangeHandler(event)} />

                <Button title="Sign In"
                    onClick={login} />

                <SimpleLink title="No Account? Sign up here" to="/register" />

                <SimpleLink title="Forgot password" to="/passwordReset" />
            </FormWrapper>



        </PageLayout >
    )
}

export default LogInPage;