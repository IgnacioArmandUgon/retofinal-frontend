import React from "react";
import { URL } from "../constantes";
import { useState, useRef } from "react";
import NavForm from "./NavFrom";
const FormVolante = () => {
  const proveedorRef = useRef("");
  const productosRef = useRef([{}]);
  const idProveedorRef = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`${URL}/volantes`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        nombreProveedor: proveedorRef.current.value,
        productos: [{nombreProducto: productosRef.current.value}],
        idProveedor: idProveedorRef.current.value
      }),
    });
  };
    return (
      <>
      <NavForm/>
      <h3 className=" m-4">Registre sus volantes</h3>
        <form className="form m-4"  onSubmit={handleSubmit}>
          <input type="text" ref={proveedorRef} />
          <label>Nombre proveedor</label>
          <p></p>
          <input type="text" ref={productosRef} />
          <label>Productos</label>
          <p></p>
          <input type="number" ref={idProveedorRef} />
          <label>Documento del proveedor</label>
          <p></p>
          <button className="btn btn-primary" type="submit">Enviar</button>
        </form>
      </>
    );
  };


export default FormVolante;
