import firebase from "firebase";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyBRP625Vj5wTPFKOky4LHSx7zU7zGiqbyI",
  authDomain: "buildings-843aa.firebaseapp.com",
  projectId: "buildings-843aa",
  storageBucket: "buildings-843aa.appspot.com",
  messagingSenderId: "832828545793",
  appId: "1:832828545793:web:ee8c8f90d37d3c7fc0d900",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
export { db };
