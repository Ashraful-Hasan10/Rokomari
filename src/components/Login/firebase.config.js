import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBU2GH1H3uDBTGuYoDLEFyQ5OZ7k3-19Ao",
    authDomain: "practice-auth-1d293.firebaseapp.com",
    projectId: "practice-auth-1d293",
    storageBucket: "practice-auth-1d293.appspot.com",
    messagingSenderId: "309218010948",
    appId: "1:309218010948:web:885a0090079f2929579911"
  };

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
  
