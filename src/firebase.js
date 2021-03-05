import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBCs-YEXBkTX8nE_1VGXZQ-3ZGJdDqTcHw",
  authDomain: "messenger-clone-react-f1740.firebaseapp.com",
  projectId: "messenger-clone-react-f1740",
  storageBucket: "messenger-clone-react-f1740.appspot.com",
  messagingSenderId: "745369050244",
  appId: "1:745369050244:web:f5178d609594b23d0776d1",
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
