import React from 'react'
import { Link } from 'react-router-dom'

const NavHistorial = () => {
  return (
    <nav className='navbar d-flex justify-content-center'>
      <div className='d-flex flex-row'>
        <Link className="nav-link" to="/historial/facturas"><h4>Facturas</h4></Link>
        <Link className='nav-link' to="/historial/volantes"><h4>Volantes</h4></Link>
      </div>
       
       
    </nav>
  )
}

export default NavHistorial