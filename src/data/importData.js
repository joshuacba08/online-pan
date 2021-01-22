import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({

    apiKey: process.env.API_KEY,
    authDomain: "online-pan.firebaseapp.com",
    projectId: "online-pan",
    storageBucket: "online-pan.appspot.com",
    messagingSenderId: "784031353755",
    appId: "1:784031353755:web:ed0496d0461ab544fdaf3e"
});

export function getFirebase () {
    return app;
}

export function getFirestore() {
    return firebase.firestore(app);
}