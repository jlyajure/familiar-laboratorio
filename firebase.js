import { initializeApp } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBwBq4gLgv4DSfUidzUuC7Irmvj_4pCTtI",
  authDomain: "familia-yajure-app.firebaseapp.com",
  projectId: "familia-yajure-app",
  storageBucket: "familia-yajure-app.firebasestorage.app",
  messagingSenderId: "692035727386",
  appId: "1:692035727386:web:dfa3e39a481d56368a61a3"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
