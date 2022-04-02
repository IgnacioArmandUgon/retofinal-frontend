// Importamos la función para inicializar la aplicación de Firebase
import { initializeApp } from "firebase/app";

// Añade aquí tus credenciales
const firebaseConfig = {
    apiKey: "AIzaSyBQmAzn40JuXADtv1-smIOpU1POrluAENI",
    authDomain: "pruebafirebase-e8c11.firebaseapp.com",
    projectId: "pruebafirebase-e8c11",
    storageBucket: "pruebafirebase-e8c11.appspot.com",
    messagingSenderId: "149825988688",
    appId: "1:149825988688:web:9c603e6805b2e12974c955"
};

// Inicializamos la aplicación y la guardamos en firebaseApp
const firebaseApp = initializeApp(firebaseConfig);
// Exportamos firebaseApp para poder utilizarla en cualquier lugar de la aplicación
export default firebaseApp;