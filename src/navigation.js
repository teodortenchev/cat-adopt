import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePageGuest from './pages/home-guest';
import LogInPage from './pages/login';
import RegisterPage from './pages/register';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePageGuest} />
                <Route path="/login" component={LogInPage} />
                <Route path="/register" component={RegisterPage} />

            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;