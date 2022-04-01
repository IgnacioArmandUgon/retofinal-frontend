import React from "react";
import { URL } from "../constantes";
import { useState, useRef } from "react";

const FormFactura = () => {
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
      <h3 className=" m-4">Registre sus facturas</h3>
        <form className="form m-4"  onSubmit={handleSubmit}>
          <input type="text" ref={clienteRef} />
          <label>Nombre proveedor</label>
          <p></p>
          <input type="text" ref={empleadoRef} />
          <label>Documento del proveedor</label>
          <p></p>
          <input type="number" ref={precioRef} />
          <label>Precio total</label>
          <p></p>
          <button className="btn btn-primary" type="submit">Enviar</button>
        </form>
      </>
    );
  };


export default FormFactura;
