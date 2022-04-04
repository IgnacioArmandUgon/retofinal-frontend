import React from "react";
import { URL } from "../constantes";
import { useRef } from "react";
import NavForm from "./NavFrom";

const FormFactura = () => {
  const clienteRef = useRef("");
  const empleadoRef = useRef("");
  const precioRef = useRef(0);
  const martillosRef = useRef(0);
  const sierrasRef = useRef(0);
  const cuerdaRef = useRef(0);
  const cableRef = useRef(0);
  let mensaje = "";
  let total = 0;

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      clienteRef.current.value !== "" &&
      empleadoRef.current.value !== "" &&
      precioRef.current.value !== 0
    ) {
      mensaje = "";
      total =
        parseInt(`${50 * martillosRef.current.value}`) +
        parseInt(`${75 * sierrasRef.current.value}`) +
        parseInt(`${10 * cuerdaRef.current.value}`) +
        parseInt(`${15 * cableRef.current.value}`);

      fetch(`${URL}/facturas`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombreCliente: clienteRef.current.value,
          empleadoQueAtendio: empleadoRef.current.value,
          precioTotal: total,
          comprados: [
            {
              nombreProducto: "martillo",
              cantidad: parseInt(martillosRef.current.value),
              precio: parseInt(`${50 * martillosRef.current.value}`),
            },
            {
              nombreProducto: "sierra",
              cantidad: parseInt(martillosRef.current.value),
              precio: parseInt(`${75 * sierrasRef.current.value}`),
            },
            {
              nombreProducto: "cuerda",
              cantidad: parseInt(cuerdaRef.current.value),
              precio: parseInt(`${10 * cuerdaRef.current.value}`),
            },
            {
              nombreProducto: "cable",
              cantidad: parseInt(cableRef.current.value),
              precio: parseInt(`${15 * cableRef.current.value}`),
            },
          ],
        })
      })

      fetch(`${URL}/productos/3d7`, {
        method: "PUT",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(
          {
            "id": "3d7",
            "nombreProducto": "Martillo testeado",
            "cantidad": 100,
           "precio": 50
        
        })
    
      })
     

    } else {
      mensaje = "Ningun campo puede estar vacío";
    }
  };
  return (
    <>
      <NavForm />
      <div className="containter m-2">
        <div className="row justify-content-center ">
          <h3 className=" m-4 text-center">Registre sus facturas</h3>
          <form
            className="form-group p-2 col-md-4 col-md-offset-5 align-center "
            onSubmit={handleSubmit}
          >
            <label className="m-1 form-group">
              Nombre cliente <input type="text" ref={clienteRef} />
            </label>
            <p></p>

            <label className="m-1 form-group">
              Nombre empleado <input type="text" ref={empleadoRef} />
            </label>
            <p></p>
            <label className="m-1 form-group">
              Martillos <input type="number" ref={martillosRef} />
            </label>
            <label className="m-1 form-group">
              Sierra <input type="number" ref={sierrasRef} />
            </label>
            <label className="m-1 form-group">
              Cuerda{" "}
              <input type="number" placeholder="metros..." ref={cuerdaRef} />
            </label>
            <label className="m-1 form-group">
              Cable{" "}
              <input type="number" placeholder="metros..." ref={cableRef} />
            </label>
            <p></p>
            <label className="m-1 form-group">
              Precio total: {total}
            </label>
            <p></p>
            <button className="btn btn-primary w-100" type="submit">
              Enviar
            </button>
            <p className="text-danger">{mensaje}</p>
          </form>
        </div>
      </div>
    </>
  );
};

export default FormFactura;
