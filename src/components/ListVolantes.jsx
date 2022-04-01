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
    <NavHistorial/>
      <h3 className="m-4">Lista de volantes</h3>
      <div className="m-4">
        {volantes.map((volante) => (
          <div key={volante.id} className="col mb-4">
            <div
              className="card m-t2 d-flex flex-row p-3"
              style={{ maxWidth: "500px", minWidth: "250" }}
            >
              <div className="w-50">
                <p>Nombre del proveedor: {volante.nombreProveedor}</p>
                <p>Documento del proveedor: {volante.idProveedor}</p>
              </div>
              <div className="w-50">
                <p className="card-title">Productos</p>
                <ul>
                  {volante.productos ? (
                    volante.productos.map((producto) => (
                      <li key={producto.id}>{producto.nombreProducto}</li>
                    ))
                  ) : (
                    <p></p>
                  )}
                </ul>
              </div>
              
            </div>
            <button onClick={() => handleDelete(volante.id)}>Borrar</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default ListVolantes;
