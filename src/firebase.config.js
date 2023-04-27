// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyASvF73wgE8oAcPeQXeyYJkv2OlDwXxf6A",
  authDomain: "news-portal-f6655.firebaseapp.com",
  projectId: "news-portal-f6655",
  storageBucket: "news-portal-f6655.appspot.com",
  messagingSenderId: "1003109857677",
  appId: "1:1003109857677:web:a4af117f048e96e588e5c4",
  measurementId: "G-ZNGR4C8DYL",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

const analytics = getAnalytics(app);
