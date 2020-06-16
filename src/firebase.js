import * as firebase from 'firebase';
const config = {
    apiKey: "AIzaSyC-EDq4YhxFkAKpcJBw7WZoY_AnNwwYlTs",
    authDomain: "shopping-app-12474.firebaseapp.com",
    databaseURL: "https://shopping-app-12474.firebaseio.com",
    projectId: "shopping-app-12474",
    storageBucket: "shopping-app-12474.appspot.com",
    messagingSenderId: "1017266651709"
}
firebase.initializeApp(config);
const databaseRef = firebase.database().ref();
export const shoppingItemsRef = databaseRef.child("shoppingItems")