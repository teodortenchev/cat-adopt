import React, { useState, useEffect } from 'react';
import UserContext from './Context';
import firebase from './utils/firebase'


const App = (props) => {

  console.log(props);
  const [isLoggedIn, setIsLoggedIn] = useState(null);
  const [appUser, setUser] = useState(null);

  const login = (user) => {
    setIsLoggedIn(true);
    setUser(user);
  }

  const logout = () => {
    setIsLoggedIn(false);
    setUser('');
  }

  useEffect(() => {

    firebase.auth.onAuthStateChanged(function (user) {
      if (user) {
        login(user);
      } else {
        logout();
      }
    })
  })

  return (
    <UserContext.Provider value={{ isLoggedIn, appUser, logout: logout }}>
      {props.children}
      
    </UserContext.Provider>
  );
}

export default App;
