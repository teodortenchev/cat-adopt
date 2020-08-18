import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
    apiKey: "AIzaSyB7v6SJwuYkFGhC_D4hRe7YKPX8hZ5Kx1g",
    authDomain: "catfur-store.firebaseapp.com",
    databaseURL: "https://catfur-store.firebaseio.com",
    projectId: "catfur-store",
    storageBucket: "catfur-store.appspot.com",
    messagingSenderId: "113960966018",
    appId: "1:113960966018:web:97afa18c6212b25e38619b",
    measurementId: "G-9LV00FJRBQ"
};

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
    }

    login(email, password) {
        return this.auth.signInWithEmailAndPassword(email, password);
    }

    logout() {
        return this.auth.signOut()
    }

    async register(name, email, password, photoUrl) {
        await this.auth.createUserWithEmailAndPassword(email, password);
        return this.auth.currentUser.updateProfile({
            displayName: name,
            photoURL: photoUrl
        })
    }

    async createCat(name, age, story, breed, imageUrl) {
        await this.db.collection("cats").add({
            name: name,
            age: age,
            story: story,
            breed: breed,
            imageUrl: imageUrl,
            CreationTime: new Date(),
            pendingAdoption: false,
            requestedBy: '',
            adoptedBy: ''
        })
    }

    async requestAdoption(catId, userId) {
        await this.db.collection('cats').doc(catId).set({ pendingAdoption: true, requestedBy: userId }, { merge: true })
    }

    async approveAdoption(catId, userId) {
        await this.db.collection('cats').doc(catId).set({ adoptedBy: userId, pendingAdoption: false }, { merge: true })
    }

    async rejectAdoption(catId, userId) {
        await this.db.collection('cats').doc(catId).set({ pendingAdoption: false, requestedBy: '' }, { merge: true })
    }

    async sendMessage(userId, message) {
        alert('implement send message')
    }

    async getMessages(userId) {
        alert('getMessages')
    }

    isInitialized() {
        return new Promise(resolve => {
            this.auth.onAuthStateChanged(resolve)
        })
    }

    getCurrentUsername() {
        return this.auth.currentUser && this.auth.currentUser.displayName
    }
}

export default new Firebase();
