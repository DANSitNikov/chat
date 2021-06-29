import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBehXPzxxGpBt78BuJIasO19B-zi6U1QtE',
  authDomain: 'chat-7b806.firebaseapp.com',
  projectId: 'chat-7b806',
  storageBucket: 'chat-7b806.appspot.com',
  messagingSenderId: '1068089624266',
  appId: '1:1068089624266:web:eef37d18cdf571f02e9633',
  measurementId: 'G-XB8CVC2GS0',
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();

export default db;
