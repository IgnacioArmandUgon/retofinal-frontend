import React from 'react'
import { Link } from 'react-router-dom'

const NavForm = () => {
  return (
    <nav className='navbar d-flex justify-content-center'>
      <div className='d-flex'>
        <Link className="nav-link" to="/form/factura"><h4>Factura</h4></Link>
        <Link className='nav-link' to="/form/volante"><h4>Volante</h4></Link>
      </div>
       
       
    </nav>
  )
}

export default NavForm