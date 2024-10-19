import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyBkFFExGRe8wD1q1cpW2xWICs2-CeJ9y9s",
    authDomain: "authorisation-8a576.firebaseapp.com",
    projectId: "authorisation-8a576",
    storageBucket: "authorisation-8a576.appspot.com",
    messagingSenderId: "540291093248",
    appId: "1:540291093248:web:08153609528bde0ef799e5",
    measurementId: "G-FJRFGZDB2D",
      databaseURL: "https://authorisation-8a576-default-rtdb.firebaseio.com"
  };

  export const app = initializeApp(firebaseConfig);