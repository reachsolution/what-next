import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBNiTPz6jri4ZYU00Ptve77BXTJ2ZM8I00",
  authDomain: "what-next-582c1.firebaseapp.com",
  projectId: "what-next-582c1",
  storageBucket: "what-next-582c1.appspot.com",
  messagingSenderId: "18199546625",
  appId: "1:18199546625:web:352dfc710775f40dab2900",
  measurementId: "G-07643490JV",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
