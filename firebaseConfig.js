// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Para autenticación
import { getFirestore } from "firebase/firestore"; // Para Firestore si lo usas

// Tu configuración de Firebase (reemplaza con tus datos de la consola de Firebase)
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "your-app.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-app.appspot.com",
  messagingSenderId: "SENDER_ID",
  appId: "APP_ID"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Para autenticación
export const db = getFirestore(app); // Si usas Firestore
