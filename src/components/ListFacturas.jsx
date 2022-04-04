import React from "react";
import { URL } from "../constantes";
import { useState, useEffect } from "react";
import NavHistorial from "./NavHistorial";
import { Provider } from "react-redux";
import store from "../store";

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
      <Provider store={store}>
        <NavHistorial />
        <h3 className="m-4 text-center">Lista de facturas</h3>
        <div className="container m-2">
          {facturas.map((factura) => (
            <div key={factura.id} className="m-2 row justify-content-center">
              <div
                className="card m-t2 d-flex flex-row p-3"
                style={{
                  maxWidth: "500px",
                  minWidth: "250",
                  minHeight: "200px",
                }}
              >
                <div className="w-50 m-1">
                  <p>Nombre del cliente: {factura.nombreCliente}</p>
                  <p>Nombre del empleado: {factura.empleadoQueAtendio}</p>
                  <p>Precio total de la factura: {factura.precioTotal}</p>
                  <p>Nombre del fecha: {factura.fecha}</p>
                </div>
                <div className="border m-1 w-50">
                  <p className="card-title">Productos</p>
                  <ul className="list-group">
                    {factura.comprados ? (
                      factura.comprados.map((comprado) => (
                        <li className="list-group-item " key={comprado.id}>
                          {comprado.cantidad > 0
                            ? `${comprado.nombreProducto} ${comprado.cantidad}`
                            : ""}
                        </li>
                      ))
                    ) : (
                      <p></p>
                    )}
                  </ul>
                </div>
                <button
                  className="btn btn-primary h-25"
                  onClick={() => handleDelete(factura.id)}
                >
                  Borrar
                </button>
              </div>
            </div>
          ))}
        </div>
        <p className="text-muted text-center">
          {facturas.length === 0
            ? "En terminos de facturas tenemos 0 facturas"
            : ""}
        </p>
      </Provider>
    </>
  );
};

export default ListFacturas;
