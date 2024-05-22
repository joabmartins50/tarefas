import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD3IP6aI0ImOylFJgmClZWloN532CqDHvw",
  authDomain: "tarefasplus-8edb2.firebaseapp.com",
  projectId: "tarefasplus-8edb2",
  storageBucket: "tarefasplus-8edb2.appspot.com",
  messagingSenderId: "512756717534",
  appId: "1:512756717534:web:bb38d9ce362c73ad672f4f"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

export { db };