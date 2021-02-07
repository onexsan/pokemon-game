import firebase from "firebase/app";
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyC411SaJoccTFNj6jFrlQK9ttFq62tBwdo",
  authDomain: "pokemon-game-5f89d.firebaseapp.com",
  databaseURL: "https://pokemon-game-5f89d-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-5f89d",
  storageBucket: "pokemon-game-5f89d.appspot.com",
  messagingSenderId: "472757784550",
  appId: "1:472757784550:web:f67db61ae227666a07d027"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;

