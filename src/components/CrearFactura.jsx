import React from "react";
import { URL } from "../constantes";
import { useState, useRef } from "react";

const CrearFactura = () => {
  //const [factura, setFactura] = useState({nombreCliente: "", empleadoQueAtendio: "", precioTotal: 0})
  const clienteRef = useRef("");
  const empleadoRef = useRef("");
  const precioRef = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    const request= {
      nombreCliente: clienteRef.current.value,
      empleadoQueAtendio: empleadoRef.current.value,
      precioTotal: precioRef.current.value
    }

    fetch(`${URL}/facturas`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    })

    return (
      <>
        <form onSubmit={(e) => handleSubmit()}>
          <input
            type="text"
            ref={clienteRef}
          />
          <label>Nombre cliente</label>
          <input
            type="text"
            ref={empleadoRef}
          />
          <label>Nombre empleado</label>
          <input
            type="number"
            ref={precioRef}
          />
          <label>Precio total</label>
          <input type="submit"/>
        </form>
      </>
    );
  };
};

export default CrearFactura;
