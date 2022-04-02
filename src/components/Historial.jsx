import React from "react";
import { URL } from "../constantes";
import { useState, useEffect } from "react";
import ListFacturas from "./ListFacturas";
import NavHistorial from "./NavHistorial";

const Historial = () => {
 
  

  return (
    <>
      <NavHistorial/>
      <h2 className="m-4 text-center">Revise aquí su historial de actividades!</h2>
    </>
  );
};

export default Historial;
