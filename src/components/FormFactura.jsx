import React from "react";
import { URL } from "../constantes";
import { useState, useRef } from "react";
import NavForm from "./NavFrom";

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
        precioTotal: precioRef.current.value,
      }),
    });
  };
  return (
    <>
      <NavForm />
      <div className="containter ">
        <div className="row justify-content-center ">
          <h3 className=" m-4 text-center">Registre sus facturas</h3>
          <form className="form-group p-2 col-md-4 col-md-offset-5 align-center " onSubmit={handleSubmit}>
            <label className="m-1 form-group">
              Nombre cliente <input type="text" ref={clienteRef} />
            </label>
            <p></p>

            <label className="m-1 form-group">
              Nombre empleado <input type="text" ref={empleadoRef} />
            </label>
            <p></p>

            <label className="m-1 form-group">
              Precio total <input type="number" ref={precioRef} />
            </label>
            <p></p>
            <button className="btn btn-primary w-100" type="submit">
              Enviar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormFactura;
