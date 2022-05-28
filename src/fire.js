// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.7.0/firebase-app.js";
import firebase from 'firebase/compat/app' 

const firebaseConfig = {
  apiKey: "AIzaSyA5hfT_mMe4s5Uecy6XV_Bd9leQPjkgYwU",
  authDomain: "e-yellow.firebaseapp.com",
  projectId: "e-yellow",
  storageBucket: "e-yellow.appspot.com",
  messagingSenderId: "739402001300",
  appId: "1:739402001300:web:5e4872a473b26eb22e7d81"
};

const fire = firebase.initializeApp(firebaseConfig);

export const firebaseRT= firebase;
export default fire;