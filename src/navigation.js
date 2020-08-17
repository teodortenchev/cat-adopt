import React, { useState, useEffect, useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import HomePageGuest from './pages/home';
import LogInPage from './pages/login';
import RegisterPage from './pages/register';
import ProfilePage from './pages/profile';
import CatCreatePage from './pages/cats/create';
import AllCatsPage from './pages/cats/all';
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

    const { isLoggedIn, isAdmin } = useContext(UserContext);

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
                <Route path="/cats/add">
                    {isAdmin ? <CatCreatePage /> : <Redirect to="/" />}
                </Route>
                <Route path="/cats/all" component={AllCatsPage} />
            </Switch>
        </BrowserRouter>
    ) : <div className={styles.loader}><CircularProgress size={100} /></div>
}

export default Navigation;
