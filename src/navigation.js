import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePageGuest from './pages/home-guest';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={HomePageGuest} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;