// firebaseConfig.ts
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"; // Para autenticación
import { getFirestore } from "firebase/firestore"; // Para Firestore si lo usas
import { getMessaging } from "firebase/messaging"; // Para Cloud Messaging si lo usas

// Tu configuración de Firebase (reemplaza con tus datos de la consola de Firebase)
const firebaseConfig = {
  apiKey: "AIzaSyCKJdNV026fqf0WW2pyOek_MJUYW4UVfY8",
  authDomain: "todoreact-b1d61.firebaseapp.com", // Ajustado
  projectId: "todoreact-b1d61", // Ajustado
  storageBucket: "todoreact-b1d61.appspot.com", // Ajustado
  messagingSenderId: "606661374019", // Ajustado
  appId: "1:606661374019:android:59931f55683659ca8364f6" // Ajustado
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Para autenticación
export const db = getFirestore(app); // Si usas Firestore
export const messaging = getMessaging(app); // Si usas Cloud Messaging