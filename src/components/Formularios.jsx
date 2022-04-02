import React from "react";
import { URL } from "../constantes";
import { useState, useEffect } from "react";
import ListFacturas from "./ListFacturas";
import NavForm from "./NavFrom";
const Formularios = () => {
 
  

  return (
    <>
      <NavForm/>
      <h2 className="m-4 text-center">Registre aquí sus formularios!</h2>
    </>
  );
};

export default Formularios;
