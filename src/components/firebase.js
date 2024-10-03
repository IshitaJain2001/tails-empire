

import firebase from "firebase/compat/app";
import "firebase/compat/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCu1mwawbgfkS7XMBVQRMiFJDiWfCRTODM",
  authDomain: "tails-empire.firebaseapp.com",
  projectId: "tails-empire",
  storageBucket: "tails-empire.appspot.com",
  messagingSenderId: "869621137996",
  appId: "1:869621137996:web:9ed4984903090f7b57aae9",
  measurementId: "G-SNT7ZWS5FF"
};


firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

