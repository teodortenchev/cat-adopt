import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePageGuest from './pages/home-guest';
import LogInPage from './pages/login';
import RegisterPage from './pages/register';
import ProfilePage from './pages/profile';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePageGuest} />
                <Route path="/login" component={LogInPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/profile" component={ProfilePage} />

            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;