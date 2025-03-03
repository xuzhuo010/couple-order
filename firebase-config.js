import { initializeApp } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-app.js";
import { getDatabase } from "https://www.gstatic.com/firebasejs/9.6.8/firebase-database.js";

export const firebaseConfig = {
  apiKey: "AIzaSyASblxqqr6OW5sCt6ZtSajT65C8hPMXLLs",
  authDomain: "couple-older.firebaseapp.com",
  databaseURL: "https://couple-older-default-rtdb.firebaseio.com",
  projectId: "couple-older",
  storageBucket: "couple-older.firebasestorage.app",
  messagingSenderId: "1088295875332",
  appId: "1:1088295875332:web:919653b9b5d183288f5651"
};

const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
