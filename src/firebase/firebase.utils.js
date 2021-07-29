import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCTnqtwUvknX90W4GPkv4TMKXbHYsdta4k",
    authDomain: "store-db-c77b8.firebaseapp.com",
    projectId: "store-db-c77b8",
    storageBucket: "store-db-c77b8.appspot.com",
    messagingSenderId: "820895165512",
    appId: "1:820895165512:web:ec828ef32ca0599dd8fc7d"
};
  
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
