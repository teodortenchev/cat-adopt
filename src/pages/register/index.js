import React, { useState } from 'react';
import SimpleLink from '../../components/links/simple-link';
import FormControl from '../../components/form-control'
import Title from '../../components/title'
import PageLayout from "../layouts/page-layout";
import Button from '../../components/button/submit-button';
import FormWrapper from '../../components/form-wrapper';
import firebase from '../../utils/firebase';
import styles from './index.module.css'

const RegisterPage = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rePassword, setRePassword] = useState('');

    const [displayName, setDisplayName] = useState('');

    const [error, setError] = useState(null);


    async function register() {

        if (password !== rePassword) {
            setError("Password must match!");
        }
        else {
            try {
                await firebase.register(displayName, email, password)
                props.history.push('/')
            } catch (error) {
                setError(error.message);
            }
        }

    }

    const onChangeHandler = (event) => {
        const { name, value } = event.currentTarget;

        if (name === 'userEmail') {
            setEmail(value);
        }
        else if (name === 'userPassword') {
            setPassword(value);
        }
        else if (name === 'rePassword') {
            setRePassword(value);
        }
        else if (name === 'displayName') {
            setDisplayName(value)
        }
    }

    return (
        <PageLayout>
            <FormWrapper>
                <Title title="Sign Up" />
                <div className={styles.error}>{error}</div>
                <FormControl htmlFor="displayName" fieldName="DisplayName" type="text" name="displayName"
                    value={displayName} placeholder="Your Name (e.g. John Doe)" id="displayName"
                    onChange={(event) => onChangeHandler(event)} />
                <FormControl htmlFor="userEmail" fieldName="Email" type="email" name="userEmail"
                    value={email} placeholder="Email Address (e.g. mishka@gmail.com)" id="userEmail"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl htmlFor="userPassword" fieldName="Password" type="password" name="userPassword"
                    value={password} placeholder="Password" id="userPassword"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl htmlFor="rePassword" fieldName="Confirm Password" type="password" name="rePassword"
                    value={rePassword} placeholder="Confirm password" id="rePassword"
                    onChange={(event) => onChangeHandler(event)} />

                <Button title="Register"
                    onClick={register} />

                <SimpleLink title="Already registered? Log in here" to="/login" />

            </FormWrapper>
        </PageLayout>
    )
}

export default RegisterPage;