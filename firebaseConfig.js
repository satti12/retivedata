import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDyrU6oblk-KqIrz05VQuNAeUVRretqXJc",
    authDomain: "retrive-30da4.firebaseapp.com",
    databaseURL: "https://retrive-30da4-default-rtdb.firebaseio.com",
    projectId: "retrive-30da4",
    storageBucket: "retrive-30da4.appspot.com",
    messagingSenderId: "901977038512",
    appId: "1:901977038512:web:be8fa2a41b7f865a392575"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;

