import React from 'react';
import { UserGreeting, AdminGreeting, GuestGreeting } from './greetings';


const WelcomeContent = ({ isLoggedIn, isAdmin, appUser }) => {

    if (isLoggedIn && isAdmin) {
        return <AdminGreeting user={appUser} />
    } 
    else if (isLoggedIn){
        return <UserGreeting user={appUser} />

    }
    
    return <GuestGreeting />
}
export default WelcomeContent;