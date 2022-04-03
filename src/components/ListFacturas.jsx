import React from "react";
import { URL } from "../constantes";
import { useState, useEffect } from "react";
import NavHistorial from "./NavHistorial";

const ListFacturas = () => {
  const [facturas, setFacturas] = useState([]); //array vacio para que el map no se detenga al detectar error

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((data) => {
        setFacturas(data);
      });
  }, [facturas]);

  const handleDelete = (id) => {
    console.log(`${URL}/facturas/${id}`);
    fetch(`${URL}/facturas/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      <NavHistorial />
      <h3 className="m-4 text-center">Lista de facturas</h3>
      <div className="container">
        {facturas.map((factura) => (
          <div key={factura.id} className="m-2 row justify-content-center">
            <div
              className="card m-t2 d-flex flex-row p-3"
              style={{ maxWidth: "500px", minWidth: "250", minHeight: "200px" }}
            >
              <div className="w-50">
                <p>Nombre del cliente: {factura.nombreCliente}</p>
                <p>Nombre del empleado: {factura.empleadoQueAtendio}</p>
                <p>Precio total de la factura: {factura.precioTotal}</p>
                <p>Nombre del fecha: {factura.fecha}</p>
              </div>
              <div className="w-50">
                <p className="card-title">Productos</p>
                <ul>
                  {factura.comprados ? (
                    factura.comprados.map((comprado) => (
                      <li key={comprado.id}>{comprado.nombreProducto}</li>
                    ))
                  ) : (
                    <p></p>
                  )}
                </ul>
              </div>
              <button className="btn btn-primary h-25" onClick={() => handleDelete(factura.id)}>Borrar</button>
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default ListFacturas;
