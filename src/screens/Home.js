import React from 'react'
import firebaseApp from "../firebase/credenciales";
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);


const Home = () => {
  return (
    <div>
    <h1>Home</h1>
    <button onClick={() => signOut(auth)}>Cerrar sesión</button>
    </div>
  )
}

export default Home