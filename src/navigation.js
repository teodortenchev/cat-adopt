import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePageGuest from './pages/home-guest';
import LogInPage from './pages/login';
import RegisterPage from './pages/register';
import ProfilePage from './pages/profile';
import { CircularProgress } from '@material-ui/core';
import styles from './navigation.module.css';
import firebase from './utils/firebase';
import UserContext from './Context';

const Navigation = (props) => {

    const [firebaseInitialized, setFirebaseInitialized] = useState(false);

    useEffect(() => {
        firebase.isInitialized().then(value => {
            setFirebaseInitialized(value)
        })
    })

    const { isLoggedIn, history } = useContext(UserContext)

    return firebaseInitialized !== false ? (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePageGuest} />

                { !isLoggedIn ? <Route path="/login" component={LogInPage} /> : <Route path="/login" component={HomePageGuest} />}

                <Route path="/register" component={RegisterPage} />
                <Route path="/profile" component={ProfilePage} />

            </Switch>
        </BrowserRouter>
    ) : <div className={styles.loader}><CircularProgress size={100} /></div>
}

export default Navigation;