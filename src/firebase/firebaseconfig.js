import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAIg0sy3MWVJn-mwI64bTekP9CcJI2-ZFQ",
  authDomain: "fb-proyectofinalreact.firebaseapp.com",
  projectId: "fb-proyectofinalreact",
  storageBucket: "fb-proyectofinalreact.appspot.com",
  messagingSenderId: "155838963373",
  appId: "1:155838963373:web:ae2bf9a750fda4622cb024",
  measurementId: "G-XMQ6T4N92L"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);