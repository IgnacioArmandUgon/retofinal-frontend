import React from "react";
import firebaseApp from "../firebase/credenciales";
import 'animate.css';
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth(firebaseApp);


const Home = () => {
  return (
    <div className="containter animate__animated animate__fadeInDown animate__faster mt-4">
      <div className="row justify-content-center ">
        <h1 className="m-4 text-center">Bienvenido</h1>
        <div className="form-group p-2 col-md-4 col-md-offset-5 align-center ">
          <button
            className="w-100 mt-2 btn btn-primary align-center"
            onClick={() => signOut(auth)}
          >
            Cerrar sesión
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
