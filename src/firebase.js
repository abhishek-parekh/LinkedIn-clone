import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDPgK1dEjrCcFO1LZ_uQ6xQocbN3a17_p4",
    authDomain: "linkedin-clone-cad16.firebaseapp.com",
    projectId: "linkedin-clone-cad16",
    storageBucket: "linkedin-clone-cad16.appspot.com",
    messagingSenderId: "607952584581",
    appId: "1:607952584581:web:f0b30028de0737bbe9ceec",
    measurementId: "G-BFQP3121RF"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db,auth};