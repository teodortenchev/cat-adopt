import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePageGuest from './pages/home-guest';
import LogInPage from './pages/login';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePageGuest} />
                <Route path="/login" component={LogInPage} />

            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;