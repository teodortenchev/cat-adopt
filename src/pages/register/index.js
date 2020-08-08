import React, { Component } from 'react';
import styles from './index.module.css';
import PageLayout from '../../components/page-layout';
import Title from '../../components/title'
//import SubmitButton from '../../components/button/submit-button';
import FormControl from '../../components/formControl';
//import authenticate from '../../utils/authenticate';
import UserContext from '../../Context';

class RegisterPage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            rePassword: ""
        };
    }

   // static contextType = UserContext

    handleSubmit = async event => {
        event.preventDefault();

        const { username, password, rePassword } = this.state;

        await authenticate('http://localhost:9999/api/user/register', { username, password }, (user) => {
            console.log('Successful register');
            this.context.logIn(user);
            this.props.history.push('/');
        }, (e) => {
            console.log('Error', e)
        })
    }

    handleChange = (event, type) => {
        const newState = {};
        newState[type] = event.target.value;
        this.setState(newState);
    }


    render() {

        const { username, password, rePassword } = this.state;

        return (
            <PageLayout>
                <Title title="Register Page" />

                <div className={styles.container}>

                    <form onSubmit={this.handleSubmit} >
                        <FormControl fieldName="Email" fieldType="text" id="username"
                            autocomplete="" value={username} onChange={(e) => this.handleChange(e, 'username')} />
                        <FormControl fieldName="Password" fieldType="password" id="password"
                            autocomplete="" value={password} onChange={(e) => this.handleChange(e, 'password')} />
                        <FormControl fieldName="Confirm Password" fieldType="password" id="rePassword"
                            autocomplete="" value={rePassword} onChange={(e) => this.handleChange(e, 'rePassword')} />
                        <div>
                            <SubmitButton title="Register" />
                        </div>
                    </form>
                </div>
            </PageLayout>
        )
    }
}

export default RegisterPage;