import React from 'react'
import { Link } from 'react-router-dom'

const NavForm = () => {
  return (
    <nav className='navbar'>
      <div className='d-flex flex-row'>
        <Link className="nav-link" to="/crear/factura">Factura</Link>
        <Link className='nav-link' to="/crear/volante">Volante</Link>
      </div>
       
       
    </nav>
  )
}

export default NavForm