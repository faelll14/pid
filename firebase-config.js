import { initializeApp } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-app.js";
import { getDatabase, ref, onValue, set } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-database.js";
const firebaseConfig = {
  apiKey: "AIzaSyD2Dq80P_CivDw_p-bQnMZJxbPCLA1b2ec",
  authDomain: "pide-b8d78.firebaseapp.com",
  projectId: "pide-b8d78",
  storageBucket: "pide-b8d78.firebasestorage.app",
  messagingSenderId: "276100598462",
  appId: "1:276100598462:web:1f1e43034ef0003f62acef",
  databaseURL: "https://pide-b8d78-default-rtdb.asia-southeast1.firebasedatabase.app"
};
const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
export { db, ref, onValue, set };
