import React from 'react'
import { Link } from 'react-router-dom'

const NavHistorial = () => {
  return (
    <nav className='navbar'>
      <div className='d-flex flex-row'>
        <Link className="nav-link" to="/historial/facturas">Facturas</Link>
        <Link className='nav-link' to="/historial/volantes">Volantes</Link>
      </div>
       
       
    </nav>
  )
}

export default NavHistorial