import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className='navbar navbar-dark bg-dark'>
      <div className='d-flex flex-row'>
        <Link className="navbar-brand nav-link" to="/">Home</Link>
        <Link className="nav-link" to="/historial">Historial</Link>
        <Link className='nav-link' to="/formVolantes">Crear volante</Link>
      </div>
       
       
    </nav>
  )
}

export default Navbar