import React from "react";
import { URL } from "../constantes";
import { useState, useRef } from "react";

const CrearFactura = () => {
  const clienteRef = useRef("");
  const empleadoRef = useRef("");
  const precioRef = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${URL}/facturas`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombreCliente: clienteRef.current.value,
        empleadoQueAtendio: empleadoRef.current.value,
        precioTotal: precioRef.current.value
      }),
    });
  };
    return (
      <>
        <form onSubmit={handleSubmit}>
          <input type="text" ref={clienteRef} />
          <label>Nombre cliente</label>
          <input type="text" ref={empleadoRef} />
          <label>Nombre empleado</label>
          <input type="number" ref={precioRef} />
          <label>Precio total</label>
          <button type="submit">Enviar</button>
        </form>
      </>
    );
  };


export default CrearFactura;
