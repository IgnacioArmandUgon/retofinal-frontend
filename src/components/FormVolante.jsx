import React from "react";
import { URL } from "../constantes";
import { useState, useRef } from "react";
import NavForm from "./NavFrom";
const FormVolante = () => {
  const [productos, setProductos] = useState([]);

  const proveedorRef = useRef("");
  const productosRef = useRef([{ nombreProducto: "", cantidad: 0 }]);
  const idProveedorRef = useRef(0);
  const cantidadRef = useRef(0);

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
        //productos: productos,
        idProveedor: idProveedorRef.current.value,
      }),
    });
  };

  const handleAgregar = (e) => {
    e.preventDefault();
    setProductos((previousState) => {
      return {
        ...previousState,
        nombreProducto: productosRef.current.value,
        cantidad: cantidadRef.current.value,
      };
    });
    console.log(productos);
  };
  return (
    <>
      <NavForm />
      <div className="containter ">
        <div className="row justify-content-center ">
          <h3 className=" m-4 text-center">Registre sus volantes</h3>
          <form className="form-group p-2 col-md-4 col-md-offset-5 align-center" onSubmit={handleSubmit}>
            
            <label className="m-1 form-group">Nombre proveedor  <input type="text" ref={proveedorRef} /></label>
            <p></p>
            
            <label className="m-1 form-group">Productos  <input type="text" ref={productosRef} /></label>
            
            <label className="m-1 form-group">Cantidad <input type="number" ref={cantidadRef} /></label>
          
            <p></p>
            
            <label>Documento del proveedor  <input type="number" ref={idProveedorRef} /></label>
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

export default FormVolante;
