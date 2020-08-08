import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyB7v6SJwuYkFGhC_D4hRe7YKPX8hZ5Kx1g",
    authDomain: "catfur-store.firebaseapp.com",
    databaseURL: "https://catfur-store.firebaseio.com",
    projectId: "catfur-store",
    storageBucket: "catfur-store.appspot.com",
    messagingSenderId: "113960966018",
    appId: "1:113960966018:web:97afa18c6212b25e38619b",
    measurementId: "G-9LV00FJRBQ"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
