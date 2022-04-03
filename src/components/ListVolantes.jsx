import React from "react";
import { URL } from "../constantes";
import { useState, useEffect } from "react";
import NavHistorial from "./NavHistorial";

const ListVolantes = () => {
  const [volantes, setVolantes] = useState([]); //array vacio para que el map no se detenga al detectar error

  useEffect(() => {
    fetch(`${URL}/volantes`)
      .then((response) => response.json())
      .then((data) => {
        setVolantes(data);
      });
  }, [volantes]);

  const handleDelete = (id) => {
    console.log(`${URL}/volantes/${id}`);
    fetch(`${URL}/volantes/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <>
      <NavHistorial />
      <h3 className="m-4 text-center">Lista de volantes</h3>
      <div className="container">
        {volantes.map((volante) => (
          <div key={volante.id} className="m-2 row justify-content-center">
            <div
              className="card m-t2 d-flex flex-row p-3"
              style={{ maxWidth: "500px", minWidth: "250", minHeight: "200px" }}
            >
              <div className="m-1 w-50">
                <p>Nombre del proveedor: {volante.nombreProveedor}</p>
                <p>Documento del proveedor: {volante.idProveedor}</p>
              </div>
              <div className="border m-1 w-50">
                <p className="card-title">Productos</p>
                <ul>
                  {volante.productos ? ( 
                    volante.productos.map((producto) => (
                      <li key={producto.id}>{producto.nombreProducto}: {producto.cantidad}</li>
                    ))
                  ) : (
                    <p></p>
                  )}
                </ul>
              </div>
              <button className="btn btn-primary h-25" onClick={() => handleDelete(volante.id)}>Borrar</button>
            </div>
            
          </div>
        ))}
      </div>
    </>
  );
};

export default ListVolantes;
