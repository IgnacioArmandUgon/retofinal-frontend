import React from 'react'
import { URL } from '../constantes'
import { useState, useEffect } from 'react';

const Inventory = () => {
  const [facturas, setFacturas] = useState([]);//array vacio para que el map no se detenga al detectar error
    

  useEffect(() => {
  
      fetch(URL)
          .then(response => response.json())
          .then((data) => {
              setFacturas(data);
          });
  }, [facturas]);
  return (
    <>
    <h3>Lista de facturas</h3>
    <div>

    {   
        
        facturas.map(factura => (
          <div key={factura.id} className='col mb-4'>
            <div className='card m-t2' style={{maxWidth: "300px", minWidth: "250"}} >
                <p >Nombre del cliente:{factura.nombreCliente}</p>
                <p>Nombre del empleado:{factura.empleadoQueAtendio}</p>
                <p>Precio total de la factura:{factura.precioTotal}</p>
                <p>Nombre del cliente:{factura.nombreCliente}</p>
                <ol> 
                    {factura.comprados? factura.comprados.map(comprado => (<li>{comprado.nombreProducto}</li>)): <p></p>}
                </ol>
            </div>
          </div>
            
        ) )
    }
    </div>
        
    </>
  )
}

export default Inventory