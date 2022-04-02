import React, { useState } from "react";
import firebaseApp from "../firebase/credenciales";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";
const auth = getAuth(firebaseApp);

const Login = () => {
  const firestore = getFirestore(firebaseApp);
  const [isRegistrando, setIsRegistrando] = useState(false);

  async function registrarUsuario(email, password) {
    console.log("entré a registrarUsuario")
    const infoUsuario = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    ).then((usuarioFirebase) => {
      return usuarioFirebase;
    });
    console.log("infoUsuario: "+infoUsuario);

    const docuRef = doc(firestore, `usuario/${infoUsuario.user.uid}`);
    console.log("creé el docuRef")
    console.log(`usuario/${infoUsuario.user.uid}`)

    setDoc(docuRef, { correo: email});
    console.log("tiré el setDoc")
  }

  function handleSubmit(e) {
    console.log("recien entre al handleSubmit")
    e.preventDefault();
    console.log("prevent default")
    const email = e.target.elements.email.value;
    console.log("creado email")
    const password = e.target.elements.password.value;
    console.log("creado password")

    if (isRegistrando) {
      console.log("entré al if de registrar")
      registrarUsuario(email, password);
    }else{
      console.log("entré al if de ingresar")
        signInWithEmailAndPassword(auth, email, password)
    }
  }

  return (
    <div className="form-group" >
      <h1 className="text-center"> {isRegistrando ? "Registrarse" : "Inicia sesión"}</h1>
      <form  onSubmit={handleSubmit}>
        <label>
          Correo: <input className="form-control" type="email" id="email" />
        </label>
        <label>
          Contraseña: <input className="form-control" type="password" id="password" />
        </label>
        <input
          className="btn btn-secondary"
          type="submit"
          value={isRegistrando ? "Registrar" : "Iniciar sesión"}
        />
      </form>
      <button className="btn btn-primary" onClick={() => setIsRegistrando(!isRegistrando)}>
        {isRegistrando ? "Ya tengo una cuenta" : "Quiero registrarme"}
      </button>
    </div>
  );
};

export default Login;
