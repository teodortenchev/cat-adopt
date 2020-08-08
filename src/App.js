import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/header';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Header} />
      </Switch>
    </Router>
  );
}

export default App;
