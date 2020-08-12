import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
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

    const { isLoggedIn, appUser } = useContext(UserContext);
    console.log(appUser);

    return firebaseInitialized !== false ? (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePageGuest} />
                <Route path="/login">
                    {!isLoggedIn ? <LogInPage /> : <Redirect to="/" />}
                </Route>
                <Route path="/register">
                    {!isLoggedIn ? <RegisterPage /> : <Redirect to="/" />}
                </Route>
                <Route path="/profile">
                    {isLoggedIn ? <ProfilePage /> : <Redirect to="/" />}
                </Route>

            </Switch>
        </BrowserRouter>
    ) : <div className={styles.loader}><CircularProgress size={100} /></div>
}

export default Navigation;