import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPHCBbieerIh4KAKVTReakZxx3elS_dHE",
  authDomain: "blogapp-c39cd.firebaseapp.com",
  databaseURL:
    "https://blogapp-c39cd-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "blogapp-c39cd",
  storageBucket: "blogapp-c39cd.appspot.com",
  messagingSenderId: "495100505159",
  appId: "1:495100505159:web:2e6d18e31b94688bdc5562",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getDatabase(app, firebaseConfig.databaseURL);

export { db };
