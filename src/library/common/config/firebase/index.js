import firebase from 'firebase';

const firebaseConfig = {};

export const registerConfig = {};

export const forgotPasswordConfig = {};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

export const auth = firebase.auth();

export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
