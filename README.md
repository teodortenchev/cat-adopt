# Adopt-A-Cat Foundation

This is a web app for a homeless cat shelter. It has admin and normal user
functionality.

## Technology Stack Used

-   [React](https://reactjs.org/) – For front-end;

-   [Firebase](https://firebase.google.com) with Firestore DB - The back-end
    framework, which enables authentication and hosts the the DB.

## Getting started

These instructions will get you a copy of the project up and running on your
local machine for development and testing purposes.

### Installing

-   Install dependencies

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm install
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

-   Run the below command to start the application. It will open up on
    localhost:3000

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
npm start
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

## Functionality

### Public part (guest)

-   Can view the home page;

-   Browse animals available for adoption;

-   Login / Register;

### Private Part (authenticated users)

-   Home page with available actions;

-   Browse animals available for adoption;

-   Request adoption;

-   Check adoption request status in “My Adoptions”;

-   Profile page;

-   Edit user profile;

-   Logout;

### Unauthorized 

-   Custom error page for unathorized access or whenever a wrong url is typed in
    the address bar

## Granting admin access

To gain admin access add your registered email address in src -\> utils -\>
admin.js
