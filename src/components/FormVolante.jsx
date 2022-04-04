import React from "react";
import { URL } from "../constantes";
import {  useRef } from "react";
import NavForm from "./NavFrom";
const FormVolante = () => {
  const proveedorRef = useRef("");
  const martillosRef = useRef(0);
  const sierrasRef = useRef(0);
  const cuerdaRef = useRef(0);
  const cableRef = useRef(0);
  const idProveedorRef = useRef(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    const request = {
      nombreProveedor: proveedorRef.current.value,
      productos: [
        {
          nombreProducto: "martillo",
          cantidad: parseInt(martillosRef.current.value),
          precio: parseInt(`${50*martillosRef.current.value}`),
        },
        {
          nombreProducto: "sierra",
          cantidad: parseInt(martillosRef.current.value),
          precio: parseInt(`${75*sierrasRef.current.value}`),
        },
        {
          nombreProducto: "cuerda",
          cantidad: parseInt(cuerdaRef.current.value),
          precio: parseInt(`${10*cuerdaRef.current.value}`),
        },
        {
          nombreProducto: "cable",
          cantidad: parseInt(cableRef.current.value),
          precio: parseInt(`${15*cableRef.current.value}`),
        },
      ],
      idProveedor: idProveedorRef.current.value,
    }
    console.log(request)
    fetch(`${URL}/volantes`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
  };

  return (
    <>
      <NavForm />
      <div className="containter m-2">
        <div className="row justify-content-center ">
          <h3 className=" m-4 text-center">Registre sus volantes</h3>
          <form
            className="form-group p-2 col-md-4 col-md-offset-5 align-center"
            onSubmit={handleSubmit}
          >
            <label className="m-1 form-group">
              Nombre proveedor <input type="text" ref={proveedorRef} />
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

            <label>
              Documento del proveedor{" "}
              <input type="number" ref={idProveedorRef} />
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

export default FormVolante;
