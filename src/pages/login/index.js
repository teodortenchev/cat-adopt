import React, { useState } from 'react';
import SimpleLink from '../../components/links/simple-link';
import FormControl from '../../components/form-control'
import Title from '../../components/title'
import PageLayout from "../layouts/page-layout";
import FormWrapper from '../../components/form-wrapper';
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
            <FormWrapper>
                <Title title="Sign In" />

                <FormControl htmlFor="userEmail" fieldName="Email" type="email" name="userEmail"
                    value={email} placeholder="Email Address" id="userEmail"
                    onChange={(event) => onChangeHandler(event)} />

                <FormControl htmlFor="userPassword" fieldName="Password" type="password" name="userPassword"
                    value={password} placeholder="Password" id="userPassword"
                    onChange={(event) => onChangeHandler(event)} />
               
                <Button title="Sign In"
                    onClick={(event) => signInWithEmailAndPasswordHandler(event, email, password)} />
                
                <SimpleLink title="No Account? Sign up here" to="/register" />

                <SimpleLink title="Forgot password" to="/passwordReset" />
            </FormWrapper>



        </PageLayout >
    )
}

export default LogInPage;